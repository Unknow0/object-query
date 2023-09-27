// Generated automatically by nearley, version 2.20.1
// http://github.com/Hardmath123/nearley
// Bypasses TS6133. Allow declared but unused functions.
// @ts-ignore
function id(d: any[]): any { return d[0]; }
declare var ws: any;
declare var or: any;
declare var and: any;
declare var eq: any;
declare var ne: any;
declare var ge: any;
declare var lt: any;
declare var le: any;
declare var _in: any;
declare var lp: any;
declare var rp: any;
declare var not: any;
declare var re: any;
declare var nr: any;
declare var coma: any;
declare var int: any;
declare var float: any;
declare var bool: any;
declare var string: any;
declare var _null: any;
declare var dot: any;

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
		let a:any=[d[0].value];
		d=d[1];
		for(let i=0; i<d.length; i++)
			a.push(d[i][1].value)
		return a;
	}

interface NearleyToken {
  value: any;
  [key: string]: any;
};

interface NearleyLexer {
  reset: (chunk: string, info: any) => void;
  next: () => NearleyToken | undefined;
  save: () => any;
  formatError: (token: never) => string;
  has: (tokenType: string) => boolean;
};

interface NearleyRule {
  name: string;
  symbols: NearleySymbol[];
  postprocess?: (d: any[], loc?: number, reject?: {}) => any;
};

type NearleySymbol = string | { literal: any } | { test: (token: any) => boolean };

interface Grammar {
  Lexer: NearleyLexer | undefined;
  ParserRules: NearleyRule[];
  ParserStart: string;
};

const grammar: Grammar = {
  Lexer: lexer,
  ParserRules: [
    {"name": "query$ebnf$1", "symbols": []},
    {"name": "query$ebnf$1$subexpression$1", "symbols": [(lexer.has("ws") ? {type: "ws"} : ws), (lexer.has("or") ? {type: "or"} : or), (lexer.has("ws") ? {type: "ws"} : ws), "qand"]},
    {"name": "query$ebnf$1", "symbols": ["query$ebnf$1", "query$ebnf$1$subexpression$1"], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "query", "symbols": ["qand", "query$ebnf$1"], "postprocess": d => one(c(d, 3))},
    {"name": "qand$ebnf$1", "symbols": []},
    {"name": "qand$ebnf$1$subexpression$1", "symbols": [(lexer.has("ws") ? {type: "ws"} : ws), (lexer.has("and") ? {type: "and"} : and), (lexer.has("ws") ? {type: "ws"} : ws), "op"]},
    {"name": "qand$ebnf$1", "symbols": ["qand$ebnf$1", "qand$ebnf$1$subexpression$1"], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "qand", "symbols": ["op", "qand$ebnf$1"], "postprocess": d => all(c(d, 3))},
    {"name": "op$ebnf$1", "symbols": [(lexer.has("ws") ? {type: "ws"} : ws)], "postprocess": id},
    {"name": "op$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "op$ebnf$2", "symbols": [(lexer.has("ws") ? {type: "ws"} : ws)], "postprocess": id},
    {"name": "op$ebnf$2", "symbols": [], "postprocess": () => null},
    {"name": "op$subexpression$1$ebnf$1", "symbols": [(lexer.has("ws") ? {type: "ws"} : ws)], "postprocess": id},
    {"name": "op$subexpression$1$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "op$subexpression$1", "symbols": [(lexer.has("eq") ? {type: "eq"} : eq), "op$subexpression$1$ebnf$1", "value"], "postprocess": d => o.$eq(d[2])},
    {"name": "op$subexpression$1$ebnf$2", "symbols": [(lexer.has("ws") ? {type: "ws"} : ws)], "postprocess": id},
    {"name": "op$subexpression$1$ebnf$2", "symbols": [], "postprocess": () => null},
    {"name": "op$subexpression$1", "symbols": [(lexer.has("ne") ? {type: "ne"} : ne), "op$subexpression$1$ebnf$2", "value"], "postprocess": d => o.$ne(d[2])},
    {"name": "op$subexpression$1$ebnf$3", "symbols": [(lexer.has("ws") ? {type: "ws"} : ws)], "postprocess": id},
    {"name": "op$subexpression$1$ebnf$3", "symbols": [], "postprocess": () => null},
    {"name": "op$subexpression$1", "symbols": [(lexer.has("ge") ? {type: "ge"} : ge), "op$subexpression$1$ebnf$3", "value"], "postprocess": d => o.$gt(d[2])},
    {"name": "op$subexpression$1$ebnf$4", "symbols": [(lexer.has("ws") ? {type: "ws"} : ws)], "postprocess": id},
    {"name": "op$subexpression$1$ebnf$4", "symbols": [], "postprocess": () => null},
    {"name": "op$subexpression$1", "symbols": [(lexer.has("ge") ? {type: "ge"} : ge), "op$subexpression$1$ebnf$4", "value"], "postprocess": d => o.$ge(d[2])},
    {"name": "op$subexpression$1$ebnf$5", "symbols": [(lexer.has("ws") ? {type: "ws"} : ws)], "postprocess": id},
    {"name": "op$subexpression$1$ebnf$5", "symbols": [], "postprocess": () => null},
    {"name": "op$subexpression$1", "symbols": [(lexer.has("lt") ? {type: "lt"} : lt), "op$subexpression$1$ebnf$5", "value"], "postprocess": d => o.$lt(d[2])},
    {"name": "op$subexpression$1$ebnf$6", "symbols": [(lexer.has("ws") ? {type: "ws"} : ws)], "postprocess": id},
    {"name": "op$subexpression$1$ebnf$6", "symbols": [], "postprocess": () => null},
    {"name": "op$subexpression$1", "symbols": [(lexer.has("le") ? {type: "le"} : le), "op$subexpression$1$ebnf$6", "value"], "postprocess": d => o.$le(d[2])},
    {"name": "op$subexpression$1$ebnf$7", "symbols": [(lexer.has("ws") ? {type: "ws"} : ws)], "postprocess": id},
    {"name": "op$subexpression$1$ebnf$7", "symbols": [], "postprocess": () => null},
    {"name": "op$subexpression$1$ebnf$8", "symbols": [(lexer.has("ws") ? {type: "ws"} : ws)], "postprocess": id},
    {"name": "op$subexpression$1$ebnf$8", "symbols": [], "postprocess": () => null},
    {"name": "op$subexpression$1", "symbols": [(lexer.has("ws") ? {type: "ws"} : ws), (lexer.has("_in") ? {type: "_in"} : _in), (lexer.has("ws") ? {type: "ws"} : ws), (lexer.has("lp") ? {type: "lp"} : lp), "op$subexpression$1$ebnf$7", "values", "op$subexpression$1$ebnf$8", (lexer.has("rp") ? {type: "rp"} : rp)], "postprocess": d => o.$in(d[5])},
    {"name": "op$subexpression$1$ebnf$9", "symbols": [(lexer.has("ws") ? {type: "ws"} : ws)], "postprocess": id},
    {"name": "op$subexpression$1$ebnf$9", "symbols": [], "postprocess": () => null},
    {"name": "op$subexpression$1$ebnf$10", "symbols": [(lexer.has("ws") ? {type: "ws"} : ws)], "postprocess": id},
    {"name": "op$subexpression$1$ebnf$10", "symbols": [], "postprocess": () => null},
    {"name": "op$subexpression$1", "symbols": [(lexer.has("ws") ? {type: "ws"} : ws), (lexer.has("not") ? {type: "not"} : not), (lexer.has("_in") ? {type: "_in"} : _in), (lexer.has("lp") ? {type: "lp"} : lp), "op$subexpression$1$ebnf$9", "values", "op$subexpression$1$ebnf$10", (lexer.has("rp") ? {type: "rp"} : rp)], "postprocess": d => o.$nin(d[6])},
    {"name": "op$subexpression$1$ebnf$11", "symbols": [(lexer.has("ws") ? {type: "ws"} : ws)], "postprocess": id},
    {"name": "op$subexpression$1$ebnf$11", "symbols": [], "postprocess": () => null},
    {"name": "op$subexpression$1", "symbols": [(lexer.has("re") ? {type: "re"} : re), "op$subexpression$1$ebnf$11", "value"], "postprocess": d => o.$match(d[2])},
    {"name": "op$subexpression$1$ebnf$12", "symbols": [(lexer.has("ws") ? {type: "ws"} : ws)], "postprocess": id},
    {"name": "op$subexpression$1$ebnf$12", "symbols": [], "postprocess": () => null},
    {"name": "op$subexpression$1", "symbols": [(lexer.has("nr") ? {type: "nr"} : nr), "op$subexpression$1$ebnf$12", "value"], "postprocess": d => o.$not(o.$match(d[2]))},
    {"name": "op$ebnf$3", "symbols": [(lexer.has("ws") ? {type: "ws"} : ws)], "postprocess": id},
    {"name": "op$ebnf$3", "symbols": [], "postprocess": () => null},
    {"name": "op", "symbols": ["op$ebnf$1", "key", "op$ebnf$2", "op$subexpression$1", "op$ebnf$3"], "postprocess": d => paths(d[1], d[3])},
    {"name": "op", "symbols": [(lexer.has("ws") ? {type: "ws"} : ws), (lexer.has("not") ? {type: "not"} : not), "query"], "postprocess": d => o.$not(d[1])},
    {"name": "op", "symbols": [(lexer.has("lp") ? {type: "lp"} : lp), "query", (lexer.has("rp") ? {type: "rp"} : rp)], "postprocess": d => d[1]},
    {"name": "values$ebnf$1", "symbols": []},
    {"name": "values$ebnf$1$subexpression$1$ebnf$1", "symbols": [(lexer.has("ws") ? {type: "ws"} : ws)], "postprocess": id},
    {"name": "values$ebnf$1$subexpression$1$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "values$ebnf$1$subexpression$1$ebnf$2", "symbols": [(lexer.has("ws") ? {type: "ws"} : ws)], "postprocess": id},
    {"name": "values$ebnf$1$subexpression$1$ebnf$2", "symbols": [], "postprocess": () => null},
    {"name": "values$ebnf$1$subexpression$1", "symbols": ["values$ebnf$1$subexpression$1$ebnf$1", (lexer.has("coma") ? {type: "coma"} : coma), "values$ebnf$1$subexpression$1$ebnf$2", "value"]},
    {"name": "values$ebnf$1", "symbols": ["values$ebnf$1", "values$ebnf$1$subexpression$1"], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "values", "symbols": ["value", "values$ebnf$1"], "postprocess": d => c(d, 3)},
    {"name": "value", "symbols": [(lexer.has("int") ? {type: "int"} : int)], "postprocess": value},
    {"name": "value", "symbols": [(lexer.has("float") ? {type: "float"} : float)], "postprocess": value},
    {"name": "value", "symbols": [(lexer.has("bool") ? {type: "bool"} : bool)], "postprocess": value},
    {"name": "value", "symbols": [(lexer.has("string") ? {type: "string"} : string)], "postprocess": value},
    {"name": "value", "symbols": [(lexer.has("_null") ? {type: "_null"} : _null)], "postprocess": value},
    {"name": "key$ebnf$1", "symbols": []},
    {"name": "key$ebnf$1$subexpression$1", "symbols": [(lexer.has("dot") ? {type: "dot"} : dot), (lexer.has("string") ? {type: "string"} : string)], "postprocess": d => d[1].value},
    {"name": "key$ebnf$1", "symbols": ["key$ebnf$1", "key$ebnf$1$subexpression$1"], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "key", "symbols": [(lexer.has("string") ? {type: "string"} : string), "key$ebnf$1"], "postprocess": key}
  ],
  ParserStart: "query",
};

export default grammar;
