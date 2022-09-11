def to_upper(c):
    if 97 <= ord(c) <= 122:
        return chr(ord(c) - 32)
    else:
        return c


print(to_upper('a'))
print(to_upper("A"))


def upper(s):
    str_to_ret = ""
    for char in "".join(s):
        str_to_ret+= to_upper(char)
    return str_to_ret

print(upper("I love Python!")) 