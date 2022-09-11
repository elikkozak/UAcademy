line = "wee wee goo koo goo doo doo so go go yo yo yo yo fo zo"


# def get_5common(string):
#     ret_dict = {}
#     str_list = line.split(" ")
#     for word in str_list:
#         if word not in ret_dict:
#             ret_dict[word] = 1
#         else:
#             ret_dict[word] += 1
#     if (len(ret_dict.keys()) <= 5):
#         return ret_dict
#     else:
#         looper = 0
#         new_ret_dict = {}
#         while looper < 5:
#             max_key = list(ret_dict.keys())[0]
#             max_value = ret_dict[max_key]
#             for (k, v) in (ret_dict.items()):
#                 if (max_value < v):
#                     max_key = k
#                     max_value = ret_dict[max_key]
#             new_ret_dict[max_key] = max_value
#             ret_dict.pop(max_key)
#             looper += 1
#         return new_ret_dict


# print(get_5common(line))

import heapq

def get_5common(string):
    ret_lst = []
    str_to_freq ={} 
    for word in string.split(" "):
        if word not in str_to_freq:
            str_to_freq[word] = 1
        else:
            str_to_freq[word] += 1
    lst_freq_and_str = []
    for key in str_to_freq:
        lst_freq_and_str.append((-str_to_freq[key],key)) #heapq is min Heap so mul * -1 freq for Max heap
    heapq.heapify(lst_freq_and_str)                      #heap is sorted by first val
    for i in range(5):
        element = heapq.heappop(lst_freq_and_str)
        ret_lst.append({element[1]:-element[0]})        #return freq back to positive
    return ret_lst

print(get_5common(line))
