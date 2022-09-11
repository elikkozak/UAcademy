
def get_list_element(my_list, index):
    try:
        print(my_list[index]) 
    except IndexError:
        print("index out of bounds")