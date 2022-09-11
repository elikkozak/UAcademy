line = "wee wee goo koo goo doo doo so go go yo yo yo yo fo zo"


def get_5common(string):
    ret_dict = {}
    str_list = line.split(" ")
    for word in str_list:
        if word not in ret_dict:
            ret_dict[word] = 1
        else:
            ret_dict[word] += 1
    if (len(ret_dict.keys()) <= 5):
        return ret_dict
    else:
        looper = 0
        new_ret_dict = {}
        while looper < 5:
            max_key = list(ret_dict.keys())[0]
            max_value = ret_dict[max_key]
            for (k, v) in (ret_dict.items()):
                if (max_value < v):
                    max_key = k
                    max_value = ret_dict[max_key]
            new_ret_dict[max_key] = max_value
            ret_dict.pop(max_key)
            looper += 1
        return new_ret_dict


print(get_5common(line))
