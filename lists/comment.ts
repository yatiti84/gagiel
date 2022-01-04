import { list } from '@keystone-6/core';

import {
  text,
  relationship,
  password,
  timestamp,
  select,
} from '@keystone-6/core/fields';

export const comment = list ({
    fields: {
	  member: relationship({ ref: 'Member', many: false }),
	  story: relationship({ ref: 'Story', many: false }),
      content: text({ validation: { isRequired: false } }),
	  parent: relationship({ ref: 'Comment', many: false }),
	  root: relationship({ ref: 'Comment', many: false }),
	  state: select({
		label: '狀態',
		datatype: 'enum',
		options: [ 
			{ label: '公開', value: 'public' }, 
			{ label: '私藏', value: 'private' },
		    { label: '限好友', value: 'friend' }
		],
		defaultValue: 'public',
	  }),
      published_date: timestamp({ validation: { isRequired: false } }),
    },
    ui: {
      listView: {
        initialColumns: ['title', 'url'],
      },
    },
})
