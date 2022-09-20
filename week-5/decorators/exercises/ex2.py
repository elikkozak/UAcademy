from ast import arg
from cgitb import text
from functools import wraps


def information_decorator(func):
    @wraps(func)
    def inner(*args, **kwargs):
       print("func name: ",func.__name__) 
       print("args: ",args)
       print("kargs: ",kwargs)
       res = func(*args, **kwargs)
       print("return value: ",res)
       print("return type: ",type(res))
       return res
    return inner

@information_decorator
def add4(w, x, y, z):
  return w+x

age = 0
text = ""
add4(1, 2, age=3, text="hello") 