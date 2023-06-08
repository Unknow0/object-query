import { lex } from '../src/lexer'

const moo = require('moo')

export const lexer = moo.compile(lex)

describe('id.v = "truc"', () => {
	test('a', () => {
		lexer.reset('id.v = "truc"');
		expect(lexer.next().type).toBe( 'string')
		expect(lexer.next().type).toBe('dot')
		expect(lexer.next().type).toBe('string')
		expect(lexer.next().type).toBe('ws')
		expect(lexer.next().type).toBe('eq')
		expect(lexer.next().type).toBe('ws')
		expect(lexer.next().type).toBe('string')
	})
})

describe('test: 4', () => {
	test('a', () => {
		lexer.reset('test: 4');
		expect(lexer.next().type).toBe('string')
		expect(lexer.next().type).toBe('re')
		expect(lexer.next().type).toBe('ws')
		expect(lexer.next().type).toBe('int')
	})
})
