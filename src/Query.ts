import { test } from './Op';
const nearley = require("nearley");
import grammar from "./grammar";

export type Query = {
	match(o:any):boolean;
}
	

const NONE:Query = { match: o=>false }
export function none() {
	return NONE;
}

export function all(q: Query[]):Query {
	if(q.length==0)
		return NONE;
	if(q.length==1)
		return q[0];
	return {
		match: o=> {
			for(let i=0; i<q.length; i++){
				if(!q[i].match(o))
					return false;
			}
			return true;
		}
	}
}

export function one(q: Query[]):Query {
	if(q.length==0)
		return NONE;
	if(q.length==1)
		return q[0];
	return {
		match: o=> {
			for(let i=0; i<q.length; i++){
				if(q[i].match(o))
					return true;
			}
			return false;
		}
	}
}

export function path(p:string, t:test):Query {
	return new PathQuery(p.split('.'), t);
}

export function parse(p:string):Query | undefined {
	try {
		const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar));
		parser.feed(p);
		return parser.results[0];
	} catch (e) {
		console.log(e)
	}
}

export class PathQuery {
	constructor(
		private paths:string[],
		private test: test
		) {
	}

	process(o:any, x:number):boolean {
		if(o==null || x==this.paths.length)
			return this.test(o);
		if(!Array.isArray(o))
			return this.process(o[this.paths[x]], x+1);
		
		for(let i=0; i<o.length; i++) {
			if(this.process(o[i], x))
				return true;
		}
		return false;
	}

	match(o:any):boolean {
		return this.process(o, 0);
	}
}

