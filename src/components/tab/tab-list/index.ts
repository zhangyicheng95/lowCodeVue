import type { App } from 'vue'
import type { SFCWithInstall } from '@/utils/types'
import { loadAsyncComponent } from '@/utils/async-component'
import TabList from './src/index.vue'

TabList.install = (app: App): void => {
  app.component('VTabList', TabList)
  app.component('VTabListProp', loadAsyncComponent(() => import('./src/config.vue')))
}

export default TabList as SFCWithInstall<typeof TabList>
