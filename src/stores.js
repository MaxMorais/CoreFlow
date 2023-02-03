import {writable, readable} from 'svelte/store';

export const activeNode = writable(null);
export const activeFields = writable([]);

export const FLOWCHART = readable({
	type: 'action',
	icon: 'folder-plus',
	title: 'Record Created',
	next: {
		type: 'action',
		icon: 'info-square',
		title: 'Create Popup Notification',
		next: {
			type: 'decision',
			branchYes: {
				type: 'action',
				icon: 'rss',
				title: 'Post to Feed Activity',
				next: {
					type: 'decision',
					branchYes: {
						type: 'action',
						icon: 'tags',
						title: 'Add or Remove Tags',
						next: {
							type: 'action',
							icon: 'message',
							title: 'Add Comment',
							next: {
								type: 'decision',
								branchYes: {
									type: 'action',
									icon: 'folder-minus',
									title: 'Delete Record',
									next: {
										type: 'action',
										icon: 'bulb',
										title: 'Create Action for Record',
										next: {
											type: 'action',
											icon: 'filter',
											title: 'Complete Process Stage'
										}
									}
								},
								branchNo: {
									type: 'action',
									icon: 'filter',
									title: 'Complete Process Stage',
									next: {
										type: 'decision',
										branchYes: {
											type: 'action',
											icon: 'mail',
											title: 'Email',
											next: {
												type: 'action',
												icon: 'info-square',
												title: 'Create Popup Notification',
												next: {
													type: 'action',
													icon: 'message',
													title: 'Add Comment'
												}
											}
										},
										branchNo: {
											type: 'action',
											icon: 'square-minus',
											title: 'Remove from List',
											next: {
												type: 'action',
												icon: 'users',
												title: 'Reassign Record',
											}
										}
									}
								}
							}
						}
					},
					branchNo: {
						type: 'action',
						icon: 'message',
						title: 'Add Comment',
						next: {
							type: 'action',
							icon: 'settings',
							title: 'Remote API Call',
							next: {
								type: 'action',
								icon: 'mail',
								title: 'Email',
								next: {
									type: 'action',
									icon: 'filter-off',
									title: 'Revert Process Stage',
									next: {
										type: 'action',
										icon: 'tags',
										title: 'Add or Remove Tags'
									}
								}
							}
						}
					}
				} 
			},
			branchNo: {
				type: 'action',
				icon: 'square-plus',
				title: 'Add to List',
				next: {
					type: 'action',
					icon: 'filter',
					title: 'Complete Process Stage',
					next: {
						type: 'action',
						icon: 'bulb',
						title: 'Create Action for Record',
						next: {
							type: 'decision',
							branchYes: {
								type: 'action',
								icon: 'message',
								title: 'Add Comment',
								next: {
									type: 'action',
									icon: 'square-plus',
									title: 'Add to List',
									next: {
										type: 'action',
										icon: 'clock',
										title: 'Wait',
										next: {
											type: 'action',
											icon: 'player-play',
											title: 'Start Process Stage'
										}
									}
								}
							},
							branchNo: {
								type: 'action',
								icon: 'bulb',
								title: 'Create Action',
								next: {
									type: 'action',
									icon: 'edit',
									title: 'Update Record',
									next: {
										type: 'action',
										icon: 'mail',
										title: 'Email Contact'
									}
								}
							}
						}
					}
				}
			}
		}
	}
});
export const DEMO = readable({
	variables: [
		{
			name: 'expiration_days',
			label: 'Days until expiration',
			fieldtype: 'Number'
		},
		{
			name: 'current_month',
			label: 'Current Month',
			fieldtype: 'String'
		},
		{
			name: 'goes_well_with',
			label: 'Goes Well With',
			field_type: 'String',
			options: [
				'Eggnog',
				'Cookies',
				'Beef Jerkey'
			]
		}
	],
	actions: [
		{
			name: 'put_on_sale',
			label: 'Put on Sale',
			params: [
				{
					name: 'sale_percentage',
					label: 'Sales %',
					type: 'Number' 
				}
			]
		},
		{
			name: 'order_more',
			label: 'Order More',
			params: [
				{
					name: 'qty_to_order',
					label: 'Qty to Order',
					type: 'Number'
				}
			]
		}
	]
});

export const DYNAMIC = 'DYNAMIC';
export const BASE_OPERATORS = readable(['All', 'Any', 'None']);

const PVT_TYPE_OPERATORS = {
	'String': {
		'equal to': DYNAMIC,
		'not equal to': DYNAMIC,
		'start with': DYNAMIC,
		'ends with': DYNAMIC,
		'constains': DYNAMIC,
		'match regex': DYNAMIC,
		'is': [
			,
			'Upper',
			'Lower',
			'Digits',
			'Alpha',
			'Alpha Numeric',
			'Space',
			'Empty'
		],
	},
	'Number': {
		'equal to': DYNAMIC,
		'greather than': DYNAMIC,
		'greather or equal to': DYNAMIC,
		'less then': DYNAMIC,
		'less or equal to': DYNAMIC,
		'is': [
			,
			'Empty',
			'Zero',
			'Empty or Zero'
		]
	},
	'Date': {
		'equal to': DYNAMIC,
		'day equal to': 'Number',
		'month equal to': 'Number',
		'year equal to': 'Number',
		'hours equal to': 'Number',
		'minutes equal to': 'Number',
		'seconds equal to': 'Number',
		'not equal to': DYNAMIC,
		'day not equal to': 'Number',
		'month not equal to': 'Number',
		'year not equal to': 'Number',
		'hours not equal to': 'Number',
		'minutes not equal to': 'Number',
		'seconds not equal to': 'Number',
		'greather then': DYNAMIC,
		'day greather then': 'Number',
		'month greather then': 'Number',
		'year greather then': 'Number',
		'hours greather then': 'Number',
		'minutes greather then': 'Number',
		'seconds greather then': 'Number',
		'greather or equal to': DYNAMIC,
		'day greather or equal to': 'Number',
		'month greather or equal to': 'Number',
		'year greather or equal to': 'Number',
		'hours greather or equal to': 'Number',
		'minutes greather or equal to': 'Number',
		'seconds greather or equal to': 'Number',
		'less than': DYNAMIC,
		'day less than': 'Number',
		'month less than': 'Number',
		'year less than': 'Number',
		'hours less than': 'Number',
		'minutes less than': 'Number',
		'seconds less than': 'Number',
		'less or equal to': DYNAMIC,
		'day less or equal to': 'Number',
		'month less or equal to': 'Number',
		'year less or equal to': 'Number',
		'hours less or equal to': 'Number',
		'minutes less or equal to': 'Number',
		'seconds less or equal to': 'Number',
		'is': [
			,
			'Empty',
			'Today',
			'Tomorrow',
			'Yesterday'
		]
	},
	'Boolean': {
		'is': [
			,
			'True',
			'False'
		]
	},
	'Array': {},
	'Object': {}
}


export const TYPE_OPERATORS = readable(PVT_TYPE_OPERATORS);

let PVT_NORMALIZED_OPERATORS = [];
let PVT_VARIABLE_TYPE_OPERATORS = {};

Object.keys(PVT_TYPE_OPERATORS).forEach(objType => {
	if (!PVT_VARIABLE_TYPE_OPERATORS[objType]){
		PVT_VARIABLE_TYPE_OPERATORS[objType] = [];
	}
	Object.keys(PVT_TYPE_OPERATORS[objType]).forEach(operator => {
		let valType = PVT_TYPE_OPERATORS[objType][operator],
			operatorLabel = operator.replace(/\b\w/g, l => l.toUpperCase());
		if (Array.isArray(valType)){
			PVT_VARIABLE_TYPE_OPERATORS[objType].push({
				name: `${objType}.${operator}`,
				label: operatorLabel,
				inputtype: objType,
				options: valType
			});
			valType.forEach(option => {
				PVT_NORMALIZED_OPERATORS.push(
					`${objType}.${operator}.${option}`
				);
			});
		} else {
			PVT_VARIABLE_TYPE_OPERATORS[objType].push({
				name:  `${objType}.${operator}`,
				label: operatorLabel,
				inputtype: valType
			});
			PVT_NORMALIZED_OPERATORS.push(
				`${objType}.${operator}.${valType}`
			);
		}
	});
});

export const NORMALIZED_TYPE_OPERATORS = readable(
	PVT_NORMALIZED_OPERATORS
);

export const VARIABLE_TYPE_OPERATORS = readable(
	PVT_VARIABLE_TYPE_OPERATORS
);

export const LOGICAL_OPERATORS = readable({
	// LOGICAL
	"All": " && ",
	"Any": " || ",
	"None": "!({0})",
	// STRING
	"String.equal to": "(ctx.{0} == '{1}')",
	"String.not equal to": "(ctx.{0} !== '{1}')",
	"String.starts with": "((ctx.{0}||'').indexOf('{1}') == 0)",
	"String.ends with": "((ctx.{0}||'').indexOf('{1}') == ((ctx.{0}||'').length - '{1}'.length))",
	"String.contains": "((ctx.{0}||'').indexOf('{1}') >=-1)",
	"String.match regex": "((new RegExp('{1}', 'gi')).test(ctx.{0}||''))",
	"String.is.Upper": "((ctx.{0}||'') == (ctx.{0}||'').toUpperCase())",
	"String.is.Lower": "((ctx.{0}||'') == (ctx.{0}||'').toLowerCase())",
	"String.is.Digits": "(/^[0-9.]+$/.test(ctx.{0}||''))",
	"String.is.Alpha": "(/^[^0-9.]+$/.test(ctx.{0}||''))",
	"String.is.Alpha Numeric": "(/^[*.]+$/).test(ctx.{0}||'')",
	"String.is.Space": "(/^[ ]+$/.test(ctx.{0}||''))",
	// NUMBER
	"Number.equal to": '(ctx.{0} == {1})',
	"Number.greather than": '(ctx.{0} > {1})',
	"Number.greather or equal to": '(ctx.{0} >= {1})',
	"Number.less than": '(ctx.{0} < {1})',
	"Number.less or equal to": '(ctx.{0} <= {1})',
	"Number.is.Empty": "(in_list([undefined, null, ''], ctx.{0}))",
	"Number.is.Zero": "(in_list([0, '0'], ctx.{0})",
	"Number.is.Empty or Zero": "(in_list([undefined, null, '', '0', 0], ctx.{0}))",
	// DATE AND TIME (Using Luxon)
	"Date.equal to": "(DateTime.fromISO(ctx.{0}).toMillis() === DateTime.fromISO('{1}').toMillis())",
	"Date.day equal to": "(DateTime.fromISO(ctx.{0}).format('d') == '{1}')",
	"Date.month equal to": "(DateTime.fromISO(ctx.{0}).format('m') == '{1}')",
	"Date.year equal to": "(DateTime.fromISO(ctx.{0}).format('y') == '{1}')",
	"Date.seconds equal to": "(DateTime.fromISO(ctx.{0}).format('s') == '{1}')",
	"Date.minutes equal to": "(DateTime.fromISO(ctx.{0}).format('m') == '{1}')",
	"Date.hours equal to": "(DateTime.fromISO(ctx.{0}).format('H') == '{1}')",
	"Date.not equal to": "(DateTime.fromISO(ctx.{0}).toMillis() !==   DateTime.fromISO('{1}').toMillis())",
  	"Date.day not equal to": "(DateTime.fromISO(ctx.{0}).format('d') != '{1}')",
  	"Date.month not equal to": "(DateTime.fromISO(ctx.{0}).format('m') != '{1}')",
  	"Date.year not equal to": "(DateTime.fromISO(ctx.{0}).format('y') != '{1}')",
	"Date.seconds not equal to": "(DateTime.fromISO(ctx.{0}).format('s') != '{1}')",
	"Date.minutes not equal to": "(DateTime.fromISO(ctx.{0}).format('m') != '{1}')",
	"Date.hours not equal to": "(DateTime.fromISO(ctx.{0}).format('H') != '{1}')",
	"Date.greather then": "(DateTime.fromISO(ctx.{0}).toMillis() > DateTime.fromISO('{1}').toMillis())",
  	"Date.day greather than": "(DateTime.fromISO(ctx.{0}).format('d') > '{1}')",
  	"Date.month greather than": "(DateTime.fromISO(ctx.{0}).format('m') > '{1}')",
  	"Date.year greather than": "(DateTime.fromISO(ctx.{0}).format('y') > '{1}')",
	"Date.seconds greather than": "(DateTime.fromISO(ctx.{0}).format('s') > '{1}')",
	"Date.minutes greather than": "(DateTime.fromISO(ctx.{0}).format('m') > '{1}')",
	"Date.hours greather than": "(DateTime.fromISO(ctx.{0}).format('H') > '{1}')",
	"Date.greather or equal to": "(DateTime.fromISO(ctx.{0}).toMillis() >= DateTime.fromISO('{1}').toMillis())",
  	"Date.day greather or equal to": "(DateTime.fromISO(ctx.{0}).format('d') >= '{1}')",
  	"Date.month greather or equal to": "(DateTime.fromISO(ctx.{0}).format('m') >= '{1}')",
  	"Date.year greather or equal to": "(DateTime.fromISO(ctx.{0}).format('y') >= '{1}')",
	"Date.seconds greather or equal to": "(DateTime.fromISO(ctx.{0}).format('s') >= '{1}')",
	"Date.minutes greather or equal to": "(DateTime.fromISO(ctx.{0}).format('m') >= '{1}')",
	"Date.hours greather or equal to": "(DateTime.fromISO(ctx.{0}).format('H') >= '{1}')",
	"Date.less than": "(DateTime.fromISO(ctx.{0}).toMillis() < DateTime.fromISO('{1}').toMillis())",
  	"Date.day less than": "(DateTime.fromISO(ctx.{0}).format('d') < '{1}')",
  	"Date.month less than": "(DateTime.fromISO(ctx.{0}).format('m') < '{1}')",
  	"Date.year less than": "(DateTime.fromISO(ctx.{0}).format('y') < '{1}')",
	"Date.seconds less than": "(DateTime.fromISO(ctx.{0}).format('s') < '{1}')",
	"Date.minutes less than": "(DateTime.fromISO(ctx.{0}).format('m') < '{1}')",
	"Date.hours less than": "(DateTime.fromISO(ctx.{0}).format('H') < '{1}')",
	"Date.less or equal to": "(DateTime.fromISO(ctx.{0}).toMillis() <= DateTime.fromISO('{1}').toMillis())",
  	"Date.day less or equal to": "(DateTime.fromISO(ctx.{0}).format('d') <= '{1}')",
  	"Date.month less or equal to": "(DateTime.fromISO(ctx.{0}).format('m') <= '{1}')",
  	"Date.year less or equal to": "(DateTime.fromISO(ctx.{0}).format('y') <= '{1}')",
	"Date.seconds less or equal to": "(DateTime.fromISO(ctx.{0}).format('s') <= '{1}')",
	"Date.minutes less or equal to": "(DateTime.fromISO(ctx.{0}).format('m') <= '{1}')",
	"Date.hours less or equal to": "(DateTime.fromISO(ctx.{0}).format('H') <= '{1}')",
	// Boolean
	"Check.is.True": '(!!ctx.{0})',
	"Check.is.False": '(!!!ctx.{0})'
	// Array
	
	// Object
});
