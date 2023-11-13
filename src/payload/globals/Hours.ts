import type { GlobalConfig } from 'payload/types'

interface DayInfo {
  label: string
  value: string
}
export function mapDaysOfWeek(): DayInfo[] {
  return ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map(
    day => ({
      label: day,
      value: day.toLowerCase(),
    }),
  )
}
export const Hours: GlobalConfig = {
  slug: 'hours',
  typescript: {
    interface: 'Hours',
  },
  graphQL: {
    name: 'Hours',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'days',
      type: 'array',
      admin: {
        components: {
          RowLabel: ({ data }) =>
            data?.fromDay && data?.toDay ? `${data.fromDay} - ${data.toDay}` : '',
        },
      },
      fields: [
        {
          type: 'row',
          fields: [
            {
              name: 'fromDay',
              type: 'select',
              options: mapDaysOfWeek(),
            },
            {
              name: 'toDay',
              type: 'select',
              options: mapDaysOfWeek(),
            },
          ],
        },
        {
          name: 'open',
          type: 'checkbox',
        },
        {
          type: 'row',
          fields: [
            {
              name: 'openTime',
              type: 'date',
              admin: {
                condition: (_, siblingData) => Boolean(siblingData?.open),
                date: {
                  pickerAppearance: 'timeOnly',
                  displayFormat: 'h:mm:ss a',
                },
              },
            },
            {
              name: 'closeTime',
              type: 'date',
              admin: {
                condition: (_, siblingData) => Boolean(siblingData?.open),
                date: {
                  pickerAppearance: 'timeOnly',
                  displayFormat: 'h:mm:ss a',
                },
              },
            },
          ],
        },
      ],
    },
  ],
}
