import time
  
def timer_decorator(func):
    def inner(*args):
        curr_time = time.time()
        res = func(*args)
        after_func_time = time.time()
        print(f'function runtime: {after_func_time-curr_time}')
        return res
    return inner
@timer_decorator
def sum_many(num):
    sum = 0 
    for i in range(num+1):
        sum += i
    return sum

sum1 = sum_many(10000000)



