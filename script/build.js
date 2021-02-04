/*
Produces production builds and stitches together d.ts files.

To specify the package to build, simply pass its name and the desired build
formats to output (defaults to `buildOptions.formats` specified in that package,
or "esm,cjs"):

```
# name supports fuzzy match. will build all packages with name containing "dom":
yarn build dom

# specify the format to output
yarn build core --formats cjs
```
*/

const fs = require('fs-extra')
const path = require('path')
const chalk = require('chalk')
const execa = require('execa')
const { gzipSync } = require('zlib')
const { compress } = require('brotli')

const args = require('minimist')(process.argv.slice(2))
const formats = args.formats || args.f
const devOnly = args.devOnly || args.d
const sourceMap = args.sourcemap || args.s
const isRelease = args.release
const buildTypes = args.t || args.types || isRelease

build()

async function build() {
  const pkgDir = path.resolve(`.`)
  const pkg = require(`${pkgDir}/package.json`)
  const name = pkg.name;

  // if building a specific format, do not remove dist.
  if (!formats) {
    await fs.remove(`${pkgDir}/dist`)
  }

  const env =
    (pkg.buildOptions && pkg.buildOptions.env) ||
    (devOnly ? 'development' : 'production')

    await execa(
    'rollup',
    [
      '-c',
      '--environment',
      [
        `NODE_ENV:${env}`,
        formats ? `FORMATS:${formats}` : ``,
        buildTypes ? `TYPES:true` : ``,
        sourceMap ? `SOURCE_MAP:true` : ``
      ]
        .filter(Boolean)
        .join(',')
    ],
    { stdio: 'inherit' }
  )

  if (buildTypes && pkg.types) {
    console.log()
    const typesDir = path.resolve(pkgDir, 'types')
    if (await fs.exists(typesDir)) {
      await fs.remove(typesDir);
    }
    const dtsPath = path.resolve(pkgDir, 'dist/src')
    const destPath = path.resolve(pkgDir, 'types');
    console.log(
      chalk.bold(chalk.yellow(`Rolling up type definitions for ${name}...`))
    )
    fs.rename(dtsPath, destPath, (err) => {
      if (err) throw err;
      fs.stat(destPath, (err, stats) => {
        if (err) throw err;
        console.log()
        console.log(
          chalk.bold(chalk.green(`Types generated successfully`))
        )
        console.log()
        checkFileSize(`${pkgDir}/dist/${name}.global.prod.js`)
        console.log()
      });
    });
  }
}

function checkFileSize(filePath) {
  if (!fs.existsSync(filePath)) {
    return
  }
  const file = fs.readFileSync(filePath)
  const minSize = (file.length / 1024).toFixed(2) + 'kb'
  const gzipped = gzipSync(file)
  const gzippedSize = (gzipped.length / 1024).toFixed(2) + 'kb'
  const compressed = compress(file)
  const compressedSize = (compressed.length / 1024).toFixed(2) + 'kb'
  console.log(
    `${chalk.gray(
      chalk.bold(path.basename(filePath))
    )} min:${minSize} / gzip:${gzippedSize} / brotli:${compressedSize}`
  )
}
