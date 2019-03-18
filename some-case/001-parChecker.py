from struct.stack import Stack

def parChecker(symbolString):
    s = Stack()
    balanced = True
    index = 0
    while index < len(symbolString) and balanced:
        symbol = symbolString[index]
        if matchSympol(symbol):
            s.push(symbol)
        else:
            balanced = ifBalanced(s, symbol)
        index += 1
    if balanced and s.isEmpty():
        return True
    else:
        return False


def matches(open, close):
    opens = "([{"
    closers = ")]}"
    return opens.index(open) == closers.index(close)


def matchSympol(symbol):
    return symbol in "([{"

def ifBalanced(s, symbol):
    if s.isEmpty():
        return False
    else:
        top = s.pop()
        if not matches(top, symbol):
            return False
    return True

print(parChecker('{{([][])}()}'))
print(parChecker('[{()]'))
