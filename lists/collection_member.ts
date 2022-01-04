import { list } from '@keystone-6/core';

import {
  text,
  relationship,
  password,
  timestamp,
  select,
} from '@keystone-6/core/fields';

export const collection_member = list ({
    fields: {
      collection: relationship({ ref: 'Collection', many: false }),
      member: relationship({ ref: 'Member', many: false }),
      added_by: relationship({  
	  	ref: 'Member',
		many: false,
	  }),
      updated_by: relationship({  
	  	ref: 'Member',
		many: false,
	  }),
	  role: select({
		label: '類型',
	 	datatype: 'enum',
		options: [
		  { label: '管理員', value: 'admin' },
		  {	label: '協作者', value: 'collaborator' },
		]
	  }),
	  added_date: timestamp({ validation: { isRequired: false} }),
	  updated_date: timestamp({ validation: { isRequired: false} }),
    },
    ui: {
      listView: {
        initialColumns: ['title', 'slug'],
      },
    },
})
