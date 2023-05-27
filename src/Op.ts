export type test = (o:any) => boolean;

export function not(t:test):test {
	return o => !t(o);
}

export function eq(value:any):test {
	return o=> o == value;
}

export function ne(value:any):test {
	return o=> o != value;
}

export function lt(value:any):test {
	return o=> o < value;
}

export function le(value:any):test {
	return o=> o <= value;
}

export function gt(value:any):test {
	return o=> o > value;
}

export function ge(value:any):test {
	return o=> o > value;
}

export function includes(values:any[]):test {
	return o=> values.includes(o);
}
