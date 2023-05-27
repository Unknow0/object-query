export type test = (o:any) => boolean;

export function $and(...t:test[]):test {
	if(t.length==0)
		return o=>false
	if(t.length==1)
		return t[0];
	return o => {
		for(let i=0; i<t.length; i++) {
			if(!t[i](o))
				return false;
			}
		return true;
	}
}

export function $or(...t:test[]):test {
	if(t.length==0)
		return o=>false
	if(t.length==1)
		return t[0];
	return o => {
		for(let i=0; i<t.length; i++) {
			if(t[i](o))
				return true;
			}
		return false;
	}
}

export function not(t:test):test {
	return o => !t(o);
}

export function $eq(value:any):test {
	return o=> o == value;
}

export function $ne(value:any):test {
	return o=> o != value;
}

export function $lt(value:any):test {
	return o=> o < value;
}

export function $le(value:any):test {
	return o=> o <= value;
}

export function $gt(value:any):test {
	return o=> o > value;
}

export function $ge(value:any):test {
	return o=> o > value;
}

export function $in(values:any[]):test {
	return o=> values.includes(o);
}

export function $nin(values:any[]):test {
	return o=> !values.includes(o);
}
