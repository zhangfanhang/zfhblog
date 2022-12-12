import { defineClientConfig } from '@vuepress/client'
import Avue from '@smallwei/avue'
import '@smallwei/avue/lib/index.css'
export default defineClientConfig({
  async enhance({ app }) {
    if (!__VUEPRESS_SSR__) {
      const AvueModule = await import('@smallwei/avue')
      app.use(AvueModule)
    }
  },
})
