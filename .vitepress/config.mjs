import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Modded MITE",
  description: "Minecraft Is Too Easy with Extra Mods",
  outDir: "dist",
  srcDir: "src",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '资源', link: '/resources' },
      { text: '开发', link: '/developing' },
      { text: '关于', link: '/about' }
    ],

    sidebar: [
      {
        text: '资源',
        items: [
          { text: '资源下载',link: '/resources/index' },
          { text: 'FML 1- 模组下载', link: '/resources/mod_download/fml1' },
          { text: 'FML 3+ 模组下载', link: '/resources/mod_download/fml3' }
        ]
      },
      {
        text: '开发',
        items: [
          { text: 'FML 3 环境部署', link: '/developing/fml3env' },
          { text: 'ManyLib 开发文档', link: '/developing/manylib' },
          { text: '锈铁核心开发文档', link: '/developing/rustcore' },
          { text: 'FishModLoader 3 教程', link: '/developing/fml3tutor' }
        ]
      },
      {
        text: '关于',
        items: [
          { text: '关于我们', link: '/about'}
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
