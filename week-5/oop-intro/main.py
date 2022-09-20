#  Spot Check 1

# class Restaurant:
#     def __init__(self, name, ratings, is_vegetarian):
#         self.name = name
#         self.ratings = ratings
#         self.is_vegetarian = is_vegetarian


# r1 = Restaurant("Zoozaazo", 4, False)
# r2 = Restaurant("Top La Pompei", 3, False)
# r3 = Restaurant("El Viego", 5, True)


# print(r3.ratings)


# Spot Check 2

class Restaurant:
    def __init__(self, name, ratings, is_vegetarian):
        self.name = name
        self.ratings = ratings
        self.is_vegetarian = is_vegetarian

    def get_menu(self):
        print(f'{"We have meat" if not self.is_vegetarian else "We have vegetables"}')


r1 = Restaurant("Zoozaazo", 4, False)
r2 = Restaurant("Top La Pompei", 3, False)
r3 = Restaurant("El Viego", 5, True)

r1.get_menu()
r3.get_menu()
