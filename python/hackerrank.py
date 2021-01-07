def weird_or_not(n):

    if n % 2 == 1:
        return "Weird"
    elif n >= 2 and n <= 5:
        return "Not Weird"
    elif n >= 6 and n <= 20:
        return "Weird"
    elif n > 20:
        return "Not Weird"


print(weird_or_not(20))


def weird_or_not_2(n):

    return "Weird" if n % 2 == 1 or n in range(6, 20) else "Not Weird"


print(weird_or_not_2(22))


def add(x, y):
    return x + y


def subtract(x, y):
    return x - y


def multiply(x, y):
    return x * y


def divide(x, y):
    return x / y


def calculate(operator, x, y):
    cases = {
        "+": add,
        "-": subtract,
        "*": multiply,
        "/": divide,
    }
    return cases[operator](x, y)
