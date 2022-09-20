import pytest
def is_anagram(s1, s2):
    return sorted(s1) == sorted(s2)

@pytest.mark.parametrize("str1, str2", [("act","cat"), ("a", "aa"),("remote","meteor")]) 
def test_sum(str1, str2):   
    assert is_anagram(str1,str2), "Got error in is_anagram!" 