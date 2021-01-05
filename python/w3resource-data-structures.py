import math


# 1. Write a Python program to calculate the sum of a list of numbers. Go to the editor

lst_arr_1 = [1, 2, 3, 4, 5]


def calc_sum_list(arr):
    sum_arr = 0
    for i in arr:
        sum_arr += i
    return sum_arr


def calc_sum_list_2(arr):
    import math

    return math.fsum(arr)


# print(math.fsum(lst_arr_1))
# print(calc_sum_list_2(lst_arr_1))


# 2. Write a Python program to converting an Integer to a string in any base. Go to the editor
def to_string(n, base):
    convert_string = "0123456789ABCDEF"
    if n < base:
        return convert_string[n]
    else:
        return to_string(n // base, base) + convert_string[n % base]


# print(to_string(2835, 16))


# 3. Write a Python program of recursion list sum. Go to the editor
# Test Data: [1, 2, [3,4], [5,6]]
# Expected Result: 21

lst1 = [1, 2, [3, 4], [5, 6]]


def recursion_list_sum(lst):
    the_sum = 0
    for i in lst:
        if isinstance(i, (list)):
            the_sum += recursion_list_sum(i)
        else:
            the_sum += i
    return the_sum


# print(recursion_list_sum(lst1))


# 4. Write a Python program to get the factorial of a non-negative integer. Go to the editor
def factorial(n):
    if n <= 1:
        return 1
    else:
        return n * (factorial(n - 1))


# print(factorial(5))


# 5. Write a Python program to solve the Fibonacci sequence using recursion. Go to the editor


def fibonacci(n):
    if n == 1 or n == 2:
        return 1
    else:
        return fibonacci(n - 1) + fibonacci(n - 2)


# print(fibonacci(7))

# 0
# 1
# 1
# 1+1 = 2
# 1+2 = 3
# 2+3 = 5
# 3+5 = 8
# 5+8 = 13


# 6. Write a Python program to get the sum of a non-negative integer. Go to the editor
# Test Data:
# sumDigits(345) -> 12
# sumDigits(45) -> 9


def sum_non_negative(x):
    return sum(list(map(lambda ch: int(ch), str(x))))


# print(sum_non_negative(345))

# 7. Write a Python program to calculate the sum of the positive integers of n+(n-2)+(n-4)... (until n-x =< 0). Go to the editor
# Test Data:
# sum_series(6) -> 12
# sum_series(10) -> 30


def calc_positive_ints(x):
    return x + (calc_positive_ints(x - 2) if (x - 2) >= 0 else 0)


print(calc_positive_ints(10))


# 8. Write a Python program to calculate the harmonic sum of n-1. Go to the editor
# Note: The harmonic sum is the sum of reciprocals of the positive integers.
# Example :
# harmonic series


# 9. Write a Python program to calculate the geometric sum of n-1. Go to the editor
# Note: In mathematics, a geometric series is a series with a constant ratio between successive terms.
# Example :
# harmonic series


# 10. Write a Python program to calculate the value of 'a' to the power 'b'. Go to the editor
# Test Data :
# (power(3,4) -> 81


# 11. Write a Python program to find  the greatest common divisor (gcd) of two integers. Go to the editor

