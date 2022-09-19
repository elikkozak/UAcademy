
import json
import requests
import store

money = 1000


def get_item(name):
    res = requests.get(f'http://localhost:8000/items/{name}')
    return res.json()

# print(get_item("chair"))



# def buy_item():
#     item_name = input("what item do you want to buy? ")
#     res = requests.get(f'http://localhost:8000/buy-item/{item_name}')
#     dict_result = res.json()[0]
#     if "success" in dict_result:
#         print(
#             f"Congratulations, you've just bought {item_name} for {dict_result['success']['price']}. There are {dict_result['success']['inventory']} left now in the store.")
#     else:
#         print(f"{dict_result['failed']}")


def buy_item():
    global money
    item_name = input("what item do you want to buy? ")
    res = requests.get(f'http://localhost:8000/buy/{item_name}')
    dict_result = res.json()
    if int(dict_result['price'])>money:
        print("GO AND GET A JOB")
    else:
        requests.get(f'http://localhost:8000/buy-item/{item_name}')
        money -= int(dict_result['price'])

print(money)
buy_item()
print(money)