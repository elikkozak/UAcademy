def my_accumulate(lst):
    sum = 0
    for element in lst:
        yield element + sum
        sum += element

for elem in my_accumulate([1,2,3,4,5]):
    print(elem) 