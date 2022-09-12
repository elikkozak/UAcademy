# 1
def reversed_without_first(tuple):
    return tuple[:0:-1]


# 2
def reversed_without_last(tuple):
    return tuple[len(tuple) - 2::-1]


print(reversed_without_first((1, 2, 3)))
print(reversed_without_last((1, 2, 3)))


print(reversed_without_first((2, 4, 6, 8, 10, 12)))
print(reversed_without_last((2, 4, 6, 8, 10, 12)))
