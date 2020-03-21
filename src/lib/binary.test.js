import { maxBinaryGap } from './binary'

describe('maxBinaryGap', () => {
    test('9 to have a binary gap of 2', () => {
        expect(maxBinaryGap(9)).toEqual(2)
    })

    test('20 to have a binary gap of 2', () => {
        expect(maxBinaryGap(20)).toEqual(1)
    })

    test('15 to have a binary gap of 0', () => {
        expect(maxBinaryGap(15)).toEqual(0)
    })

    test('32 to have a binary gap of 0', () => {
        expect(maxBinaryGap(32)).toEqual(0)
    })

    test('529 to have a binary gap of 4', () => {
        expect(maxBinaryGap(529)).toEqual(4)
    })

    test('1041 to have a binary gap of 5', () => {
        expect(maxBinaryGap(1041)).toEqual(5)
    })
})
