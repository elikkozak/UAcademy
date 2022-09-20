import math


def get_prime_factors_generator(n):
    our_num = n
    for i in range(2, math.floor(math.sqrt(n) + 1)):
        if our_num % i == 0:
            while(our_num %i == 0):
                our_num /= i
                yield i

for x in get_prime_factors_generator(100):
  print(x) 
