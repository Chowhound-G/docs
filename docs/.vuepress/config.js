module.exports = {
  base:'/docs/'
  title: "小G的Blog",
  lastUpdated: "更新时间", // string | boolean
  themeConfig: { 
    description: " My First Blog",
    logo: "/assets/img/hero.png",
    head: [
      ["meta", { author: "Kwok", content: "小G的个人博客" }],
      ["head", { link: "./public/assets/img/favicon.ico" }],
    ],
    nav: [
      { text: "主页", link: "/" },
      { text: "日记", link: "/diary/" },
      { text: "技术", link: "/technology/" },
      { text: "Github", link: "https://github.com/Chowhound-G" },
    ],
    sidebar: "auto",
    displayAllHeaders: true,
  },
};
