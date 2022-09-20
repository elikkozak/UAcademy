def my_decorator(some_func):
  def wrapper():
    print("1. before executing some_func()")
    some_func() # here we execute the function
    print("2. after executing some_func()")
  return wrapper   
  
# def just_print():
#   print("** some function that uses the decorator")
  
# my_func = my_decorator(just_print)
# my_func() 


# same as just_print = my_decorator(just_print)
@my_decorator
def just_print():
  print("** some function that uses the decorator")


just_print() 

print(just_print.__name__) 


from functools import wraps


# def my_decorator(some_func):
#   @wraps(some_func)
#   def wrapper():
#     print("1. before executing some_func()")
#     some_func() # here we execute the function
#     print("2. after executing some_func()")
#   return wrapper  