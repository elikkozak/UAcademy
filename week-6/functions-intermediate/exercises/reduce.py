from mimetypes import init
from pickle import NONE


def reduce(func, iterable, initial=None):
    if initial is not None:
        acc = initial
        for num in range(0, len(iterable)):
            acc = func(acc, iterable[num])
    else:
        acc = iterable[0]
        for num in range(1, len(iterable)):
            acc = func(acc, iterable[num])
    return acc


def mul(a, b):
    return a*b


def add(a, b):
    return a+b


print(reduce(mul, [1, 2, 3, 4, 5]))
print(reduce(add, [1, 2, 3, 4, 5]))
print(reduce(mul, [1, 2, 3, 4, 5], 0))
