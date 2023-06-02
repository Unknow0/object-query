// Generated automatically by nearley, version 2.20.1
// http://github.com/Hardmath123/nearley
// Bypasses TS6133. Allow declared but unused functions.
// @ts-ignore
function id(d: any[]): any { return d[0]; }

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

	function raw(d:string):any {
		const v:string = d.toLowerCase()
		if(v=='true')
			return true
		if(v=='false')
			return false
		return d;
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
  Lexer: undefined,
  ParserRules: [
    {"name": "_$ebnf$1", "symbols": []},
    {"name": "_$ebnf$1", "symbols": ["_$ebnf$1", "wschar"], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "_", "symbols": ["_$ebnf$1"], "postprocess": function(d) {return null;}},
    {"name": "__$ebnf$1", "symbols": ["wschar"]},
    {"name": "__$ebnf$1", "symbols": ["__$ebnf$1", "wschar"], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "__", "symbols": ["__$ebnf$1"], "postprocess": function(d) {return null;}},
    {"name": "wschar", "symbols": [/[ \t\n\v\f]/], "postprocess": id},
    {"name": "unsigned_int$ebnf$1", "symbols": [/[0-9]/]},
    {"name": "unsigned_int$ebnf$1", "symbols": ["unsigned_int$ebnf$1", /[0-9]/], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "unsigned_int", "symbols": ["unsigned_int$ebnf$1"], "postprocess": 
        function(d) {
            return parseInt(d[0].join(""));
        }
        },
    {"name": "int$ebnf$1$subexpression$1", "symbols": [{"literal":"-"}]},
    {"name": "int$ebnf$1$subexpression$1", "symbols": [{"literal":"+"}]},
    {"name": "int$ebnf$1", "symbols": ["int$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "int$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "int$ebnf$2", "symbols": [/[0-9]/]},
    {"name": "int$ebnf$2", "symbols": ["int$ebnf$2", /[0-9]/], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "int", "symbols": ["int$ebnf$1", "int$ebnf$2"], "postprocess": 
        function(d) {
            if (d[0]) {
                return parseInt(d[0][0]+d[1].join(""));
            } else {
                return parseInt(d[1].join(""));
            }
        }
        },
    {"name": "unsigned_decimal$ebnf$1", "symbols": [/[0-9]/]},
    {"name": "unsigned_decimal$ebnf$1", "symbols": ["unsigned_decimal$ebnf$1", /[0-9]/], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "unsigned_decimal$ebnf$2$subexpression$1$ebnf$1", "symbols": [/[0-9]/]},
    {"name": "unsigned_decimal$ebnf$2$subexpression$1$ebnf$1", "symbols": ["unsigned_decimal$ebnf$2$subexpression$1$ebnf$1", /[0-9]/], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "unsigned_decimal$ebnf$2$subexpression$1", "symbols": [{"literal":"."}, "unsigned_decimal$ebnf$2$subexpression$1$ebnf$1"]},
    {"name": "unsigned_decimal$ebnf$2", "symbols": ["unsigned_decimal$ebnf$2$subexpression$1"], "postprocess": id},
    {"name": "unsigned_decimal$ebnf$2", "symbols": [], "postprocess": () => null},
    {"name": "unsigned_decimal", "symbols": ["unsigned_decimal$ebnf$1", "unsigned_decimal$ebnf$2"], "postprocess": 
        function(d) {
            return parseFloat(
                d[0].join("") +
                (d[1] ? "."+d[1][1].join("") : "")
            );
        }
        },
    {"name": "decimal$ebnf$1", "symbols": [{"literal":"-"}], "postprocess": id},
    {"name": "decimal$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "decimal$ebnf$2", "symbols": [/[0-9]/]},
    {"name": "decimal$ebnf$2", "symbols": ["decimal$ebnf$2", /[0-9]/], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "decimal$ebnf$3$subexpression$1$ebnf$1", "symbols": [/[0-9]/]},
    {"name": "decimal$ebnf$3$subexpression$1$ebnf$1", "symbols": ["decimal$ebnf$3$subexpression$1$ebnf$1", /[0-9]/], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "decimal$ebnf$3$subexpression$1", "symbols": [{"literal":"."}, "decimal$ebnf$3$subexpression$1$ebnf$1"]},
    {"name": "decimal$ebnf$3", "symbols": ["decimal$ebnf$3$subexpression$1"], "postprocess": id},
    {"name": "decimal$ebnf$3", "symbols": [], "postprocess": () => null},
    {"name": "decimal", "symbols": ["decimal$ebnf$1", "decimal$ebnf$2", "decimal$ebnf$3"], "postprocess": 
        function(d) {
            return parseFloat(
                (d[0] || "") +
                d[1].join("") +
                (d[2] ? "."+d[2][1].join("") : "")
            );
        }
        },
    {"name": "percentage", "symbols": ["decimal", {"literal":"%"}], "postprocess": 
        function(d) {
            return d[0]/100;
        }
        },
    {"name": "jsonfloat$ebnf$1", "symbols": [{"literal":"-"}], "postprocess": id},
    {"name": "jsonfloat$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "jsonfloat$ebnf$2", "symbols": [/[0-9]/]},
    {"name": "jsonfloat$ebnf$2", "symbols": ["jsonfloat$ebnf$2", /[0-9]/], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "jsonfloat$ebnf$3$subexpression$1$ebnf$1", "symbols": [/[0-9]/]},
    {"name": "jsonfloat$ebnf$3$subexpression$1$ebnf$1", "symbols": ["jsonfloat$ebnf$3$subexpression$1$ebnf$1", /[0-9]/], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "jsonfloat$ebnf$3$subexpression$1", "symbols": [{"literal":"."}, "jsonfloat$ebnf$3$subexpression$1$ebnf$1"]},
    {"name": "jsonfloat$ebnf$3", "symbols": ["jsonfloat$ebnf$3$subexpression$1"], "postprocess": id},
    {"name": "jsonfloat$ebnf$3", "symbols": [], "postprocess": () => null},
    {"name": "jsonfloat$ebnf$4$subexpression$1$ebnf$1", "symbols": [/[+-]/], "postprocess": id},
    {"name": "jsonfloat$ebnf$4$subexpression$1$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "jsonfloat$ebnf$4$subexpression$1$ebnf$2", "symbols": [/[0-9]/]},
    {"name": "jsonfloat$ebnf$4$subexpression$1$ebnf$2", "symbols": ["jsonfloat$ebnf$4$subexpression$1$ebnf$2", /[0-9]/], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "jsonfloat$ebnf$4$subexpression$1", "symbols": [/[eE]/, "jsonfloat$ebnf$4$subexpression$1$ebnf$1", "jsonfloat$ebnf$4$subexpression$1$ebnf$2"]},
    {"name": "jsonfloat$ebnf$4", "symbols": ["jsonfloat$ebnf$4$subexpression$1"], "postprocess": id},
    {"name": "jsonfloat$ebnf$4", "symbols": [], "postprocess": () => null},
    {"name": "jsonfloat", "symbols": ["jsonfloat$ebnf$1", "jsonfloat$ebnf$2", "jsonfloat$ebnf$3", "jsonfloat$ebnf$4"], "postprocess": 
        function(d) {
            return parseFloat(
                (d[0] || "") +
                d[1].join("") +
                (d[2] ? "."+d[2][1].join("") : "") +
                (d[3] ? "e" + (d[3][1] || "+") + d[3][2].join("") : "")
            );
        }
        },
    {"name": "dqstring$ebnf$1", "symbols": []},
    {"name": "dqstring$ebnf$1", "symbols": ["dqstring$ebnf$1", "dstrchar"], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "dqstring", "symbols": [{"literal":"\""}, "dqstring$ebnf$1", {"literal":"\""}], "postprocess": function(d) {return d[1].join(""); }},
    {"name": "sqstring$ebnf$1", "symbols": []},
    {"name": "sqstring$ebnf$1", "symbols": ["sqstring$ebnf$1", "sstrchar"], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "sqstring", "symbols": [{"literal":"'"}, "sqstring$ebnf$1", {"literal":"'"}], "postprocess": function(d) {return d[1].join(""); }},
    {"name": "btstring$ebnf$1", "symbols": []},
    {"name": "btstring$ebnf$1", "symbols": ["btstring$ebnf$1", /[^`]/], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "btstring", "symbols": [{"literal":"`"}, "btstring$ebnf$1", {"literal":"`"}], "postprocess": function(d) {return d[1].join(""); }},
    {"name": "dstrchar", "symbols": [/[^\\"\n]/], "postprocess": id},
    {"name": "dstrchar", "symbols": [{"literal":"\\"}, "strescape"], "postprocess": 
        function(d) {
            return JSON.parse("\""+d.join("")+"\"");
        }
        },
    {"name": "sstrchar", "symbols": [/[^\\'\n]/], "postprocess": id},
    {"name": "sstrchar", "symbols": [{"literal":"\\"}, "strescape"], "postprocess": function(d) { return JSON.parse("\""+d.join("")+"\""); }},
    {"name": "sstrchar$string$1", "symbols": [{"literal":"\\"}, {"literal":"'"}], "postprocess": (d) => d.join('')},
    {"name": "sstrchar", "symbols": ["sstrchar$string$1"], "postprocess": function(d) {return "'"; }},
    {"name": "strescape", "symbols": [/["\\/bfnrt]/], "postprocess": id},
    {"name": "strescape", "symbols": [{"literal":"u"}, /[a-fA-F0-9]/, /[a-fA-F0-9]/, /[a-fA-F0-9]/, /[a-fA-F0-9]/], "postprocess": 
        function(d) {
            return d.join("");
        }
        },
    {"name": "query$ebnf$1", "symbols": []},
    {"name": "query$ebnf$1$subexpression$1$string$1", "symbols": [{"literal":"o"}, {"literal":"r"}], "postprocess": (d) => d.join('')},
    {"name": "query$ebnf$1$subexpression$1", "symbols": ["__", "query$ebnf$1$subexpression$1$string$1", "__", "qand"]},
    {"name": "query$ebnf$1", "symbols": ["query$ebnf$1", "query$ebnf$1$subexpression$1"], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "query", "symbols": ["qand", "query$ebnf$1"], "postprocess": or},
    {"name": "qand$ebnf$1", "symbols": []},
    {"name": "qand$ebnf$1$subexpression$1$string$1", "symbols": [{"literal":"a"}, {"literal":"n"}, {"literal":"d"}], "postprocess": (d) => d.join('')},
    {"name": "qand$ebnf$1$subexpression$1", "symbols": ["__", "qand$ebnf$1$subexpression$1$string$1", "__", "op"]},
    {"name": "qand$ebnf$1", "symbols": ["qand$ebnf$1", "qand$ebnf$1$subexpression$1"], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "qand", "symbols": ["op", "qand$ebnf$1"], "postprocess": and},
    {"name": "op$subexpression$1", "symbols": [{"literal":"="}, "_", "value"], "postprocess": d => o.$eq(d[2])},
    {"name": "op$subexpression$1$string$1", "symbols": [{"literal":"!"}, {"literal":"="}], "postprocess": (d) => d.join('')},
    {"name": "op$subexpression$1", "symbols": ["op$subexpression$1$string$1", "_", "value"], "postprocess": d => o.$ne(d[2])},
    {"name": "op$subexpression$1", "symbols": [{"literal":">"}, "_", "value"], "postprocess": d => o.$gt(d[2])},
    {"name": "op$subexpression$1$string$2", "symbols": [{"literal":">"}, {"literal":"="}], "postprocess": (d) => d.join('')},
    {"name": "op$subexpression$1", "symbols": ["op$subexpression$1$string$2", "_", "value"], "postprocess": d => o.$ge(d[2])},
    {"name": "op$subexpression$1", "symbols": [{"literal":"<"}, "_", "value"], "postprocess": d => o.$lt(d[2])},
    {"name": "op$subexpression$1$string$3", "symbols": [{"literal":"<"}, {"literal":"="}], "postprocess": (d) => d.join('')},
    {"name": "op$subexpression$1", "symbols": ["op$subexpression$1$string$3", "_", "value"], "postprocess": d => o.$le(d[2])},
    {"name": "op$subexpression$1$string$4", "symbols": [{"literal":" "}, {"literal":"i"}, {"literal":"n"}, {"literal":" "}, {"literal":"("}], "postprocess": (d) => d.join('')},
    {"name": "op$subexpression$1", "symbols": ["op$subexpression$1$string$4", "_", "values", "_", {"literal":")"}], "postprocess": d => o.$in(d[2])},
    {"name": "op$subexpression$1$string$5", "symbols": [{"literal":" "}, {"literal":"n"}, {"literal":"i"}, {"literal":"n"}, {"literal":" "}, {"literal":"("}], "postprocess": (d) => d.join('')},
    {"name": "op$subexpression$1", "symbols": ["op$subexpression$1$string$5", "_", "values", "_", {"literal":")"}], "postprocess": d => o.$nin(d[2])},
    {"name": "op$subexpression$1", "symbols": [{"literal":":"}, "_", "value"], "postprocess": d => o.$match(d[2])},
    {"name": "op$subexpression$1$string$6", "symbols": [{"literal":"!"}, {"literal":":"}], "postprocess": (d) => d.join('')},
    {"name": "op$subexpression$1", "symbols": ["op$subexpression$1$string$6", "_", "value"], "postprocess": d => o.$not(o.$match(d[2]))},
    {"name": "op", "symbols": ["_", "key", "_", "op$subexpression$1", "_"], "postprocess": d => paths(d[1], d[3])},
    {"name": "op$string$1", "symbols": [{"literal":" "}, {"literal":"n"}, {"literal":"o"}, {"literal":"t"}, {"literal":" "}, {"literal":"("}], "postprocess": (d) => d.join('')},
    {"name": "op", "symbols": ["op$string$1", "query", {"literal":")"}], "postprocess": d => o.$not(d[1])},
    {"name": "op", "symbols": [{"literal":"("}, "query", {"literal":")"}], "postprocess": d => d[1]},
    {"name": "values$ebnf$1", "symbols": []},
    {"name": "values$ebnf$1$subexpression$1", "symbols": ["_", {"literal":","}, "_", "value"]},
    {"name": "values$ebnf$1", "symbols": ["values$ebnf$1", "values$ebnf$1$subexpression$1"], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "values", "symbols": ["value", "values$ebnf$1"], "postprocess": values},
    {"name": "value", "symbols": ["dqstring"], "postprocess": id},
    {"name": "value", "symbols": ["sqstring"], "postprocess": id},
    {"name": "value", "symbols": ["int"], "postprocess": id},
    {"name": "value", "symbols": ["decimal"], "postprocess": id},
    {"name": "value$ebnf$1", "symbols": [/[a-zA-Z0-9_-]/]},
    {"name": "value$ebnf$1", "symbols": ["value$ebnf$1", /[a-zA-Z0-9_-]/], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "value", "symbols": ["value$ebnf$1"], "postprocess": d => raw(d[0].join(""))},
    {"name": "key$ebnf$1", "symbols": []},
    {"name": "key$ebnf$1$subexpression$1", "symbols": [{"literal":"."}, "name"], "postprocess": d=>d[1]},
    {"name": "key$ebnf$1", "symbols": ["key$ebnf$1", "key$ebnf$1$subexpression$1"], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "key", "symbols": ["name", "key$ebnf$1"], "postprocess": key},
    {"name": "name$ebnf$1", "symbols": [/[a-zA-Z0-9]/]},
    {"name": "name$ebnf$1", "symbols": ["name$ebnf$1", /[a-zA-Z0-9]/], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "name", "symbols": ["name$ebnf$1"], "postprocess": d=>d[0].join("")},
    {"name": "name$string$1", "symbols": [{"literal":"["}, {"literal":"\""}], "postprocess": (d) => d.join('')},
    {"name": "name$ebnf$2", "symbols": [/[^"]/]},
    {"name": "name$ebnf$2", "symbols": ["name$ebnf$2", /[^"]/], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "name$string$2", "symbols": [{"literal":"\""}, {"literal":"]"}], "postprocess": (d) => d.join('')},
    {"name": "name", "symbols": ["name$string$1", "name$ebnf$2", "name$string$2"], "postprocess": d=>d[1].join("")},
    {"name": "name$string$3", "symbols": [{"literal":"["}, {"literal":"'"}], "postprocess": (d) => d.join('')},
    {"name": "name$ebnf$3", "symbols": [/[^']/]},
    {"name": "name$ebnf$3", "symbols": ["name$ebnf$3", /[^']/], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "name$string$4", "symbols": [{"literal":"'"}, {"literal":"]"}], "postprocess": (d) => d.join('')},
    {"name": "name", "symbols": ["name$string$3", "name$ebnf$3", "name$string$4"], "postprocess": d=>d[1].join("")}
  ],
  ParserStart: "query",
};

export default grammar;
