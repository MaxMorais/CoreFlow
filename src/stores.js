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

export const classPrefix = writable('rule-');
export const listText = writable('of the following are true');
export const baseOperators = writable(['all', 'any', 'none']);
export const listOperators = writable([
	{value: 'all', label: 'All'}, 
	{value: 'any', label: 'Any'},
	{value: 'none', label: 'None'}
]);

const DEFAULT_FIELD = {label: '', value: ''}

export const defaultField = writable(DEFAULT_FIELD);
export const defaultOperator = writable(DEFAULT_FIELD);

const TYPE_OPERATORS = {
	'String': {
		'equal to': 'text',
		'not equal to': 'text',
		'start with': 'text',
		'ends with': 'text',
		'constains': 'text',
		'match regex': 'text',
		'is': [
			DEFAULT_FIELD,
			{value: 'String.is.upper', label: 'Upper'},
			{value: 'String.is.lower', label: 'Lower'},
			{value: 'String.is.digits', label: 'Digits'},
			{value: 'String.is.alpha', label: 'Alpha'},
			{value: 'String.is.alphaNumeric', label: 'Alpha Numeric'},
			{value: 'String.is.space', label: 'Space'},
			{value: 'String.is.empty', label: 'Empty'},
			{value: 'String.is.emptyOrSpaces', label: 'Empty or Spaces'}
		],
	},
	'number': {
		'equal to': 'number',
		'greather than': 'number',
		'greather or equal to': 'number',
		'less then': 'number',
		'less or equal to': 'number',
		'is': [
			DEFAULT_FIELD,
			{value: 'number.is.empty', label: 'Empty'},
			{value: 'number.is.zero', label: 'Zero'},
			{value: 'number.is.emptyOrZero', label: 'Empty or Zero'}
		]
	},
	'Date': {
		'equal to': 'date',
		'day equal to': 'number',
		'month equal to': 'number',
		'year equal to': 'number',
		'hours equal to': 'number',
		'minutes equal to': 'number',
		'seconds equal to': 'number',
		'not equal to': 'date',
		'day not equal to': 'number',
		'month not equal to': 'number',
		'year not equal to': 'number',
		'hours not equal to': 'number',
		'minutes not equal to': 'number',
		'seconds not equal to': 'number',
		'greather then': 'date',
		'day greather then': 'number',
		'month greather then': 'number',
		'year greather then': 'number',
		'hours greather then': 'number',
		'minutes greather then': 'number',
		'seconds greather then': 'number',
		'greather or equal to': 'date',
		'day greather or equal to': 'number',
		'month greather or equal to': 'number',
		'year greather or equal to': 'number',
		'hours greather or equal to': 'number',
		'minutes greather or equal to': 'number',
		'seconds greather or equal to': 'number',
		'less than': 'date',
		'day less than': 'number',
		'month less than': 'number',
		'year less than': 'number',
		'hours less than': 'number',
		'minutes less than': 'number',
		'seconds less than': 'number',
		'less or equal to': 'date',
		'day less or equal to': 'number',
		'month less or equal to': 'number',
		'year less or equal to': 'number',
		'hours less or equal to': 'number',
		'minutes less or equal to': 'number',
		'seconds less or equal to': 'number',
		'is': [
			DEFAULT_FIELD,
			{value: 'Date.is.empty', label: 'Empty'},
			{value: 'Date.is.today', label: 'Today'},
			{value: 'Date.is.tomorrow', label: 'Tomorrow'},
			{value: 'Date.is.yeasterday', label: 'Yesterday'}
		]
	},
	'Boolean': {
		'is': [
			DEFAULT_FIELD,
			{value: 'Boolean.is.true', label: 'True'},
			{value: 'Boolean.is.false', label: 'False'}
		]
	},
	'Array': {},
	'Object': {}
}


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
	// number
	"number.equal to": '(ctx.{0} == {1})',
	"number.greather than": '(ctx.{0} > {1})',
	"number.greather or equal to": '(ctx.{0} >= {1})',
	"number.less than": '(ctx.{0} < {1})',
	"number.less or equal to": '(ctx.{0} <= {1})',
	"number.is.Empty": "(in_list([undefined, null, ''], ctx.{0}))",
	"number.is.Zero": "(in_list([0, '0'], ctx.{0})",
	"number.is.Empty or Zero": "(in_list([undefined, null, '', '0', 0], ctx.{0}))",
	// DATE AND TIME 
	"Date.equal to": "(Date.parse(ctx.{0}) === Date.parse('{1}'))",
	"Date.day equal to": "(Date.parse(ctx.{0}).getDay() == parseInt('{1}'))",
	"Date.month equal to": "(Date.parse(ctx.{0}).getMonth() == parseInt('{1}'))",
	"Date.year equal to": "(Date.parse(ctx.{0}).getFullYear() == parseInt('{1}'))",
	"Date.seconds equal to": "(Date.parse(ctx.{0}).getSeconds() == parseInt('{1}'))",
	"Date.minutes equal to": "(Date.parse(ctx.{0}).getMinutes() == parseInt('{1}'))",
	"Date.hours equal to": "(Date.parse(ctx.{0}).getHours() == parseInt('{1}'))",

	"Date.not equal to": "(Date.parse(ctx.{0}) !== Date.parse('{1}'))",
	"Date.day not equal to": "(Date.parse(ctx.{0}).getDay() !== parseInt('{1}'))",
	"Date.month not equal to": "(Date.parse(ctx.{0}).getMonth() !== parseInt('{1}'))",
	"Date.year not equal to": "(Date.parse(ctx.{0}).getFullYear() !== parseInt('{1}'))",
	"Date.seconds not equal to": "(Date.parse(ctx.{0}).getSeconds() !== parseInt('{1}'))",
	"Date.minutes not equal to": "(Date.parse(ctx.{0}).getMinutes() !== parseInt('{1}'))",
	"Date.hours not equal to": "(Date.parse(ctx.{0}).getHours() !== parseInt('{1}'))",

	"Date.grether than": "(Date.parse(ctx.{0}) > Date.parse('{1}'))",
	"Date.day grether than": "(Date.parse(ctx.{0}).getDay() > parseInt('{1}'))",
	"Date.month grether than": "(Date.parse(ctx.{0}).getMonth() > parseInt('{1}'))",
	"Date.year grether than": "(Date.parse(ctx.{0}).getFullYear() > parseInt('{1}'))",
	"Date.seconds grether than": "(Date.parse(ctx.{0}).getSeconds() > parseInt('{1}'))",
	"Date.minutes grether than": "(Date.parse(ctx.{0}).getMinutes() > parseInt('{1}'))",
	"Date.hours grether than": "(Date.parse(ctx.{0}).getHours() > parseInt('{1}'))",

	"Date.greather or equal to": "(Date.parse(ctx.{0}) >= Date.parse('{1}'))",
	"Date.day greather or equal to": "(Date.parse(ctx.{0}).getDay() >= parseInt('{1}'))",
	"Date.month greather or equal to": "(Date.parse(ctx.{0}).getMonth() >= parseInt('{1}'))",
	"Date.year greather or equal to": "(Date.parse(ctx.{0}).getFullYear() >= parseInt('{1}'))",
	"Date.seconds greather or equal to": "(Date.parse(ctx.{0}).getSeconds() >= parseInt('{1}'))",
	"Date.minutes greather or equal to": "(Date.parse(ctx.{0}).getMinutes() >= parseInt('{1}'))",
	"Date.hours greather or equal to": "(Date.parse(ctx.{0}).getHours() >= parseInt('{1}'))",

	"Date.less than": "(Date.parse(ctx.{0}) < Date.parse('{1}'))",
	"Date.day less than": "(Date.parse(ctx.{0}).getDay() < parseInt('{1}'))",
	"Date.month less than": "(Date.parse(ctx.{0}).getMonth() < parseInt('{1}'))",
	"Date.year less than": "(Date.parse(ctx.{0}).getFullYear() < parseInt('{1}'))",
	"Date.seconds less than": "(Date.parse(ctx.{0}).getSeconds() < parseInt('{1}'))",
	"Date.minutes less than": "(Date.parse(ctx.{0}).getMinutes() < parseInt('{1}'))",
	"Date.hours less than": "(Date.parse(ctx.{0}).getHours() < parseInt('{1}'))",

	"Date.less or equal to": "(Date.parse(ctx.{0}) <= Date.parse('{1}'))",
	"Date.day less or equal to": "(Date.parse(ctx.{0}).getDay() <= parseInt('{1}'))",
	"Date.month less or equal to": "(Date.parse(ctx.{0}).getMonth() <= parseInt('{1}'))",
	"Date.year less or equal to": "(Date.parse(ctx.{0}).getFullYear() <= parseInt('{1}'))",
	"Date.seconds less or equal to": "(Date.parse(ctx.{0}).getSeconds() <= parseInt('{1}'))",
	"Date.minutes less or equal to": "(Date.parse(ctx.{0}).getMinutes() <= parseInt('{1}'))",
	"Date.hours less or equal to": "(Date.parse(ctx.{0}).getHours() <= parseInt('{1}'))",
	// Boolean
	"Check.is.True": '(!!ctx.{0})',
	"Check.is.False": '(!!!ctx.{0})'
	// Array
	
	// Object
});
