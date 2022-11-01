from FoodSupply import FoodSupply
TWO_WEEKS = 14


class Zoo:

    def __init__(self, animals_list):
        self.animals_list = animals_list
        self.food_supply = FoodSupply()

    def feed_all_animals(self):
        for animal in self.animals_list:
            if self.food_supply.get_food_amount(animal.get_food_type()) < animal.get_food_quantity():
                print(f"Refilling {animal.get_food_type()}")
                self.food_supply[animal.get_food()]+=animal.get_quantity()
            self.food_supply.dec_food_item_by_amount(animal.get_food_type(),animal.get_food_quantity())
            animal.eat()
    def set_defualt_amount_of_food_for_two_weeks(self):
        for animal in self.animals_list:
            self.food_supply.set_food_amount(
                animal.get_food_type(), animal.get_food_quantity()*TWO_WEEKS)

