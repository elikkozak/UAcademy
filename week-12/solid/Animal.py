class Animal:
    def __init__(self, name, species, food_type, food_quantity):
        self.name = name
        self.species = species
        self.food_type = food_type
        self.food_quantity = food_quantity

    def get_name(self):
        return self.name

    def get_species(self):
        return self.species

    def get_food_type(self):
        return self.food_type

    def get_food_quantity(self):
        return self.food_quantity



