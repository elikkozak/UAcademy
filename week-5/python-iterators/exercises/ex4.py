
from os import times


class CircleIter:
    def __init__(self, list, times):
        self.list = list
        self.times = times

    def __iter__(self):
        self.len = len(self.list)
        self.counter = -1
        return self

    def __next__(self):
        if self.counter == self.times - 1:
            raise StopIteration
        self.counter += 1
        return self.list[self.counter % self.len]

for x in CircleIter([1,2,3],4):
    print(x, end=" ")
    for y in CircleIter([5,6],3):
        print(y, end=" ")
    print() 