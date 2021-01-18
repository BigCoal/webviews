module.exports = {
  port:8000,
  title: "技术文档",
  description: "前端技术文档",
  base:"./",
  dest:"./document",
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }]
  ],
  themeConfig: {
    logo: '/logo.png',
    search: true, //搜索
    searchMaxSuggestions: 10,
    nav: [
        { text: "首页", link: "/" },
        { text: "前端技术", link: "pages/测试" }
      ],
      // 侧边栏
      sidebar: [
        {
          title: "HTML",
          collapsable: true,
          children: ["pages/测试"],
        }, {
            title: "HTML2",
            collapsable: true,
            children: ["pages/ceshi2"],
          },
      ],
  }
};
