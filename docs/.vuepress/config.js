module.exports = {
  port: 8000,
  title: "技术文档",
  description: "勤学如春起之苗，不见其增，日有所长；辍学如磨刀之石，不见其损，日有所亏。",
  base: process.env.NODE_ENV === "development" ? "" : "/",
  dest: process.env.NODE_ENV === "development" ? "" : "./document",
  head: [
    ["link", { rel: "icon", href: "/logo.png" }]
  ],
  themeConfig: {
    logo:"/logo.png",
    search: true, //搜索
    searchMaxSuggestions: 12,
    nav: [
      { text: "首页", link: "/" },
      { text: "前端技术", link: "/pages/Rule/commitLint" },
      { text: "如何更新？", link: "/pages/updateDoc" }
    ],
    // 侧边栏
    sidebar:
      [
        {
          title: "ES6",
          collapsable: true,
          children: [
            {
              title: "阮一峰文档",
              collapsable: true,
              sidebarDepth: 10,
              children: [
                "/pages/ES6/intro",
                "/pages/ES6/let",
                "/pages/ES6/destructuring",
                "/pages/ES6/string",
                "/pages/ES6/string-methods",
                "/pages/ES6/regex",
                "/pages/ES6/number",
                "/pages/ES6/function",
                "/pages/ES6/array",
                "/pages/ES6/object",
                "/pages/ES6/object-methods",
                "/pages/ES6/operator",
                "/pages/ES6/symbol",
                "/pages/ES6/set-map",
                "/pages/ES6/proxy",
                "/pages/ES6/reflect",
                "/pages/ES6/promise",
                "/pages/ES6/iterator",
                "/pages/ES6/generator",
                "/pages/ES6/generator-async",
                "/pages/ES6/async",
                "/pages/ES6/class",
                "/pages/ES6/class-extends",
                "/pages/ES6/module",
                "/pages/ES6/module-loader",
                "/pages/ES6/style",
                "/pages/ES6/spec",
                "/pages/ES6/async-iterator",
                "/pages/ES6/arraybuffer",
                "/pages/ES6/proposals",
                "/pages/ES6/decorator",
                "/pages/ES6/reference",
              ]
            }
          ]
        },
        {
          title: "Javascript",
          collapsable: true,
          sidebarDepth: 10,
          children: [
            // "/pages/Javascript/ES5规范",
            // {
            //   title: "基础",
            //   collapsable: true,
            //   sidebarDepth:10,
            //   children: [
            "/pages/Javascript/任务队列",
            "/pages/Javascript/typeof",
            "/pages/Javascript/Promise原理解析",
            "/pages/Javascript/原型到原型链",
            {
              title: "执行上下文系列",
              collapsable: true,
              children: ["/pages/Javascript/词法作用域",
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
                "/pages/Javascript/new的模拟实现"
              ],
            },
            {
              title: "性能优化",
              collapsable: true,
              children: ["/pages/Javascript/缓存机制"],
            },
            {
              title: "本地存储和安全",
              collapsable: true,
              sidebarDepth: 10,
              children: [
                "/pages/Javascript/同源策略",
                "/pages/Javascript/cookie",
                "/pages/Javascript/XSS攻击",
                "/pages/Javascript/CSRF攻击",
            ],
            },
            {
              title: "类型转换",
              collapsable: true,
              sidebarDepth: 10,
              children: [
                "/pages/Javascript/类型转换（上）",
                "/pages/Javascript/类型转换（下）"
              ],
            },
            "/pages/Javascript/创建对象的多种方式",
            "/pages/Javascript/继承的多种方式",
            //   ]
            // }
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
              sidebarDepth: 10,
              children: [
                "/pages/Typescript/handbook/basic-types",
                "/pages/Typescript/handbook/interfaces",
                "/pages/Typescript/handbook/functions",
                "/pages/Typescript/handbook/literal-types",
                "/pages/Typescript/handbook/classes",
                "/pages/Typescript/handbook/enums",
                "/pages/Typescript/handbook/generics",
              ]
            }, {
              title: "进阶",
              collapsable: true,
              sidebarDepth: 10,
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
            }, {
              title: "声明文件",
              collapsable: true,
              sidebarDepth: 10,
              children: [
                "/pages/Typescript/declaration-files/introduction",
                "/pages/Typescript/declaration-files/by-example",
                "/pages/Typescript/declaration-files/library-structures",
                "/pages/Typescript/declaration-files/templates",
              ]
            }, {
              title: "工程配置",
              collapsable: true,
              sidebarDepth: 10,
              children: [
                "/pages/Typescript/project-config/tsconfig.json",
                "/pages/Typescript/project-config/project-references",
                "/pages/Typescript/project-config/compiler-options",
              ]
            }


          ]
        },
        {
          title: "工具/效率",
          collapsable: true,
          children: [
            "/pages/Rule/commitLint",
            {
              title: "Jest",
              collapsable: true,
              sidebarDepth: 10,
              children: [
                "/pages/单元测试/文档/CodeTransformation",
                "/pages/单元测试/文档/EnvironmentVariables",
                "/pages/单元测试/文档/Globals",
                "/pages/单元测试/文档/MockFunctions",
                "/pages/单元测试/文档/ConfiguringJest",
                "/pages/单元测试/文档/Expect",
                "/pages/单元测试/文档/JestCliOptions",
                "/pages/单元测试/文档/TheJestObject",
              ],
            },
          ],
        },
        {
          title: "源码解读",
          collapsable: true,
          children: [{
            title: "Vue3.0解析",
            collapsable: true,
            children: ["/pages/codeAnalysis/敬请期待"],
          }]
        },
        // "pages/微前端",
        // {
        //   title: "vue3.0",
        //   collapsable: true,
        //   children: ["/pages/CompositionAPI", "/pages/扩展","/pages/vueRouter@4.x","/pages/vuex@4.x"]
        // },
        // {
        //   title: "lodash",
        //   collapsable: true,
        //   children: ["/pages/lodash"]
        // },
        // "pages/熟悉Webpack",
      ]
  }
};
