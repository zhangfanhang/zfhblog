import { useStyleTag } from "/Users/frank/myProjects/zfhblog/node_modules/vuepress-plugin-components/lib/client/composables/index.js";
import { h } from "vue";
import { defineClientConfig } from "@vuepress/client";
import FontIcon from "/Users/frank/myProjects/zfhblog/node_modules/vuepress-plugin-components/lib/client/components/FontIcon.js";
import Badge from "/Users/frank/myProjects/zfhblog/node_modules/vuepress-plugin-components/lib/client/components/Badge.js";
import CodePen from "/Users/frank/myProjects/zfhblog/node_modules/vuepress-plugin-components/lib/client/components/CodePen.js";
import BackToTop from "/Users/frank/myProjects/zfhblog/node_modules/vuepress-plugin-components/lib/client/components/BackToTop.js";


export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("FontIcon", FontIcon);
    app.component("Badge", Badge);
    app.component("CodePen", CodePen);
    
  },
  setup: () => {
    useStyleTag(`@import url("//at.alicdn.com/t/font_2410206_a0xb9hku9iu.css");`, { id: "icon-assets" });
    
  },
  rootComponents: [
    () => h(BackToTop, { threshold: 300 }),
    
  ],
});