import { ExtractPropTypes } from 'vue';
import { PropType } from 'vue';
// 属性的定义
export const calendarProps = {
  // v-model == modelValue + update:modelValue
  modelValue: {
    type: Date
  },
  // range: {
  //   type: Array as PropType<[Date, Date]>
  // },
  range: {
    type: Array as PropType<Date[]>,
    validator: (value: any) => {
      return Array.isArray(value) &&
        value.length === 2 &&
        value.every(item => item instanceof Date);
    }
  }

} as const;
// 属性的类型
export type CalendarProps = ExtractPropTypes<typeof calendarProps>

// 事件相关的类型
export const calendarEmits = {
  'update:modelValue': (val: Date) => val instanceof Date
};
export type CalendarEmits = typeof calendarEmits

export type CalendarDateCellType = 'prev' | 'current' | 'next'
export type CalendarDateCell = {
  text: number
  type: CalendarDateCellType
}

export type CalendarDateType =
  | 'prev-month'
  | 'next-month'
  | 'prev-year'
  | 'next-year'
  | 'today'
