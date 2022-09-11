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

def isLower(user_input):
    for c in "".join(user_input):
        if not 97 <= ord(c) <= 122:
            return False
    return True

def isDigit(user_input):
    for c in "".join(user_input):
        if not 48<= ord(c) <=57:
            return False
    return True

def isLong(user_input):
    return len(user_input)>15

def isEmpty(user_input):
    return user_input == ""

def exit():
    return

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
def operation_manager(operation_num):
    if operation_num == "1":
        return isPalindrome(user_input)
    elif operation_num == "2":
        return isLower(user_input)
    elif operation_num == "3":
        return isDigit(user_input)
    elif operation_num == "4":
        return isLong(user_input)
    elif operation_num == "5":
        return isEmpty(user_input)
    else:
        return "Error illegal operation"

if operation_num == "6":
    print("Exited successfully")
else:
    print(f'Your answer is: {operation_manager(operation_num)}')
