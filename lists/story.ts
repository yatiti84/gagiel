import { list } from '@keystone-6/core';

import {
  text,
  relationship,
  password,
  timestamp,
  select,
  integer,
  checkbox,
} from '@keystone-6/core/fields';

export const story = list ({
    fields: {
      title: text({ validation: { isRequired: false } }),
      url: text({ validation: { isRequired: true } }),
      summary: text({ validation: { isRequired: false } }),
      content: text({ validation: { isRequired: false } }),
	  source: relationship({ ref: 'Publisher', many: false }),
	  author: relationship({ ref: 'Member', many: false }),
	  category: relationship({ ref: 'Category', many: false }),
	  pick: relationship({ ref: 'Pick', many: true }),
	  comment: relationship({ ref: 'Comment', many: true }),
      published_date: timestamp({ validation: { isRequired: false } }),
      og_title: text({ validation: { isRequired: false } }),
      og_image: text({ validation: { isRequired: false } }),
      og_description: text({ validation: { isRequired: false } }),
      paywall: checkbox({
        defaultValue: false,
      }),
    },
    ui: {
      listView: {
        initialColumns: ['title', 'url'],
      },
    },
})
