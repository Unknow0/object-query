export interface Op {
	match(o:any):boolean
}

export class OpEq implements Op {
	constructor(private readonly value:any) {
	}

	match(o:any):boolean {
		return this.value==o;
	}
}
