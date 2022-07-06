module.exports = {
  port: 8000,
  lang: "zh-CN",
  title: "技术文档",
  description: "学而不思则罔，思而不学则殆",
  base: process.env.NODE_ENV === "development" ? "" : "/",
  dest: "./document", //打包输出目录
  head: [["link", { rel: "icon", href: "/logo.png" }]],
  markdown: {
    anchor: true,
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

  theme: "@vuepress/theme-default",
  themeConfig: {
    logo: "/logo.png",
    search: true, //搜索
    darkMode: false,
    repo: "https://github.com/BigCoal/webviews",
    searchMaxSuggestions: 12,
    navbar: [
      { text: "首页", link: "/" },
      { text: "GLAdmin", link: "/Admin/components/introduction" },
      { text: "前端技术", link: "/pages/Rule/commitLint" },
    ],
    // 侧边栏
    sidebar: {
      "/Admin": [
        {
          text: "GLAdmin",
          collapsible: true,
          children: [
            {
              text: "组件",
              children: [
                {
                  text: "前言",
                  link: "/Admin/components/introduction",
                },
              ],
            },
            {
              text: "全局组件",
              children: [
                {
                  text: "Button",
                  link: "/Admin/components/glob/button",
                },
              ],
            },
            {
              text: "常用组件",
              children: [
                {
                  text: "Basic",
                  link: "/Admin/components/basic",
                },
                {
                  text: "Page",
                  link: "/Admin/components/page",
                },
                {
                  text: "Icon",
                  link: "/Admin/components/icon",
                },
                {
                  text: "Authority",
                  link: "/Admin/components/auth",
                },
                {
                  text: "Form",
                  link: "/Admin/components/form",
                },
                {
                  text: "Table",
                  link: "/Admin/components/table",
                },
                {
                  text: "PopConfirmButton",
                  link: "/Admin/components/pop-confirm-button",
                },
                {
                  text: "CollapseContainer",
                  link: "/Admin/components/collapse-container",
                },
                {
                  text: "ScrollContainer",
                  link: "/Admin/components/scroll-container",
                },
                {
                  text: "LazyContainer",
                  link: "/Admin/components/lazy-container",
                },
                {
                  text: "CodeEditor",
                  link: "/Admin/components/code-editor",
                },
                {
                  text: "JsonPreview",
                  link: "/Admin/components/json-preview",
                },
                {
                  text: "CountDown",
                  link: "/Admin/components/count-down",
                },

                {
                  text: "ClickOutSide",
                  link: "/Admin/components/click-out-side",
                },
                {
                  text: "CountTo",
                  link: "/Admin/components/count-to",
                },
                {
                  text: "Cropper",
                  link: "/Admin/components/cropper",
                },
                {
                  text: "Description",
                  link: "/Admin/components/desc",
                },
                {
                  text: "Drawer",
                  link: "/Admin/components/drawer",
                },
                {
                  text: "Modal",
                  link: "/Admin/components/modal",
                },
                {
                  text: "FlowChart",
                  link: "/Admin/components/flow-chart",
                },
                {
                  text: "Upload",
                  link: "/Admin/components/upload",
                },
                {
                  text: "Tree",
                  link: "/Admin/components/tree",
                },
                {
                  text: "Excel",
                  link: "/Admin/components/excel",
                },
                {
                  text: "Qrcode",
                  link: "/Admin/components/qrcode",
                },
                {
                  text: "Markdown",
                  link: "/Admin/components/markdown",
                },
                {
                  text: "Loading",
                  link: "/Admin/components/loading",
                },
                {
                  text: "Tinymce",
                  link: "/Admin/components/tinymce",
                },
                {
                  text: "Time",
                  link: "/Admin/components/time",
                },
                {
                  text: "StrengthMeter",
                  link: "/Admin/components/strength-meter",
                },
                {
                  text: "Verify",
                  link: "/Admin/components/verify",
                },
                {
                  text: "Transition",
                  link: "/Admin/components/transition",
                },
                {
                  text: "VirtualScroll",
                  link: "/Admin/components/virtual-scroll",
                },
              ],
            },
            {
              text: "函数式组件",
              children: [
                {
                  text: "ContextMenu",
                  link: "/Admin/components/functional/context-menu",
                },
                {
                  text: "Loading",
                  link: "/Admin/components/functional/loading",
                },
                {
                  text: "Preview",
                  link: "/Admin/components/functional/preview",
                },
              ],
            },
          ],
        },
      ],
      "/pages/": [
        {
          text: "HTML",
          collapsible: true,
          children: ["/pages/HTML/client-offset-scroll.md"],
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
                "/pages/CSS/盒尺寸四大家族/Border.md",
              ],
            },
            {
              text: "内联元素和流",
              collapsible: true,
              sidebarDepth: 10,
              children: [
                "/pages/CSS/内联元素和流/字母x.md",
                "/pages/CSS/内联元素和流/line-height.md",
                "/pages/CSS/内联元素和流/vertical-align.md",
              ],
            },
            {
              text: "流的破坏与保护",
              collapsible: true,
              sidebarDepth: 10,
              children: [
                "/pages/CSS/流的破坏与保护/魔鬼属性float.md",
                "/pages/CSS/流的破坏与保护/魔鬼属性float的天然克星clear.md",
                "/pages/CSS/流的破坏与保护/最佳结界overflow.md",
                "/pages/CSS/流的破坏与保护/BFC.md",
                "/pages/CSS/流的破坏与保护/position-absolute.md",
                "/pages/CSS/流的破坏与保护/position-relative.md",
                "/pages/CSS/流的破坏与保护/position-fixed.md",
              ],
            },
            "/pages/CSS/css世界的层叠规则/css世界的层叠规则.md",
            {
              text: "强大的文本处理能力",
              collapsible: true,
              sidebarDepth: 10,
              children: [
                "/pages/CSS/强大的文本处理能力/font-size.md",
                "/pages/CSS/强大的文本处理能力/font-family.md",
              ],
            },
          ],
        },

        {
          text: "Javascript",
          collapsible: true,
          sidebarDepth: 10,
          children: [
            {
              text: "基础系列",
              collapsible: true,
              children: [
                "/pages/Javascript/基础系列/slice-substring-substr.md",
                {
                  text: "数据类型",
                  collapsible: true,
                  children: [
                    "/pages/Javascript/基础系列/数据类型/数据类型与堆栈.md",
                    "/pages/Javascript/基础系列/数据类型/null和undefined.md",
                    "/pages/Javascript/基础系列/数据类型/int和bigInt.md",
                  ],
                },

                "/pages/Javascript/基础系列/正则/正则表达式.md",
                "/pages/Javascript/基础系列/任务队列.md",
                "/pages/Javascript/基础系列/typeof.md",
                "/pages/Javascript/基础系列/Promise原理解析.md",
                "/pages/Javascript/基础系列/原型到原型链.md",
                {
                  text: "执行上下文系列",
                  collapsible: true,
                  children: [
                    "/pages/Javascript/基础系列/词法作用域.md",
                    "/pages/Javascript/基础系列/执行上下文栈.md",
                    "/pages/Javascript/基础系列/变量对象.md",
                    "/pages/Javascript/基础系列/作用域链.md",
                    "/pages/Javascript/基础系列/this.md",
                    "/pages/Javascript/基础系列/深入执行上下文.md",
                  ],
                },
                "/pages/Javascript/基础系列/闭包.md",
                "/pages/Javascript/基础系列/类数组.md",
                {
                  text: "模拟实现系列",
                  collapsible: true,
                  children: [
                    //
                    "/pages/Javascript/基础系列/call和apply的模拟实现.md",
                    "/pages/Javascript/基础系列/bind模拟实现.md",
                    "/pages/Javascript/基础系列/new的模拟实现.md",
                  ],
                },
                {
                  text: "性能优化",
                  collapsible: true,
                  children: ["/pages/Javascript/基础系列/缓存机制.md"],
                },
                {
                  text: "本地存储和安全",
                  collapsible: true,
                  sidebarDepth: 10,
                  children: [
                    "/pages/Javascript/基础系列/同源策略.md",
                    "/pages/Javascript/基础系列/cookie.md",
                    "/pages/Javascript/基础系列/XSS攻击.md",
                    "/pages/Javascript/基础系列/CSRF攻击.md",
                  ],
                },
                {
                  text: "类型转换",
                  collapsible: true,
                  sidebarDepth: 10,
                  children: [
                    "/pages/Javascript/基础系列/类型转换（上）.md",
                    "/pages/Javascript/基础系列/类型转换（下）.md",
                  ],
                },
                "/pages/Javascript/基础系列/创建对象的多种方式.md",
                "/pages/Javascript/基础系列/继承的多种方式.md",
              ],
            },
            {
              text: "专题系列",
              collapsible: true,
              children: [
                {
                  text: "防抖与节流",
                  collapsible: true,
                  children: [
                    "/pages/Javascript/专题系列/防抖与节流/防抖.md",
                    "/pages/Javascript/专题系列/防抖与节流/节流.md",
                  ],
                },
                {
                  text: "数组系列",
                  collapsible: true,
                  children: [
                    "/pages/Javascript/专题系列/数组系列/数组去重.md",
                    "/pages/Javascript/专题系列/数组系列/数组扁平化.md",
                    "/pages/Javascript/专题系列/数组系列/数组查找指定元素.md",
                    "/pages/Javascript/专题系列/数组系列/数组最大值最小值.md",
                    "/pages/Javascript/专题系列/数组系列/数组乱序.md",
                    "/pages/Javascript/专题系列/数组系列/v8 排序源码.md",
                  ],
                },
                {
                  text: "类型判断",
                  collapsible: true,
                  children: [
                    "/pages/Javascript/专题系列/类型判断/类型判断(上).md",
                    "/pages/Javascript/专题系列/类型判断/类型判断(下).md",
                  ],
                },
                {
                  text: "函数",
                  collapsible: true,
                  children: [
                    "/pages/Javascript/专题系列/函数系列/惰性函数.md",
                    "/pages/Javascript/专题系列/函数系列/函数记忆.md",
                    "/pages/Javascript/专题系列/函数系列/函数柯里化.md",
                    "/pages/Javascript/专题系列/函数系列/函数组合.md",
                    "/pages/Javascript/专题系列/函数系列/偏函数.md",
                    "/pages/Javascript/专题系列/函数系列/递归.md",
                  ],
                },
                "/pages/Javascript/专题系列/深浅拷贝.md",
                "/pages/Javascript/专题系列/判断两个对象相等.md",
                "/pages/Javascript/专题系列/实现 jQuery 的 each .md",
                "/pages/Javascript/专题系列/实现 jquery 的 extend.md",
                "/pages/Javascript/专题系列/垃圾回收.md",
              ],
            },
            {
              text: "ES6系列",
              collapsible: true,
              children: [
                {
                  text: "阮一峰文档",
                  collapsible: true,
                  sidebarDepth: 10,
                  children: [
                    "/pages/Javascript/ES6/文档/intro.md",
                    "/pages/Javascript/ES6/文档/let.md",
                    "/pages/Javascript/ES6/文档/destructuring.md",
                    "/pages/Javascript/ES6/文档/string.md",
                    "/pages/Javascript/ES6/文档/string-methods.md",
                    "/pages/Javascript/ES6/文档/regex.md",
                    "/pages/Javascript/ES6/文档/number.md",
                    "/pages/Javascript/ES6/文档/function.md",
                    "/pages/Javascript/ES6/文档/array.md",
                    "/pages/Javascript/ES6/文档/object.md",
                    "/pages/Javascript/ES6/文档/object-methods.md",
                    "/pages/Javascript/ES6/文档/operator.md",
                    "/pages/Javascript/ES6/文档/symbol.md",
                    "/pages/Javascript/ES6/文档/set-map.md",
                    "/pages/Javascript/ES6/文档/proxy.md",
                    "/pages/Javascript/ES6/文档/reflect.md",
                    "/pages/Javascript/ES6/文档/promise.md",
                    "/pages/Javascript/ES6/文档/iterator.md",
                    "/pages/Javascript/ES6/文档/generator.md",
                    "/pages/Javascript/ES6/文档/generator-async.md",
                    "/pages/Javascript/ES6/文档/async.md",
                    "/pages/Javascript/ES6/文档/class.md",
                    "/pages/Javascript/ES6/文档/class-extends.md",
                    "/pages/Javascript/ES6/文档/module.md",
                    "/pages/Javascript/ES6/文档/module-loader.md",
                    "/pages/Javascript/ES6/文档/style.md",
                    "/pages/Javascript/ES6/文档/spec.md",
                    "/pages/Javascript/ES6/文档/async-iterator.md",
                    "/pages/Javascript/ES6/文档/arraybuffer.md",
                    "/pages/Javascript/ES6/文档/proposals.md",
                    "/pages/Javascript/ES6/文档/decorator.md",
                    "/pages/Javascript/ES6/文档/reference.md",
                  ],
                },
                "/pages/Javascript/ES6/模块加载规范.md",
              ],
            },
          ],
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
              ],
            },
            {
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
                "/pages/Typescript/reference/namespaces-and-modules",
              ],
            },
            {
              text: "声明文件",
              collapsible: true,
              sidebarDepth: 10,
              children: [
                "/pages/Typescript/declaration-files/introduction.md",
                "/pages/Typescript/declaration-files/by-example.md",
                "/pages/Typescript/declaration-files/library-structures.md",
                "/pages/Typescript/declaration-files/templates.md",
              ],
            },
            {
              text: "工程配置",
              collapsible: true,
              sidebarDepth: 10,
              children: [
                "/pages/Typescript/project-config/tsconfig.json.md",
                "/pages/Typescript/project-config/project-references.md",
                "/pages/Typescript/project-config/compiler-options.md",
              ],
            },
          ],
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
          text: "Git",
          collapsible: true,
          children: ["/pages/Git/版本管理.md", "/pages/Git/commit合并.md"],
        },

        {
          text: "算法",
          collapsible: true,
          children: [
            "/pages/算法/位运算/位运算(上).md",
            "/pages/算法/位运算/位运算(下).md",
            "/pages/算法/堆与栈.md",
            "/pages/算法/复杂度/时间复杂度.md",
            "/pages/算法/哈希表/哈希表.md",
            "/pages/算法/树/二叉树.md",
          ],
        },
        {
          text: "源码解读",
          collapsible: true,
          children: [
            {
              text: "Vue3.0解析",
              collapsible: true,
              children: ["/pages/codeAnalysis/敬请期待.md"],
            },
          ],
        },
        {
          text: "技术方案",
          collapsible: true,
          children: ["/pages/技术方案/前端技术实现文件预览.md"],
        },
      ],
    },
  },
};
