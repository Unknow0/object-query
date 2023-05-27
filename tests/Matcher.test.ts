import { Matcher } from '../src/Matchers';
import { OpEq } from '../src/Op';

describe('test', () => {
	let m=new Matcher(['a','b'], new OpEq(4));
	test('empty', () => expect(m.match({})).toBeFalsy())
	test('simple', () => expect(m.match({a: {b: 4}})).toBeTruthy())
	test('array1', () => expect(m.match({a: [{b: 4}, {b: 5}]})).toBeTruthy())
	test('array2', () => expect(m.match({a: [{b: 6}, {b: 5}]})).toBeFalsy())
})
