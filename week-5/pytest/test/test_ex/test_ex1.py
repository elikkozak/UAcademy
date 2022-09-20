def sub(a,b):
    return a - b

def test_sub_error():
  assert sub(2,1) == 0 

def test_sub_success():
  assert sub(2,1) == 1 