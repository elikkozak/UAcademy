from Animal import Animal


class Mammals(Animal):
    def __init__(self, name, species, food_type, food_quantity, duration_of_pregnancy):
        super(Mammals, self).__init__(name, species, food_type, food_quantity)
        self.duration_of_pregnancy = duration_of_pregnancy
        print("I am Mammals")


class SeaCreatures(Animal):
    def __init__(self, name, species, food_type, food_quantity, lowest_depth):
        super(SeaCreatures, self).__init__(
            name, species, food_type, food_quantity)
        self.lowest_depth = lowest_depth
        print("I am SeaCreatures")


class Birds(Animal):
    def __init__(self, name, species, food_type, food_quantity, wing_span):
        super(Birds, self).__init__(name, species, food_type, food_quantity)
        self.wing_span = wing_span
        print("I am Birds")
