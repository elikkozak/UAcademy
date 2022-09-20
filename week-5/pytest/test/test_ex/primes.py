import math 


class Primes:
    def is_prime(self,num):
        for i in range(2,math.floor(math.sqrt(num))+1):
            if not i * i < num:
                return True
            elif num % i == 0:
                return False
        return num != 0 and True
    
    def are_prime_numbers(self,*args):
        for num in args:
            if not self.is_prime(num):
                return False
        return True

    pass