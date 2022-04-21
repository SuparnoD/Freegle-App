export default {
	id: '1',
	users: [{
		id: 'u1',
		name: 'Freegler',
		imageUri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg',
	}, {
		id: 'u2',
		name: 'Liam',
		imageUri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/2.jpg',
	}],
	messages: [{
		id: 'm1',
		content: 'Hi, I was wondering if you still had that fridge on offer?',
		createdAt: '2020-10-10T12:48:00.000Z',
		user: {
			id: 'u1',
			name: 'Freegler',
		},
	}, {
		id: 'm2',
		content: 'Unfortunately I have just given it away, sorry!',
		createdAt: '2020-10-03T14:49:00.000Z',
		user: {
			id: 'u2',
			name: 'Liam',
		},
	}, {
		id: 'm3',
		content: 'However, I do have a spare freezer that I need to get rid of, would you be interested?',
		createdAt: '2020-10-03T14:49:40.000Z',
		user: {
			id: 'u2',
			name: 'Liam',
		},
	}, {
		id: 'm4',
		content: 'No thanks.',
		createdAt: '2020-10-03T14:50:00.000Z',
		user: {
			id: 'u1',
			name: 'Freegler',
		},
	}, {
		id: 'm5',
		content: 'Let me know if you happen to have any fridges available in the future though',
		createdAt: '2020-10-03T14:51:00.000Z',
		user: {
			id: 'u1',
			name: 'Freegler',
		},
	}, {
		id: 'm6',
		content: 'Sure, will do!',
		createdAt: '2020-10-03T14:49:00.000Z',
		user: {
			id: 'u2',
			name: 'Liam',
		},
	}, {
		id: 'm7',
		content: 'Ok, bye.',
		createdAt: '2020-10-03T14:53:00.000Z',
		user: {
			id: 'u1',
			name: 'Freegler',
		},
	},]
}

