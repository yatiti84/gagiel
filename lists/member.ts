import { list } from '@keystone-6/core';

import {
  text,
  relationship,
  password,
  timestamp,
  select,
  checkbox
} from '@keystone-6/core/fields';

export const member = list ({
    fields: {
      firebaseId: text({
        label: 'firebaseId',
	    validation: {
          isRequired: true,
          isUnique: true,
		},
      }),
      name: text({ validation: { isRequired: true, isUnique: true } }),
      nickname: text({ validation: { isRequired: true } }),
      email: text({
        validation: { isRequired: false },
        isFilterable: true,
      }),
      is_active: checkbox({
        defaultValue: true,
      }),
	  following: relationship({
	    ref: 'Member',
		many: true,
	  }),
	  following_collection: relationship({
	    ref: 'Collection',
		many: true,
	  }),
	  follow_publisher: relationship({
	    ref: 'Publisher',
		many: true,
	  }),
    },
    ui: {
      listView: {
        initialColumns: ['name', 'email'],
      },
    },
})

