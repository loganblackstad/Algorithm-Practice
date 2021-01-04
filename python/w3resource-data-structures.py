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


print(to_string(2835, 16))


# 3. Write a Python program of recursion list sum. Go to the editor
# Test Data: [1, 2, [3,4], [5,6]]
# Expected Result: 21


# 4. Write a Python program to get the factorial of a non-negative integer. Go to the editor


# 5. Write a Python program to solve the Fibonacci sequence using recursion. Go to the editor


# 6. Write a Python program to get the sum of a non-negative integer. Go to the editor
# Test Data:
# sumDigits(345) -> 12
# sumDigits(45) -> 9


# 7. Write a Python program to calculate the sum of the positive integers of n+(n-2)+(n-4)... (until n-x =< 0). Go to the editor
# Test Data:
# sum_series(6) -> 12
# sum_series(10) -> 30


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

