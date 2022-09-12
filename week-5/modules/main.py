import math
print(math.floor(-5.3))
print(math.ceil(math.tan(16.8)))


def calc_area_of_polygon(num_of_sides, length_of_side):
    (num_of_sides * (length_of_side)**2)/(4 * math.tan(math.pi/num_of_sides))
