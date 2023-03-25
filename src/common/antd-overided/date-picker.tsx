import 'antd/lib/date-picker/style/index.css'

import generatePicker from 'antd/lib/date-picker/generatePicker'
import dayjs from 'dayjs'
import localeData from 'dayjs/plugin/localeData'
import weekday from 'dayjs/plugin/weekday'
import dayjsGenerateConfig from 'rc-picker/lib/generate/dayjs'

dayjs.extend(weekday)
dayjs.extend(localeData)

export const DatePicker = generatePicker(dayjsGenerateConfig)
