import { list } from '@keystone-6/core';

import {
  text,
  relationship,
  password,
  timestamp,
  select,
} from '@keystone-6/core/fields';

export const category = list ({
    fields: {
      title: text({ validation: { isRequired: false } }),
      slug: text({ validation: { isUnique:true, isRequired: true } }),
      summary: text({ validation: { isRequired: false } }),
    },
    ui: {
      listView: {
        initialColumns: ['title', 'slug'],
      },
    },
})
