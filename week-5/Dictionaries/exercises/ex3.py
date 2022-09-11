country_populations = {}
country_populations["Ghana"] = 28
country_populations["Brazil"] = 209
country_populations["Mongolia"] = 3

country = "Brazil"

print(
    f'{country} is a {"big" if country_populations[country] >= 50 else "small"} country')
