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
          // "/pages/Javascript/规范",
          "/pages/Javascript/任务队列",
          "/pages/Javascript/typeof",
          "/pages/Javascript/Promise原理解析",
          "/pages/Javascript/原型到原型链",
          {
            title: "执行上下文系列",
            collapsable: true,
            children: [  "/pages/Javascript/词法作用域",
            "/pages/Javascript/执行上下文栈",
            "/pages/Javascript/变量对象",
            "/pages/Javascript/作用域链",
            "/pages/Javascript/this",],
          },
         
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
          // {
          //   title: "英文版",
          //   collapsable: true,
          //   children: [
          //     "/pages/Typescript/英文版/说明",
          //     "/pages/Typescript/英文版/基础类型",
          //     "/pages/Typescript/英文版/函数",
          //     "/pages/Typescript/英文版/对象",
          //     "/pages/Typescript/英文版/class",
          //     {
          //       title: "类型操作",
          //       collapsable: true,
          //       children: [ 
          //         "/pages/Typescript/英文版/类型操作/范型操作",
          //         "/pages/Typescript/英文版/类型操作/KeyOf类型操作",
          //         "/pages/Typescript/英文版/类型操作/TypeOf类型操作",
          //         "/pages/Typescript/英文版/类型操作/索引的访问类型",
          //         "/pages/Typescript/英文版/类型操作/条件类型",
          //         "/pages/Typescript/英文版/类型操作/映射类型",
          //         "/pages/Typescript/英文版/类型操作/模板文字类型",
          //       ],
          //     },
          //   ]
          // },
          {
            title: "中文版",
            collapsable: true,
            children: [
              "/pages/Typescript/中文版/handbook/basic-types",
              "/pages/Typescript/中文版/handbook/interfaces",
              "/pages/Typescript/中文版/handbook/functions",
              "/pages/Typescript/中文版/handbook/literal-types",
              "/pages/Typescript/中文版/handbook/classes",
              "/pages/Typescript/中文版/handbook/enums",
              "/pages/Typescript/中文版/handbook/generics",
            ]
          },
         
         
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
