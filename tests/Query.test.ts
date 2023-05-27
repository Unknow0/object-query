import * as q from '../src/Query';
import { $eq } from '../src/Op';

describe('none', ()=> {
	let m=q.none();

	test('empty', () => expect(m.match({})).toBe(false))
	test('missing', () => expect(m.match({a: 5})).toBe(false))
	test('null', () => expect(m.match({a: {b: null}})).toBe(false))
	test('simple', () => expect(m.match({a: {b: 4}})).toBe(false))
	test('array1', () => expect(m.match({a: [{b: 4}]})).toBe(false))
	test('array2', () => expect(m.match({a: [{b: 4}, {b: 5}]})).toBe(false))
	test('array3', () => expect(m.match({a: [{b: 6}, {b: 5}]})).toBe(false))
})

describe('path', ()=>{
	let m=q.path('a.b', $eq(4))

	test('empty', () => expect(m.match({})).toBe(false))
	test('missing', () => expect(m.match({a: 5})).toBe(false))
	test('null', () => expect(m.match({a: {b: null}})).toBe(false))
	test('simple', () => expect(m.match({a: {b: 4}})).toBe(true))
	test('array1', () => expect(m.match({a: [{b: 4}]})).toBe(true))
	test('array2', () => expect(m.match({a: [{b: 4}, {b: 5}]})).toBe(true))
	test('array3', () => expect(m.match({a: [{b: 6}, {b: 5}]})).toBe(false))
})
