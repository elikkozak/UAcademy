class FoodSupply:
    def __init__(self):
        self.food_supply={}

    def get_food_supply(self):
        return self.food_supply

    def get_food_amount(self,food_name):
        return self.food_supply.get(food_name,0)

    def set_food_amount(self,food_name,amount):
        self.food_supply[food_name] = amount

    def dec_food_item_by_amount(self,food_name,amount):
        self.food_supply[food_name] -= amount
        