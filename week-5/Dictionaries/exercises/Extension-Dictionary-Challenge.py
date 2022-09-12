def isPalindrome(user_input):
    if user_input == "":
        return True
    if user_input[0] == user_input[-1]:
        if len(user_input[1:-1]) < 2:
            return True
        else:
            return isPalindrome(input[1:-1])
    else:
        return False

LOWER_A_ASCII = 97
LOWER_Z_ASCII = 122

def isLower(user_input):
    for c in user_input:
        if not LOWER_A_ASCII <= ord(c) <= LOWER_Z_ASCII:
            return False
    return True

ZERO_ASCII = 48
NINE_ASCII = 57

def isDigit(user_input):
    for c in user_input:
        if not ZERO_ASCII <= ord(c) <= NINE_ASCII:
            return False
    return True

def isLong(user_input):
    return len(user_input) > 15

def isEmpty(user_input):
    return user_input == ""

def exit(_):
    return "Exited successfully"

user_input = input("Enter an input: ")
print("The available operations are:")
operations = {
    "Palindrome": "Check if the input is palindrome",
    "Lower": "Check if all characters in the input are lowercase",
    "Digit": "Check if all characters in the input are digits",
    "Long": "Check if the input length is longer than 15",
    "Empty": "Check if the input is empty",
    "Exit": "Exit successfully from the application"
}
for i, (k, v) in enumerate(operations.items()):
    print(f'{i+1} - {k}: {v}')
operation_num = input("Please enter the number of operation you choose: ")
operation_manager = {
    "1": isPalindrome,
    "2": isLower,
    "3": isDigit,
    "4": isLong,
    "5": isEmpty,
    "6": exit
}


answer_func = operation_manager.get(operation_num)
msg = answer_func(operation_num) if answer_func is not None else "Error illegal operation"
msg_format = 'Your answer is: ' if operation_num != "6" else '' 
print(f'{msg_format}{msg}')
