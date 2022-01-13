import { list } from '@keystone-6/core';

import {
  text,
  relationship,
  password,
  timestamp,
  select,
  checkbox,
} from '@keystone-6/core/fields';

export const publisher = list ({
    fields: {
      title: text({ validation: { isRequired: false } }),
      official_site: text({ validation: { isRequired: true } }),
      rss: text({ validation: { isRequired: true } }),
      summary: text({ validation: { isRequired: false } }),
      logo: text({ validation: { isRequired: false } }),
      description: text({ validation: { isRequired: false } }),
	  lang: select({
		label: '語系',
		datatype: 'enum',
		options: [ 
			{ label: '繁體中文', value: 'zh-TW' }, 
			{ label: '英文', value: 'en-US' },
		    { label: '日文', value: 'ja-Jp' }
		],
		defaultValue: 'zh-TW',
	  }),
	  full_content: checkbox({
		defaultValue: false,
	  }),
      //posts: relationship({ ref: 'Post.author', many: true }),
    },
    ui: {
      listView: {
        initialColumns: ['title', 'summary'],
      },
    },
})

