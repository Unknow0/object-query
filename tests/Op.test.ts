import { $match } from '../src/Op'

describe('match', () => {
	
	test('ne', ()=> expect($match('err')('test')).toBe(false))
	test('eq', ()=> expect($match('test')('test')).toBe(true))

	test('start', ()=> expect($match('st')('test')).toBe(true))
	test('end', ()=> expect($match('te')('test')).toBe(true))
	test('incl', ()=> expect($match('es')('test')).toBe(true))
})
