import { fn1 as reverseWords } from '../src/reverseWords'

test('「我是小明 小明爱我」被翻转后应该是 「我爱明小 明小是我」', () => {
  expect(reverseWords('我是小明 小明爱我')).toBe('我爱明小 明小是我')
})
