class Stack {
  constructor() {
    this.item = []
  }

  // 推入栈
  push(element) {
    return this.item.push(element)
  }

  // 推出栈
  pop() {
    return this.item.pop()
  }

  // 返回最后一个元素
  peek() {
    return this.item[this.item.length - 1]
  }

  // 判断是否为空栈
  isEmpty() {
    return this.item.length === 0
  }

  // 计算栈长度
  size() {
    return this.item.length
  }

  // 清空栈
  clear() {
    this.item = []
  }

  // 转化为数组
  toArray() {
    return this.item
  }

  // 转化为字符串
  toString() {
    return this.item.toString()
  }
}

const stack = new Stack()

// using WeakMap to store Stack items we ensure true privacy
// console.log(Object.getOwnPropertyNames(stack));
// console.log(Object.keys(stack));
// console.log(stack.items);

console.log('stack.isEmpty() => ', stack.isEmpty()) // outputs true

stack.push(5)
stack.push(8)

console.log('stack after push 5 and 8 => ', stack.toString())

console.log('stack.peek() => ', stack.peek()) // outputs 8

stack.push(11)

console.log('stack.size() after push 11 => ', stack.size()) // outputs 3
console.log('stack.isEmpty() => ', stack.isEmpty()) // outputs false

stack.push(15)

stack.pop()
stack.pop()

console.log('stack.size() after push 15 and pop twice => ', stack.size()) // outputs 2
