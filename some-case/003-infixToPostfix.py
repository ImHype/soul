from struct.stack import Stack
def infixToPostfix(str):
    prec = definePrec()
    stack = Stack()
    postfixList = []

    for token in str:
        if token in "+-*/":
            while (not stack.isEmpty()) and (prec[stack.peek()] >= prec[token]):
                postfixList.append(stack.pop())
            stack.push(token)

        elif token == "(":
            stack.push(token)
        elif token == ")":
            topToken = stack.pop()
            # 取出栈中的 符号
            while topToken != '(':
                postfixList.append(topToken)
                topToken = stack.pop()
        else:
            postfixList.append(token)

    while not stack.isEmpty():
        postfixList.append(stack.pop())
    return "".join(postfixList)

def definePrec():
    prec = {}
    prec["*"] = 3
    prec["/"] = 3
    prec["+"] = 2
    prec["-"] = 2
    prec["("] = 1
    return prec

print(infixToPostfix("A*B+C*D"))
print(infixToPostfix("(A+B)*C-(D-E)*(F+G)"))

# A
# A         *
# AB        *
# AB*       +
# AB*C      +
# AB*CD     +*
# AB*CD*+


# AB+C*DE-FG+*-

# 后缀表达式的作用是将原本需要+*()考虑优先级的中缀表达式（复杂）转换成可以直接计算的一种形式（简单）
# 遇到符号则计算最近两项的值并重新推入栈中
# 转换算法为：
# 1. 遇到数字直接push入结果数组中；
# 2. 遇到计算符将计算符push一个栈中，如果栈中有优先级大于当前计算符的项，把该项pop出，push到结果数组中
# 3. 遇到（，则将（推入到结果数组中，直到遇到），将（）中的所有计算符pop出并push到结果数组中
# 4. 所有token遍历完
