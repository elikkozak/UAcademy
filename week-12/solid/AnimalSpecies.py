from AnimalGroups import *

DEFAULT_DURATION_OF_PREGNANCY_IN_DAYS = 110
DEFAULT_LOWEST_DEPTH_IN_METERS = 10
DEFAULT_WINGSPAN = 10

LION_FOOD_QUANTITY_IN_KG = 6
WHALE_FOOD_QUANTITY_IN_KG = 2000
CLOWN_FISH_FOOD_QUANTITY_IN_KG = 0.003
GOOSE_FOOD_QUANTITY_IN_KG = 1
OWL_FOOD_QUANTITY_IN_KG = 0.1


class Lion(Mammals):
    def __init__(self, name):
        Mammals.__init__(self, name, "Lion", "Meat",
                         LION_FOOD_QUANTITY_IN_KG, DEFAULT_DURATION_OF_PREGNANCY_IN_DAYS)


class Whale(SeaMammal):
    def __init__(self, name):
        super().__init__(
            name, "Whale", "Plankton", WHALE_FOOD_QUANTITY_IN_KG, DEFAULT_DURATION_OF_PREGNANCY_IN_DAYS, DEFAULT_LOWEST_DEPTH_IN_METERS)


class ClownFish(SeaCreatures):
    def __init__(self, name):
        super().__init__(name, "Clown-Fish", "Algae",
                         CLOWN_FISH_FOOD_QUANTITY_IN_KG, DEFAULT_LOWEST_DEPTH_IN_METERS)


class Goose(SeaBird):
    def __init__(self, name):
        super().__init__(name,  "Goose", "Seeds", GOOSE_FOOD_QUANTITY_IN_KG,
                         DEFAULT_WINGSPAN, DEFAULT_LOWEST_DEPTH_IN_METERS)


class Owl(Birds):
    def __init__(self, name):
        super().__init__(name, "Owl", "Worms", OWL_FOOD_QUANTITY_IN_KG, DEFAULT_WINGSPAN)


