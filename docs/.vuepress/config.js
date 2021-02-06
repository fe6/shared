const base = process.env.NODE_ENV === 'production' ? '/shared/' : '/'

module.exports = {
  title: 'Shared',
  description: '水滴共享函数集',
  base,
  head: [
    ['link', { rel: 'icon', href: '$withBase(\'/images/favicon.ico\')' }]
  ],
  serviceWorker: true,
}
