import { $match } from '../src/Op'

describe('match', () => {
	
	test('ne', ()=> $match('t').match('test')).toBe(false)
	test('eq', ()=> $match('test').match('test')).toBe(true)

	test('start', ()=> $match('*st').match('test')).toBe(true)
	test('end', ()=> $match('te*').match('test')).toBe(true)
	test('incl', ()=> $match('*es*').match('test')).toBe(true)
})
