import { test } from './Op';
const nearley = require("nearley");
import grammar from "./grammar";

export type Query = {
	toString():string,
	match(o:any):boolean
}
	

const NONE:Query = { match: o => false, toString: ()=>'none()' }
export function none() {
	return NONE;
}

const ALL:Query = { match: o => true, toString: ()=>'all()'}
export function all(q: Query[] = []):Query {
	if(q.length==0)
		return ALL;
	if(q.length==1)
		return q[0];
	const n:string = 'all('+q+')'
	return {
		toString: () => n,
		match: o=> {
			for(let i=0; i<q.length; i++) {
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
	const n:string = 'one('+q+')';
	return {
		toString: () => n,
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
	return paths(p.split('.'), t);
}

export function paths(p:string[], t:test):Query {
	const n:string = '{'+p.join('.')+':'+t+'}'
	return {
		toString: ()=>n,
		match: o=>match(o, p, t, 0)
	}
}

export function parser():any {
	return new nearley.Parser(nearley.Grammar.fromCompiled(grammar))
}

export function parse(txt:string):Query {
	const p:any = parser();
	p.feed(txt);
	return p.results[0];
}

function match(o:any, paths:string[], test:test, x:number):boolean {
	if(o==null || x==paths.length)
		return test(o);
	if(!Array.isArray(o))
		return match(o[paths[x]], paths, test, x+1);
	
	for(let i=0; i<o.length; i++) {
		if(match(o[i], paths, test, x))
			return true;
	}
	return false;
}
