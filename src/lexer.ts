const moo = require('moo')

const km={
	or: 'or',
	and: 'and',
	_in: 'in',
	not: 'not'
};

function rep(v:string, c:string):string {
	return v.slice(1,-1).replace('\\'+c, c).replace('\\n', '\n').replace('\\t', '\t')
}

export const lex = {
	lp: '(',
	rp: ')',
	lt: '<',
	le: '<=',
	gt: '>',
	ge: '>=',
	eq: '=',
	ne: '!=',
	re: ':',
	nr: '!:',

	dot: '.',
	coma: ',',
	ws:		/[ \t]+/,
	float:	{ match: /[-+]?(?:[0-9]+\.[0-9]*|\.[0-9]+)/, value: parseFloat },
	int:	{ match: /[+-]?[0-9]+/, value: parseInt },
	null:	{ match: 'null', value: (v:string) => null },
	bool: [
		{ match: 'true',  value: (v:string) => true},
	 	{ match: 'false', value: (v:string) => false}
	],
	string:	[
		{ match: /"(?:\\[tn"]|[^\n\t"\\])*"/, value: (v:string)=> rep(v, '"')},
		{ match: /'(?:\\[tn']|[^\n\t'\\])*'/, value: (v:string)=> rep(v, "'")},
		{ match: /[a-zA-Z][0-9a-zA-Z_\-]*/, type: moo.keywords(km)}
	]
}
