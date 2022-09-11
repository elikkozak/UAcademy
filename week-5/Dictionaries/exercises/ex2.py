user_id = 3058
bonus_months = 3

user_months = {
    1552: 18,
    7021: 2,
    532: 12,
    3058: 9,
    1102: 4
}

print("Giving user " + str(user_id) + " an extra " + str(bonus_months) + " month bonus")

user_months[user_id] += bonus_months