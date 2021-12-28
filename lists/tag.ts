import { list } from '@keystone-6/core';

import {
  text,
  relationship,
  timestamp,
  select,
} from '@keystone-6/core/fields';

export const tag = list ({
    fields: {
	  name: text({ validation: { isRequired: true, isUnique: true } }),
      pick: relationship({ ref: 'Pick', many: true }),
    },
    ui: {
      listView: {
        initialColumns: ['name'],
      },
    },
})
