import { Op } from './Op';

export class Matcher {
	constructor(
		private paths:string[],
		private op: Op
		) {
	}

	process(o:any, x:number):boolean {
		if(o==null || x==this.paths.length)
			return this.op.match(o);
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

