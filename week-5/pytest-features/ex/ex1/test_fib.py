import pytest
# Function for nth Fibonacci number
def fibonacci(n):
    if n == 0:
        return 0
    elif n == 1 or n == 2:
        return 1
    else:
        return fibonacci(n-1) + fibonacci(n-2)

@pytest.mark.parametrize("fib_index,fib_val", [(2, 1), (5, 4)])
def test_fib(fib_index,fib_val):
    assert fibonacci(fib_index) == fib_val