from tokenize import String


def if_value_in_lst(val,list):
    return val in list

def if_values_in_lst(vals,list):
    for val in vals:
        if not if_value_in_lst(val,list):
            return False
    return True

def all_strings_in_lst_upper_case(list):
    for val in list:
        if type(val) == String:
            if ord("A")<=ord(val[0])<=ord("Z"):
                continue
            else:
                return False
    return True