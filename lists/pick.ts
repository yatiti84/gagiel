import { list } from '@keystone-6/core';

import {
  text,
  relationship,
  timestamp,
  select,
  checkbox,
} from '@keystone-6/core/fields';

export const pick = list ({
    fields: {
      member: relationship({ ref: 'Member', many: false }),
      story: relationship({ ref: 'Story', many: false }),
	  comment: text({ validation: { isRequired: false } }),
	  picked_date: timestamp({ validation: { isRequired: false} }),
	  //posts: relationship({ ref: 'Post.author', many: true }),
	  kind: select({
		label: '型態',
		datatype: 'enum',
		options: [ 
			{ label: '收藏', value: 'collect' }, 
			{ label: '閱讀', value: 'read' },
		    { label: '書籤', value: 'bookmark' }
		],
		defaultValue: 'read',
	  }),
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
      paywall: checkbox({
        defaultValue: false,
      }),
      //tag: relationship({ ref: 'Tag', many: false }),
    },
    ui: {
      listView: {
        initialColumns: ['member', 'story'],
      },
    },
})
