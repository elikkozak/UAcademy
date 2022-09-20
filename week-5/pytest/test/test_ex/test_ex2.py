import primes
prime_class = primes.Primes()
def test_is_three_prime():
    assert prime_class.is_prime(3)  

def test_five_six_seven():
    assert prime_class.are_prime_numbers(5,6,7) 

def test_one():
    assert prime_class.is_prime(0) 