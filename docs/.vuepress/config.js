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
    searchMaxSuggestions: 12,
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
            "/pages/Javascript/this",
            "/pages/Javascript/深入执行上下文",
            ],
          },
          "/pages/Javascript/闭包",
          "/pages/Javascript/类数组",
          {
            title: "模拟实现系列",
            collapsable: true,
            children: [  
            // 
            "/pages/Javascript/call和apply的模拟实现",
            "/pages/Javascript/bind模拟实现",
            // "/pages/Javascript/new的模拟实现"
            ],
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
            title: "基本",
            collapsable: true,
            sidebarDepth:10,
            children: [
              "/pages/Typescript/handbook/basic-types",
              "/pages/Typescript/handbook/interfaces",
              "/pages/Typescript/handbook/functions",
              "/pages/Typescript/handbook/literal-types",
              "/pages/Typescript/handbook/classes",
              "/pages/Typescript/handbook/enums",
              "/pages/Typescript/handbook/generics",
            ]
          },{
            title: "进阶",
            collapsable: true,
            sidebarDepth:10,
            children: [
              "/pages/Typescript/reference/advanced-types",
              "/pages/Typescript/reference/utility-types",
              "/pages/Typescript/reference/declaration-merging",
              "/pages/Typescript/reference/mixins",
              "/pages/Typescript/reference/type-compatibility",
              "/pages/Typescript/reference/type-inference",
              "/pages/Typescript/reference/jsx",
              "/pages/Typescript/reference/modules",
              "/pages/Typescript/reference/module-resolution",
              "/pages/Typescript/reference/namespaces",
              "/pages/Typescript/reference/namespaces-and-modules"
              
            ]
          },{
            title: "声明文件",
            collapsable: true,
            sidebarDepth:10,
            children: [
              "/pages/Typescript/declaration-files/introduction",
              "/pages/Typescript/declaration-files/by-example",
              "/pages/Typescript/declaration-files/library-structures",
              "/pages/Typescript/declaration-files/templates",
            ]
          },{
            title: "工程配置",
            collapsable: true,
            sidebarDepth:10,
            children: [
              "/pages/Typescript/project-config/tsconfig.json",
              "/pages/Typescript/project-config/project-references",
              "/pages/Typescript/project-config/compiler-options",
            ]
          }
         
         
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
