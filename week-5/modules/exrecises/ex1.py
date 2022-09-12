import calendar

print(f'2010 is {"" if calendar.isleap(2010) else "not "}a leap year')
print(f'2020 is {"" if calendar.isleap(2020) else "not "}a leap year')

print(f'leap years there will be between 2020 - 2080 is: {len(list(filter(lambda num: (calendar.isleap(num)),range(2020,2081))))}')

wday = ['Monday', "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

print(wday[calendar.weekday(2028,3,14)])