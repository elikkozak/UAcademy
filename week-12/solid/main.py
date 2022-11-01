from AnimalSpecies import *
from Zoo import Zoo

simba = Lion("Simba")
nala = Lion("Nala")
willy = Whale("Willy")
akka = Goose("Akka")
hedwig = Owl("Hedwig")
nemo = ClownFish("Nemo")
marlin = ClownFish("Marlin")


zoo_animals = [simba,nala,willy,akka,hedwig,nemo,marlin]

my_zoo = Zoo(zoo_animals)
my_zoo.set_defualt_amount_of_food_for_two_weeks()
my_zoo.feed_all_animals()