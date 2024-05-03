@preprocessor typescript 
@lexer lexer

@{%
	import { lex } from './lexer'
	import * as o from './Op'
	import {Query, paths, all, one} from './Query'

	const lexer=require('moo').compile(lex);

	function value(d:any[]):any {
		return d[0].value;
	}

	function c(d:any[], v:number):any {
		let a:any=[d[0]];
		d=d[1];
		for(let i=0; i<d.length; i++)
			a.push(d[i][v])
		return a;
	}

	function key(d:any[]):any {
		return [d[0].value].concat(d[1]);
	}
%}

query -> qand ( %ws %or %ws qand ):*			{% d => one(c(d, 3)) %}
qand ->  op ( %ws %and %ws op ):*				{% d => all(c(d, 3)) %}

op -> %ws:? key %ws:? (
	  %eq %ws:? value							{% d => o.$eq(d[2]) %}
	| %ne %ws:? value							{% d => o.$ne(d[2]) %}
	| %ge %ws:? value							{% d => o.$gt(d[2]) %}
	| %ge %ws:? value							{% d => o.$ge(d[2]) %}
	| %lt %ws:? value							{% d => o.$lt(d[2]) %}
	| %le %ws:? value							{% d => o.$le(d[2]) %}
	| %ws %_in %ws %lp %ws:? values %ws:? %rp	{% d => o.$in(d[5]) %}
	| %ws %not %_in %lp %ws:? values %ws:? %rp	{% d => o.$nin(d[6]) %}
	| %re %ws:? value							{% d => o.$match(d[2]) %}
	| %nr %ws:? value							{% d => o.$not(o.$match(d[2])) %}
	) %ws:?										{% d => paths(d[1], d[3]) %}
	| %ws %not query							{% d => o.$not(d[1]) %}
	| %lp query %rp								{% d => d[1] %}

values ->  value ( %ws:? %coma %ws:? value):*	{% d => c(d, 3) %}

value -> %int									{% value %}
value -> %float									{% value %}
value -> %bool									{% value %}
value -> %string								{% value %}
value -> %_null									{% value %}
	
key -> %string ( 
	  %dot %string								{% d => d[1].value %}
	):*											{% key %}
