module.exports = {
  // 网站的标题，它将会被用作所有页面标题的前缀，同时，默认主题下，它将显示在导航栏（navbar）上
  title: "Moster Seven's blog",
  // 网站的描述，它将会以 <meta> 标签渲染到当前页面的 HTML 中
  description: "Just playing around",
  // 部署站点的基础路径
  base: "/blog/",
  // 指定用于 dev server 的主机名
  host: "0.0.0.0",
  // 指定用于 dev server 的端口
  port: "8080",
  // 额外的需要被注入到当前页面的 HTML <head> 中的标签
  head: [
    // 增加一个自定义的 favicon
    // ["link", { rel: "icon", href: "/avatar-cute.png" }],
    ["link", { rel: "icon", href: "/cloudy.png" }],
    // ["link", { rel: "icon", href: "/sheep.png" }],
  ],
  // theme:'',
  // 为当前的主题提供一些配置，这些选项依赖于你正在使用的主题
  themeConfig: {
    // 导航栏logo
    logo: "/avatar.png",
    sidebar: "auto",
    sidebarDepth: 2,
    // 显示所有页面的标题链接
    displayAllHeaders: true, // 默认值：false
    // 导航栏链接
    nav: [
      { text: "Home", link: "/" },
      { text: "前端笔记", link: "/studyNote/frontend/front_end" },
      { text: "后端笔记", link: "/studyNote/backend/back_end" },
      { text: "博客园", link: "https://www.cnblogs.com/MosterSeven/" },
      { text: "Gitee", link: "https://gitee.com/mosterseven" },
      // {
      //   text: "Languages",
      //   ariaLabel: "Language Menu",
      //   // 提供items数组可以让导航栏里出现下拉列表
      //   items: [
      //     { text: "Chinese", link: "/language/chinese/" },
      //     { text: "Japanese", link: "/language/japanese/" },
      //   ],
      // },
    ],
    // 获取每个文件最后一次 git 提交的 UNIX 时间戳，同时它将以合适的日期格式显示在每一页的底部
    // 默认是关闭的，如果给定一个字符串，它将会作为前缀显示
    lastUpdated: "最后更新时间", // string | boolean
    locales: {
      "/": {
        // 多语言下拉菜单默认的标题
        selectText: "选择语言",
        label: "简体中文",
        // 导航栏链接
        nav: [
          { text: "Home", link: "/" },
          { text: "博客园", link: "https://www.cnblogs.com/MosterSeven/" },
          { text: "Gitee", link: "https://gitee.com/mosterseven" },
        ],
        sidebar: "auto",
      },
      "/language/chinese/": {
        // 多语言下拉菜单的标题
        selectText: "选择语言",
        // 该语言在下拉菜单中的标签
        label: "简体中文",
      },
      "/language/english/": {
        // 多语言下拉菜单的标题
        selectText: "Language",
        // 该语言在下拉菜单中的标签
        label: "English",
      },
      "/language/japanese/": {
        // 多语言下拉菜单的标题
        selectText: "Languages",
        // 该语言在下拉菜单中的标签
        label: "日本語",
      },
    },
  },
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    "/": {
      lang: "zh-CN", // 将会被设置为 <html> 的 lang 属性
      title: "Moster Seven's blog",
    },
    "/language/english/": {
      lang: "en-US",
      title: "Moster Seven's blog",
    },
    "/language/japanese/": {
      lang: "ja-JP",
      title: "Moster Seven's blog",
    },
  },
};
