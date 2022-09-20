numbers = [11,3,64,17,94]
for i,v in enumerate(numbers, 100):
  print(i, v)
  
# dictionaries:
for key in {"name": "momo", "age": 33}:
  print(key) 

string_iterator = iter("Python")

print(next(string_iterator))
print(next(string_iterator))
print(next(string_iterator))
print(next(string_iterator))
print(next(string_iterator))
print(next(string_iterator)) 


def my_gen():
  n = 1
  print('This is printed in the first call')
  yield n
  n += 1
  print('This is printed second')
  yield n
  n += 1
  print('This is printed at last')
  yield n 

iter_gen = my_gen() 
next(iter_gen)
next(iter_gen)
next(iter_gen)
next(iter_gen)      