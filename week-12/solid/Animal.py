class Animal:
    def __init__(self, name, species, food_type, daily_food_quantity):
        self.name = name
        self.species = species
        self.food_type = food_type
        self.daily_food_quantity = daily_food_quantity

    def get_name(self):
        return self.name

    def get_species(self):
        return self.species

    def get_food_type(self):
        return self.food_type

    def get_food_quantity(self):
        return self.daily_food_quantity

    def eat(self):
        print(
            f"{self.name} the {self.species} is eating {self.daily_food_quantity}KG of {self.food_type}.")

    def set_food_type(self, food_type):
        self.food_type = food_type

    def set_food_quantity(self, daily_food_quantity):
        self.daily_food_quantity = daily_food_quantity

    def __str__(self):
        return f"Hi, I am {self.name} the {self.species}."
