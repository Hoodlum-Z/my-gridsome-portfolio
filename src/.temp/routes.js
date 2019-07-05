export default [
  {
    path: "/about",
    component: () => import(/* webpackChunkName: "page--src-pages-about-vue" */ "C:\\Users\\David\\my-gridsome-portfolio\\src\\pages\\About.vue")
  },
  {
    name: "404",
    path: "/404",
    component: () => import(/* webpackChunkName: "page--node-modules-gridsome-app-pages-404-vue" */ "C:\\Users\\David\\my-gridsome-portfolio\\node_modules\\gridsome\\app\\pages\\404.vue")
  },
  {
    name: "home",
    path: "/",
    component: () => import(/* webpackChunkName: "page--src-pages-index-vue" */ "C:\\Users\\David\\my-gridsome-portfolio\\src\\pages\\Index.vue"),
    meta: {
      data: true
    }
  },
  {
    path: "/works:slug",
    component: () => import(/* webpackChunkName: "page--src-templates-work-vue" */ "C:\\Users\\David\\my-gridsome-portfolio\\src\\templates\\Work.vue"),
    meta: {
      data: true
    }
  },
  {
    name: "*",
    path: "*",
    component: () => import(/* webpackChunkName: "page--node-modules-gridsome-app-pages-404-vue" */ "C:\\Users\\David\\my-gridsome-portfolio\\node_modules\\gridsome\\app\\pages\\404.vue")
  }
]

