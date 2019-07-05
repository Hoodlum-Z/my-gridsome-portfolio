// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'My Gridsome Portfolio',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'works/**/*.md',
        typeName: 'Work',
        route: '/works:slug',
        remark: {
          plugins: [
            '@gridsome/remark-prismjs'
          ]
        }
      }
    }
  ],
  transformers: {
    remark: {
      // global remark options
    }
  }
}