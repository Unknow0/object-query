@preprocessor typescript 

@builtin "whitespace.ne"
@builtin "number.ne"
@builtin "string.ne"

@{%
	import * as o from './Op'
	import {Query, paths, all, one} from './Query'

	function key(d:any[]):any {
		let a=[d[0]];
		d=d[1];
		for(let i=0; i<d.length; i++)
			a.push(d[i][0])
		return a;
	}
	function values(d:any[]):any {
		let a=[d[0]];
		d=d[1];
		for(let i=0; i<d.length; i++)
			a.push(d[i][3])
		return a;
	}
	
	function or(d:any[]):any {
		if(d[1].length==0)
			return d[0]
		let a:Query[]=[<Query>d[0]];
		d=d[1];
		for(let i=0; i<d.length; i++)
			a.push(<Query>d[i][3])
		return one(a);
	}
	
	function and(d:any[]):any {
		if(d[1].length==0)
			return d[0]
		let a:Query[]=[<Query>d[0]];
		d=d[1];
		for(let i=0; i<d.length; i++)
			a.push(<Query>d[i][3])
		return all(a);
	}
%}

query -> qand ( __ "or" __ qand ):*	{% or %}
qand ->  op ( __ "and" __ op ):*	{% and %}

op -> _ key _ (
	  "="  _ value					{% d => o.$eq(d[2]) %}
	| "!=" _ value					{% d => o.$ne(d[2]) %}
	| ">"  _ value					{% d => o.$gt(d[2]) %}
	| ">=" _ value					{% d => o.$ge(d[2]) %}
	| "<"  _ value					{% d => o.$lt(d[2]) %}
	| "<=" _ value					{% d => o.$le(d[2]) %}
	| " in (" _ values _ ")"		{% d => o.$in(d[2]) %}
	| " nin (" _ values _ ")"		{% d => o.$nin(d[2]) %}
	| ":" _ value					{% d => o.$re(d[2]) %}
	| "!:" _ value					{% d => o.$nr(d[2]) %}
	) _								{% d => paths(d[1], d[3]) %}
	| "(" query ")"					{% d => d[1] %}

values ->  value ( _ "," _ value):* {% values %}
value ->
	  dqstring 						{% id %}
	| sqstring 						{% id %}
	| "true"						{% d => true %}
	| "false"						{% d => false %}
	| "-":? (
		  [0-9]:* "." [0-9]:+ 		{% d=> d[0].join("") +"." +d[2].join("") %}
		| [0-9]:+ ".":?				{% d=> d[0].join("") %}
		)							{% d => parseFloat(d.join("")) %}
	| [^ ]:+						{% d => d[0].join("") %}
	
key -> name ( 
	  "." name						{% d=>d[1] %}
	):*								{% key %}
	
name ->
	  [a-zA-Z0-9]:+					{% d=>d[0].join("") %}
	| "[\"" [^"]:+ "\"]"			{% d=>d[1].join("") %}
	| "['" [^']:+ "']"				{% d=>d[1].join("") %}