from struct.stack import Stack

# 遇到符号则计算最近两项的值并重新推入栈中
def computePostfix(str):
    stack = Stack()
    for token in str:
        # 遇到 运算符 即计算栈顶2元素，并将结果 push 到栈中
        if token in '+-*/':
            operator2 = stack.pop()
            operator1 = stack.pop()
            stack.push(doMath(token, operator1, operator2))
        # 遇到数字 push 栈中
        elif token in "0123456789":
            stack.push(float(token))

    return stack.peek()

def doMath(method, a, b):
    if method == "+":
        return a + b
    elif method == "-":
        return a - b
    elif method == "*":
        return a * b
    else:
        return a / b

print(computePostfix("9 8 + 3 2 + /"))