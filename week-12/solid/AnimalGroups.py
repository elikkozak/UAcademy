from Animal import Animal


class Mammals(Animal):
    def __init__(self, name, species, food_type, food_quantity, duration_of_pregnancy):
        super().__init__(name, species, food_type, food_quantity)
        self.duration_of_pregnancy = duration_of_pregnancy


class SeaCreatures(Animal):
    def __init__(self, name, species, food_type, food_quantity, lowest_depth):
        super().__init__(
            name, species, food_type, food_quantity)
        self.lowest_depth = lowest_depth


class SeaMammal(Mammals):
    def __init__(self, name, species, food_type, food_quantity, duration_of_pregnancy, lowest_depth):
        super().__init__(name, species, food_type, food_quantity, duration_of_pregnancy)
        self.lowest_depth = lowest_depth


class Birds(Animal):
    def __init__(self, name, species, food_type, food_quantity, wing_span):
        super().__init__(name, species, food_type, food_quantity)
        self.wing_span = wing_span

class SeaBird(Birds):
    def __init__(self, name, species, food_type, food_quantity, wing_span, lowest_depth):
        super().__init__(name, species, food_type, food_quantity, wing_span)
        self.lowest_depth = lowest_depth