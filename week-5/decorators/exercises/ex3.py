import re
import time
def slow_down_decorator(func):
    def inner(*args,**kwargs):
        curr_time = time.time()
        while time.time()-curr_time<1:
            pass
        res = func(*args,**kwargs)
        return res
    return inner
