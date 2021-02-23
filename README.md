## Shared
> 水滴共享函数集

[![@fe6/shared][npm-image]][npm-url] [![CI status][github-action-image]][github-action-url] [![Codecov 单元测试覆盖][codecov-image]][codecov-url]  [![NPM downloads][downloads-image]][downloads-url] [![GitHub code size in bytes][size-image]][size-url] ![gzip][gzip-image] [![GitHub][mit-image]][mit-url] ![GitHub language count][lang-image] ![code style: prettier][prettier-image]

[github-action-image]: https://github.com/fe6/shared/workflows/CI/badge.svg
[github-action-url]: https://github.com/fe6/shared/actions?query=workflow%3ACI
[npm-image]: https://img.shields.io/npm/v/@fe6/shared.svg
[npm-url]: https://www.npmjs.org/package/@fe6/shared
[downloads-image]: http://img.shields.io/npm/dm/@fe6/shared.svg
[downloads-url]: https://npmjs.org/package/@fe6/shared
[size-image]: https://img.badgesize.io/https://unpkg.com/@fe6/shared/dist/shared.global.prod.js?label=shared.min.js&compression=gzip
[size-url]: https://unpkg.com/@fe6/shared
[mit-image]: https://img.shields.io/github/license/fe6/shared
[mit-url]: https://github.com/fe6/shared/blob/master/LICENSE
[codecov-image]: https://img.shields.io/codecov/c/github/fe6/shared/master.svg
[codecov-url]: https://codecov.io/gh/fe6/shared/branch/master
[lang-image]: https://img.shields.io/github/languages/count/fe6/shared.svg
[gzip-image]: https://img.badgesize.io/https:/unpkg.com/@fe6/shared?compression=gzip
[prettier-image]: https://img.shields.io/badge/code_style-prettier-ff69b4.svg


Shared 库导出为 UMD 模块。 Shared 是根据 MIT 许可发布的，并且支持现代环境。 查看版本差异，然后选择最适合您的版本。

## 安装

浏览器端：

``` html
<script src="https://unpkg.com/@fe6/shared"></script>
```

用 npm :

``` js
npm i @fe6/shared
```

用 node :

``` js
var shared = require('@fe6/shared');
```

## 为什么会有 Shared ?

由于 Water 的不断壮大，由于项目的不断增多。众多重复的代码出现在不同的仓库中，为了规避这样的现象。

- 减少了复制粘贴
- 规避了代码冗余
- 便于统一维护

## License

Shared is licensed under a [MIT License](./LICENSE).
