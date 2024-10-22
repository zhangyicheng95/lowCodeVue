import { DatavComponent } from '@/components/_models/datav-component'
import {
  ApiConfigMap, ApiDataConfigMap, setApiConfig, setApiData,
} from '@/components/_models/data-source'
import { DataEventConfig } from '@/components/_models/data-event'
import { getStaticData } from '@/api/data'
import { createField } from '@/components/_models/data-field'

/**
 * TabList
 */
export class TabList extends DatavComponent {
  config = {
    title: '我是标题数据',
    textStyle: {
      fontFamily: 'Microsoft Yahei',
      fontSize: 24,
      color: '#fff',
      fontWeight: 'normal',
    },
    textAlign: 'left',
    writingMode: 'horizontal-tb',
    letterSpacing: 0,
    backgroundStyle: {
      show: false,
      bgColor: '#008bff',
      borderRadius: 15,
      borderColor: '#fff',
      borderStyle: 'solid',
      borderWidth: 1,
    },
    ellipsis: false,
    urlConfig: {
      url: '',
      isBlank: false,
    },
  }

  apis: Partial<ApiConfigMap>
  apiData: Partial<ApiDataConfigMap>

  events: Record<string, DataEventConfig>

  actions: Record<string, DataEventConfig>

  constructor() {
    super('TabList', { w: 200, h: 200 })

    this.initData()
  }

  initData() {
    this.apis = {}
    this.apiData = {}
    this.events = {}
    this.actions = {}

    const fields = [
      createField('title', { description: '标题值', optional: true }),
      createField('url', { description: '超链接', optional: true }),
    ]

    setApiConfig(this, {
      fields: Object.assign({}, ...fields),
      description: 'tab接口',
    })

    setApiData(this)

    this.actions = {}

    return this
  }

  async loadData() {
    try {
      // 组件静态数据来源，当前项目统一管理目录：public/data/*
      // 如：public/data/demo/data.json 简写为 => demo/data
      const path = 'tab/tab-list'
      const res = await getStaticData(this.id, path)
      this.apiData.source.config.data = JSON.stringify(res.data)
    } catch (error) {
      throw error
    }
  }
}

export default TabList
