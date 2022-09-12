import datetime
from tokenize import Number

bday = input("Enter your birthday in DD-MM-YYYY format: ")
birthday_datetime = datetime.strptime(bday, "DD-MM-YYYY")
today = datetime.today()

print("Age: ", today.year - birthday_datetime.year)
birthday_datetime.year = today.year
if today > birthday_datetime:
    birthday_datetime += 1
print(birthday_datetime-today)
