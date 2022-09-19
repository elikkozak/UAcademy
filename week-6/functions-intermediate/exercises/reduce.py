def reduce(func, iterable,initial = None):
    acc = initial or iterable[0]
    for num in range(1,len(iterable)):
        acc += func(acc,iterable[num])
    return acc