import { defineClientConfig } from '@vuepress/client'
import Avue from '@smallwei/avue'
import '@smallwei/avue/lib/index.css'
export default defineClientConfig({
  enhance({ app }) {
    app.use(Avue)
  },
})
