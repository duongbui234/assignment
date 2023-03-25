import 'antd/lib/calendar/style/index.css'

import generateCalendar from 'antd/lib/calendar/generateCalendar'
import dayjsGenerateConfig from 'rc-picker/lib/generate/dayjs'

export const Calendar = generateCalendar(dayjsGenerateConfig)
