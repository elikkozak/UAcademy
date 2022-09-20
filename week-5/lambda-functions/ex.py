import json

with open("pokemon.json") as pokemon_file:
    pokemon_data = json.load(pokemon_file)
# EX 1
pokemon_data = list(map(lambda poke: {"id": poke["id"],
                                      "name": poke["name"], "type": poke["type"], "weight": poke["weight"],
                                      "height": poke["height"], "weaknesses": poke["weaknesses"]}, pokemon_data))
print(pokemon_data[0])

# EX 2
pokemon_names = list(map(lambda poke: poke["name"], pokemon_data))
print(pokemon_names)

# EX 3
heavy_pokemons = list(filter(lambda poke: poke["weight"] > 100, pokemon_data))
print(len(heavy_pokemons))

# EX 4

weak_against_water_pokemon = list(map(lambda poke: poke["name"], list(
    filter(lambda poke: "Water" in poke["weaknesses"], pokemon_data))))
print(weak_against_water_pokemon)
res = ['Charmander', 'Charmeleon', 'Charizard', 'Sandshrew', 'Sandslash', 'Nidoqueen', 'Nidoking', 'Vulpix', 'Ninetales', 'Diglett', 'Dugtrio', 'Growlithe', 'Arcanine',
       'Geodude', 'Graveler', 'Golem', 'Ponyta', 'Rapidash', 'Magnemite', 'Magneton', 'Onix', 'Cubone', 'Marowak', 'Rhyhorn', 'Rhydon', 'Magmar', 'Flareon', 'Aerodactyl', 'Moltres']
print(res == weak_against_water_pokemon)


# One liner EX 4

print([poke["name"] for poke in pokemon_data if "Water" in poke["weaknesses"]])


# Sum of Squares
numbers = [2, 3, 55, 4, 6, 8, 43, 10]

even_nums = list(filter(lambda num: num % 2 == 0,numbers))
squared_even_nums= list(map(lambda num: num ** 2,even_nums))
squared_even_nums.sort()
print(sum(squared_even_nums[-4::]))

dic={"id":1}
print(list(filter(lambda x:x[0],dic)))