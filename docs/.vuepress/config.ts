
module.exports = {
  port: 8000,
  lang: 'zh-CN',
  title: "技术文档",
  description: "学而不思则罔，思而不学则殆",
  base: process.env.NODE_ENV === "development" ? "" : "/",
  dest: "./document", //打包输出目录
  head: [
    ["link", { rel: "icon", href: "/logo.png" }]
  ],
  markdown:{
    anchor:true
  },
  
  // plugins: ['run'],
  // plugins: [
  //   'run',
  // //   [
  // //     "@mr-hope/git",
  // //     {
  // //       contributor:false,//是否生成贡献者信息。

  // //     },
  // //   ],
  // //   ['vuepress-plugin-contributors', {
  // //     showAvatar: true,
  // //     showCount: true,
  // //     avatarSize: 32,
  // //     defaultAvatar: '/not-found.png', 
  // //     avatarProvider: 'github',
  // //     userProfileUrlProvider: 'github'
  // // }],
  // //   [
  // //     "vuepress-plugin-markmap"
  // //   ],
  // //   // [
  // //   //   "@mr-hope/comment",
  // //   //   {
  // //   //     // 配置选项
  // //   //   },
  // //   // ],
  // ],

  theme: '@vuepress/theme-default',
  themeConfig: {
    logo:"/logo.png",
    search: true, //搜索
    darkMode:false,
    repo:"https://github.com/BigCoal/webviews",
    searchMaxSuggestions: 12,
    navbar: [
      { text: "首页", link: "/" },
      { text: "前端技术", link: "/pages/Rule/commitLint" }
    ],
    // 侧边栏
    sidebar:
      [
        {
          text: "HTML",
          collapsible: true,
          children: [
            "/pages/HTML/client-offset-scroll.md",
          ]
        },
        {
          text: "CSS",
          collapsible: true,
          sidebarDepth: 10,
          children: [
            "/pages/CSS/流、元素与基本尺寸.md",
            {
              text: "盒尺寸四大家族",
              collapsible: true,
              sidebarDepth: 10,
              children: [
                "/pages/CSS/盒尺寸四大家族/Content.md",
                "/pages/CSS/盒尺寸四大家族/Padding.md",
                "/pages/CSS/盒尺寸四大家族/Margin.md",
                "/pages/CSS/盒尺寸四大家族/Border.md"
              ]
            },
          ]
        },
        {
          text: "ES6",
          collapsible: true,
          children: [
            {
              text: "阮一峰文档",
              collapsible: true,
              sidebarDepth: 10,
              children: [
                "/pages/ES6/intro.md",
                "/pages/ES6/let.md",
                "/pages/ES6/destructuring.md",
                "/pages/ES6/string.md",
                "/pages/ES6/string-methods.md",
                "/pages/ES6/regex.md",
                "/pages/ES6/number.md",
                "/pages/ES6/function.md",
                "/pages/ES6/array.md",
                "/pages/ES6/object.md",
                "/pages/ES6/object-methods.md",
                "/pages/ES6/operator.md",
                "/pages/ES6/symbol.md",
                "/pages/ES6/set-map.md",
                "/pages/ES6/proxy.md",
                "/pages/ES6/reflect.md",
                "/pages/ES6/promise.md",
                "/pages/ES6/iterator.md",
                "/pages/ES6/generator.md",
                "/pages/ES6/generator-async.md",
                "/pages/ES6/async.md",
                "/pages/ES6/class.md",
                "/pages/ES6/class-extends.md",
                "/pages/ES6/module.md",
                "/pages/ES6/module-loader.md",
                "/pages/ES6/style.md",
                "/pages/ES6/spec.md",
                "/pages/ES6/async-iterator.md",
                "/pages/ES6/arraybuffer.md",
                "/pages/ES6/proposals.md",
                "/pages/ES6/decorator.md",
                "/pages/ES6/reference.md",
              ]
            }
          ]
        },
        {
          text: "Javascript",
          collapsible: true,
          sidebarDepth: 10,
          children: [
            // "/pages/Javascript/ES5规范",
            "/pages/Javascript/任务队列.md",
            "/pages/Javascript/typeof.md",
            "/pages/Javascript/Promise原理解析.md",
            "/pages/Javascript/原型到原型链.md",
            {
              text: "执行上下文系列",
              collapsible: true,
              children: ["/pages/Javascript/词法作用域.md",
                "/pages/Javascript/执行上下文栈.md",
                "/pages/Javascript/变量对象.md",
                "/pages/Javascript/作用域链.md",
                "/pages/Javascript/this.md",
                "/pages/Javascript/深入执行上下文.md",
              ],
            },
            "/pages/Javascript/闭包.md",
            "/pages/Javascript/类数组.md",
            {
              text: "模拟实现系列",
              collapsible: true,
              children: [
                // 
                "/pages/Javascript/call和apply的模拟实现.md",
                "/pages/Javascript/bind模拟实现.md",
                "/pages/Javascript/new的模拟实现.md"
              ],
            },
            {
              text: "性能优化",
              collapsible: true,
              children: ["/pages/Javascript/缓存机制.md"],
            },
            {
              text: "本地存储和安全",
              collapsible: true,
              sidebarDepth: 10,
              children: [
                "/pages/Javascript/同源策略.md",
                "/pages/Javascript/cookie.md",
                "/pages/Javascript/XSS攻击.md",
                "/pages/Javascript/CSRF攻击.md",
            ],
            },
            {
              text: "类型转换",
              collapsible: true,
              sidebarDepth: 10,
              children: [
                "/pages/Javascript/类型转换（上）.md",
                "/pages/Javascript/类型转换（下）.md"
              ],
            },
            "/pages/Javascript/创建对象的多种方式.md",
            "/pages/Javascript/继承的多种方式.md",
          ]
        },
        {
          text: "Typescript",
          collapsible: true,
          children: [
            {
              text: "基本",
              collapsible: true,
              sidebarDepth: 10,
              children: [
                "/pages/Typescript/handbook/basic-types.md",
                "/pages/Typescript/handbook/interfaces.md",
                "/pages/Typescript/handbook/functions.md",
                "/pages/Typescript/handbook/literal-types.md",
                "/pages/Typescript/handbook/classes.md",
                "/pages/Typescript/handbook/enums.md",
                "/pages/Typescript/handbook/generics.md",
              ]
            }, {
              text: "进阶",
              collapsible: true,
              sidebarDepth: 10,
              children: [
                "/pages/Typescript/reference/advanced-types.md",
                "/pages/Typescript/reference/utility-types.md",
                "/pages/Typescript/reference/declaration-merging.md",
                "/pages/Typescript/reference/mixins.md",
                "/pages/Typescript/reference/type-compatibility.md",
                "/pages/Typescript/reference/type-inference.md",
                "/pages/Typescript/reference/jsx.md",
                "/pages/Typescript/reference/modules.md",
                "/pages/Typescript/reference/module-resolution.md",
                "/pages/Typescript/reference/namespaces.md",
                "/pages/Typescript/reference/namespaces-and-modules"

              ]
            }, {
              text: "声明文件",
              collapsible: true,
              sidebarDepth: 10,
              children: [
                "/pages/Typescript/declaration-files/introduction.md",
                "/pages/Typescript/declaration-files/by-example.md",
                "/pages/Typescript/declaration-files/library-structures.md",
                "/pages/Typescript/declaration-files/templates.md",
              ]
            }, {
              text: "工程配置",
              collapsible: true,
              sidebarDepth: 10,
              children: [
                "/pages/Typescript/project-config/tsconfig.json.md",
                "/pages/Typescript/project-config/project-references.md",
                "/pages/Typescript/project-config/compiler-options.md",
              ]
            }


          ]
        },
        {
          text: "工具/效率",
          collapsible: true,
          children: [
            "/pages/Rule/commitLint.md",
            {
              text: "Jest",
              collapsible: true,
              sidebarDepth: 10,
              children: [
                "/pages/单元测试/文档/CodeTransformation.md",
                "/pages/单元测试/文档/EnvironmentVariables.md",
                "/pages/单元测试/文档/Globals.md",
                "/pages/单元测试/文档/MockFunctions.md",
                "/pages/单元测试/文档/ConfiguringJest.md",
                "/pages/单元测试/文档/Expect.md",
                "/pages/单元测试/文档/JestCliOptions.md",
                "/pages/单元测试/文档/TheJestObject.md",
              ],
            },
          ],
        },
        {
          text: "源码解读",
          collapsible: true,
          children: [{
            text: "Vue3.0解析",
            collapsible: true,
            children: ["/pages/codeAnalysis/敬请期待.md"],
          }]
        },
        // "pages/微前端",
        // {
        //   text: "vue3.0",
        //   collapsible: true,
        //   children: ["/pages/CompositionAPI", "/pages/扩展","/pages/vueRouter@4.x","/pages/vuex@4.x"]
        // },
        // {
        //   text: "lodash",
        //   collapsible: true,
        //   children: ["/pages/lodash"]
        // },
        // "pages/熟悉Webpack",
      ]
  }
};
