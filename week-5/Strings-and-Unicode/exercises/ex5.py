def is_number_char(c):
    if 48 <= ord(c) <= 57:
        return True


def convert_number_char_to_num(c):
    return ord(c)-ord("0")


def first_idex_number_and_not_zero(s):
    ind = 0
    for i in range(len(s)):
        if (is_number_char(s[i]) and ord(s[i]) != 48):
            return i
    return -1


def string_number_to_int(s):
    ind = first_idex_number_and_not_zero(s)
    if ind == -1:
        return -1
    sum = convert_number_char_to_num(s[ind])
    ind += 1
    while ind < len(s):
        if is_number_char(s[ind]):
            sum = sum * 10 + convert_number_char_to_num(s[ind])
            ind += 1
    return sum

# print(string_number_to_int("10"))       # output: 10
# print(string_number_to_int("123"))      # output: 123
# print(string_number_to_int("99"))       # output: 99
# print(string_number_to_int("ABC")) 



def string_number_to_decimal(s,base):
    ind = first_idex_number_and_not_zero(s)
    if ind == -1:
        return -1
    if convert_number_char_to_num(s[ind]) >= base:
                return -1
    sum = convert_number_char_to_num(s[ind])
    ind += 1
    while ind < len(s):
        if is_number_char(s[ind]):
            if convert_number_char_to_num(s[ind]) >= base:
                return -1
            sum = sum * base + convert_number_char_to_num(s[ind])
            ind += 1
    return sum


# base 2
print(string_number_to_decimal("10", 2))      # output: 2
print(string_number_to_decimal("101", 2))     # output: 5
print(string_number_to_decimal("12", 2))      # base 8
print(string_number_to_decimal("7", 8))       # output: 7
print(string_number_to_decimal("123", 8))     # output: 83
print(string_number_to_decimal("10", 8))      # output: 8
print(string_number_to_decimal("9", 8))       # base 10
print(string_number_to_decimal("10", 10))     # output: 10
print(string_number_to_decimal("123", 10))    # output: 123
print(string_number_to_decimal("99", 10))     # output: 99
print(string_number_to_decimal("ABC", 10))