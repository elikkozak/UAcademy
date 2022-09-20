def num_of_calls_decorator(func):
    def inner(*args, **kwargs):
        inner.counter += 1
        print("num of calls: ",inner.counter)
        return func(*args, **kwargs)
    inner.counter = 0
    return inner  

@num_of_calls_decorator
def add(x,y):
    return x+y

    
#add = num_of_calls_decorator(add)
add(1,2)
add(2,3)
print(add.counter)