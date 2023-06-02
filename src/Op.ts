export type test = (o:any) => boolean;

function f(name:string, t:test):test {
	t.toString=()=>name;
	return t;
}

export function $and(...t:test[]):test {
	if(t.length==0)
		return o=>false
	if(t.length==1)
		return t[0];

	return f('{$and: ['+t+']}', o => {
		for(let i=0; i<t.length; i++) {
			if(!t[i](o))
				return false;
			}
		return true;
	});
}

export function $or(...t:test[]):test {
	if(t.length==0)
		return o=>false
	if(t.length==1)
		return t[0];
	return f('{$or:['+t+']}', o => {
		for(let i=0; i<t.length; i++) {
			if(t[i](o))
				return true;
			}
		return false;
	})
}

export function $not(t:test):test {
	return f('{$not:'+JSON.stringify(t)+'}', o => !t(o));
}

export function $eq(value:any):test {
	return f('{$eq:'+JSON.stringify(value)+'}', o=> o == value);
}

export function $ne(value:any):test {
	return f('{$ne:'+JSON.stringify(value)+'}', o=> o != value);
}

export function $lt(value:any):test {
	return f('{$lt:'+JSON.stringify(value)+'}', o=> o < value);
}

export function $le(value:any):test {
	return f('{$le:'+JSON.stringify(value)+'}', o=> o <= value);
}

export function $gt(value:any):test {
	return f('{$gt:'+JSON.stringify(value)+'}', o=> o > value);
}

export function $ge(value:any):test {
	return f('{$gt:'+JSON.stringify(value)+'}', o=> o > value);
}

export function $in(values:any[]):test {
	return f('{$in:'+JSON.stringify(values)+'}', o=> values.includes(o));
}

export function $nin(values:any[]):test {
	return f('{$nin:'+JSON.stringify(values)+'}', o=> !values.includes(o));
}

export function $match(value:any):test {
	const v:string = value.toString().toLowerCase();
	const n:string = '{$match:'+JSON.stringify(value)+'}';
	return f(n, o => o!=null&&o.toString().toLowerCase().includes(v));
}
