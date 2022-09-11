# Spot Check 1

chr(ord("M"))  # M
ord(chr(22))  # 22
chr(ord("4") + 3)  # 7


# Unicode Table

for num in range(200, 1001):
    print(chr(num))


def print_unicode_range(start, end, step=1):
    if (start < end):
        for num in range(start, end, step):
            print(f"{num}: {chr(num)}")
