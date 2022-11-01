from AnimalSpecies import *
from Zoo import Zoo
TWO_WEEKS = 14


simba = Lion("Simba")
nala = Lion("Nala")
willy = Whale("Willy")
akka = Goose("Akka")
hedwig = Owl("Hedwig")
nemo = ClownFish("Nemo")
marlin = ClownFish("Marlin")


zoo_animals = [simba, nala, willy, akka, hedwig, nemo, marlin]

my_zoo = Zoo(zoo_animals)

print("\nIntroduction:\n")
my_zoo.get_details_zoo_animals()
for day in range(TWO_WEEKS):
    print("\nFeeding time:\n")
    my_zoo.feed_all_animals()
