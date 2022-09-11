# Spot Check1

fridge = {
    "milk": 1,
    "bananas": 4,
    "juice": 2
}

message = "There is one bottle of milk left" if fridge[
    "milk"] == 1 else f'There are {fridge["milk"]} bottles of milk left'
print(message)


# Spot Check2

closet = {
    "shirts": {
        "blue": 4,
        "black": 1,
        "white": 13,
        "flamingo-pink": 2
    },
    "pants": {
        "shorts": {
            "purple": 1,
            "red": 2,
            "flamingo-pink": 3
        },
        "jeans": {
            "denim": 8,
            "organic": 1
        }
    },
    "jackets": {}
}

print(f'number of keys in closet dict is {len(closet.keys())}')  # 1
print(f'number of white shirts in closet is {closet["shirts"]["white"]}')
print(
    f'number of flamingo-pink shorts in closet is {closet["pants"]["shorts"]["flamingo-pink"]}')
closet["pants"]["jeans"]["organic"] = 7
closet["pants"]["jeans"]["denim"] -= 4

print("top" if closet["shirts"]["flamingo-pink"] >
      closet["pants"]["shorts"]["flamingo-pink"] else "bottom")

# Spot Check3


def get_squares_dictionary(number):
    ret_dict = {num: num**2 for num in range(1, number)}
    return ret_dict


print(get_squares_dictionary(5))
