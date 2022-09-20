import listTest
my_list = ['I', 2, 'Love', 4, 56, 'Coding', "Python", "in", [8, 9, 10]]


def test_number():
    # Should assert if number 3 is in my_list
    assert listTest.if_value_in_lst(3, my_list)
    # Should assert if number 56 is in my_list
    assert listTest.if_value_in_lst(56, my_list)


def test_str():
    # Should assert if "I", "Love" and "Coding" are in my_list
    assert listTest.if_values_in_lst(["I", "Love", "Coding"], my_list)


def test_upper_str():
    # Should assert if all the strings in my_list are in upper case﻿
    assert listTest.all_strings_in_lst_upper_case(my_list)


def test_negative():
    # Should assert if number 6 is no﻿t in﻿ my_list - result should be true
    assert not listTest.if_value_in_lst(6, my_list)
