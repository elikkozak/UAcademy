# is Palindrome
def isPalindrome(s):
    return isPalindrome(s[1:-1]) if (len(s) >= 2 and s[0] == s[-1]) else len(s) <= 1


# print(isPalindrome("do0ud"))
# print(isPalindrome("dodo"))
# print(isPalindrome(""))

def reverse_words(s):
    return " ".join([w[::-1] for w in s.split(" ")])


print(reverse_words("hello world"))


def swap_two_variables(a, b):
    return b, a


a, b = 1, 2
a, b = swap_two_variables(a, b)
print(a, b)


def sum_even_items(lst):
    return sum(lst[1:: 2])


print(sum_even_items([1, 2, 1, 3, 1]))


def duplicate(lst):
    return lst * 2


print(duplicate([1, 2, 3]))


def change_spaces(s):
    return s.replace(" ", "@")


print(change_spaces("You got it"))


def number_of_spaces(s):
    return len(s.split(" ")) - 1


print(number_of_spaces("my name is what"))


def number_of_all_spaces(s):
    return number_of_spaces(s.translate(str.maketrans("\t\n", "  ")))


print(number_of_all_spaces('''Here is
a new line'''))


def largest_lexicographically(s):
    return max([word.replace(".", "") for word in s.split(" ")])


print(largest_lexicographically("Imagination is .more important than knowledge."))


def longest_word(s):
    return max([len(word.replace(".", "")) for word in s.split(" ")])


print(longest_word("If you can't explain it simply you don't understand it well enough."))


def reverse_sentence(s):
    return "".join(list(s)[::-1])


print(reverse_sentence("hello world"))


def reverse_word_order(s):
    return " ".join(s.split(" ")[::-1])


print(reverse_word_order("hello dear world"))

# Extensions
from functools import reduce
def factorial(n):
    return reduce((lambda x, y: x * y), range(1,n+1))

def fibonacci(n):
    return fibonacci(n-1) + fibonacci(n-2) if n > 2 else 1
print(fibonacci(6))

def remove_duplicates(lst):
    return list(set(lst))
print(remove_duplicates([1,2,1,3,3,2,2]))