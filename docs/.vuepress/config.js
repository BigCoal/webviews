module.exports = {
  port: 8000,
  title: "技术文档",
  description: "前端技术文档",
  base: process.env.NODE_ENV === "development" ? "" : "/",
  dest: process.env.NODE_ENV === "development" ? "" : "./document",
  head: [
    ["link", {rel: "icon", href: "/logo.png"}]
  ],
  themeConfig: {
    logo: "/logo.png",
    search: true, //搜索
    searchMaxSuggestions: 10,
    nav: [
      {text: "首页", link: "/"},
      {text: "前端技术", link: "/pages/Rule/commitLint"},
      {text: "如何更新？", link: "/pages/updateDoc"}
    ],
    // 侧边栏
    sidebar: 
    [
      {
        title: "Javascript",
        collapsable: true,
        children: [
          "/pages/Javascript/任务队列",
          "/pages/Javascript/Promise原理解析",
          "/pages/Javascript/原型到原型链",
          "/pages/Javascript/词法作用域",
          {
            title: "性能优化",
            collapsable: true,
            children: [ "/pages/Javascript/缓存机制"],
          },
         
        ]
      },
      {
        title: "Typescript",
        collapsable: true,
        children: [
          "/pages/Typescript/函数",
          "/pages/Typescript/对象"
         
        ]
      },
      {
        title: "规范",
        collapsable: true,
        children: ["/pages/Rule/commitLint"],
      },
      "pages/微前端",
      {
        title: "vue3.0",
        collapsable: true,
        children: ["/pages/CompositionAPI", "/pages/扩展","/pages/vueRouter@4.x","/pages/vuex@4.x"]
      },
      {
        title: "TS",
        collapsable: true,
        children: ["/pages/typeScript"]
      },
      {
        title: "ES6",
        collapsable: true,
        children: ["/pages/ES6"]
      },
      {
        title: "lodash",
        collapsable: true,
        children: ["/pages/lodash"]
      },
      "pages/熟悉Webpack",
    ]
  }
};
