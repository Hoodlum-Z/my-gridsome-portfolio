// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'My Gridsome Portfolio',
  siteDescription: 'Gridsome and Bootstrap portfolio starter site',
  siteUrl: 'https://my-gridsome-portfolio.netlify.com/',

  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'works/**/*.md',
        typeName: 'Work',
        route: '/works/:slug',
        resolveAbsolutePaths: true,
        remark: {
          plugins: [
            // local plugins
          ]
        }
      }
    }
  ],
  transformers: {
    remark: {
      plugins: [
      // global remark options
        '@gridsome/remark-prismjs'
      ]
    }
  }
}