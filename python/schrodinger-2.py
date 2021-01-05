"""
String Grouping

Write a function that groups strings by different properties.
I.E.
List = ["ABA", "AC", "BD"]

case 1:
Grouped by First Letter = 
{
    "A": ["ABA", "AC"],
    "B": ["BD"]
    "C": ["CD"]
}

case 4:
Grouped by Last Letter = 
{
    "A": ["ABA", "AC"],
    "B": ["BD"]
    "C": ["CD"]
}

case 2
Length = 
{
    2: ["AC", "BD"]
    3: ["ABA"]
}

case 3
Has an anagram that is a Palindrome = 
{
    true: ["AAB"],
    false: ["AC", "BD"]
}
"""



######
# helper function - condition parameter for: group by first letter
def group_by_first_letter(list_of_strings):

    # initialize dictionary
    my_dict = {}

    # create a list of unique first letter keys for the dictionary
    keys = list(set(list(map(lambda str: str[0], list_of_strings))))

    # iterate through list of keys and list of strings to group strings by first letter
    for key in keys:
        values = []
        for j in list_of_strings:
            if j[0] == key:
                values.append(j)
        my_dict[key] = values
    return my_dict


######
# helper function - condition parameter for: group by length
def group_by_length(list_of_strings):

     # initialize dictionary
    my_dict = {}

    # create a list of unique string lengths
    keys = list(set(list(map(lambda str: len(str), list_of_strings))))

    # iterate through list of keys and list of strings to group strings by length
    for key in keys:
        values = []
        for j in list_of_strings:
            if len(j) == key:
                values.append(j)
        my_dict[key] = values
    return my_dict


#####
def has_anagram_is_palindrome(string):
    # count the number of instances of each letter

    # print(string)
    my_dict = {}
    for i in string:
        my_dict[i] = string.count(i)
    list_of_frequency = list(my_dict.values())
    # print(list_of_frequency)

    # if all letters occur evenly, return true
    if sum(list(map(lambda x: x % 2, list_of_frequency))) == 0:
        return True

    # if all letters occur evenly except one, return true
    elif sum(list(map(lambda x: x % 2, list_of_frequency))) == 1:
        return True

    # if two or more letters have odd frequency, return false
    else:
        return False


# print(has_anagram_is_palindrome("AAABBBCCC"))

######
# helper function - condition parameter for: has an anagram that is a palindrome
def palindrome(list_of_strings):

    # initilize dictionary value lists
    true_values = []
    false_values = []

    # append strings to dictionary value lists
    for i in list_of_strings:
        if has_anagram_is_palindrome(i) == True:
            true_values.append(i)
        else:
            false_values.append(i)

    # initialize and return dictionary 
    dict_palidrome = {"true: ": true_values, "false: ": false_values}
    return dict_palidrome




def group_string(list_of_strings, condition_parameter):
    return condition_parameter(list_of_strings)







"""
TEST CASES:
----------
CASE 1: grouped by first letter 

input:            
list_of_str_1 = ["AAB", "AC", "BD"]
expected output:  
{"A": ["ABA", "AC"], "B": ["BD"], "C": ["CD"]}

print(group_string(list_of_str_1, group_by_first_letter))

------------
CASE 2: group by length

input:            
list_of_str_2 = ["AAB", "AC", "BD"]
expected output:  
{2: ["AC", "BD"], 3: ["ABA"]}

print(group_string(list_of_str_2, group_by_length))

-------------
CASE 3: test for anagram/palindrome

input:
list_of_str_3 = ["AAB", "AC", "BD"]
expected output:
{'true: ': ['AAB'], 'false: ': ['AC', 'BD']}

print(group_string(list_of_str_3, palindrome))


