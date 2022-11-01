from FoodSupply import FoodSupply
TWO_WEEKS = 14


class Zoo:

    def __init__(self, animals_list):
        self.animals_list = animals_list
        self.food_supply = FoodSupply()

    def feed_all_animals():
        pass

    def set_defualt_amount_of_food_for_two_weeks(self):
        for animal in self.animals_list:
            self.food_supply.set_food_amount(
                animal.get_food_type(), animal.get_food_quantity()*TWO_WEEKS)

