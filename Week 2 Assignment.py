name = input("Please input your first name:\n")
name_lower = name.lower() # stores the user's name in lowercase for comparison purposes

""" #1
Purpose: To tell the user how awesome they are based on their name. 
Output: If the user is a Dylan or an Auslander, the program prints one of two messages to say they are awesome.
Otherwise, the program prints that the user is not awesome.
"""
if name_lower == "dylan":
    print("you're awesome")
elif name_lower == "auslander":
    print("that is a last name but you're awesome anyway")
else:
    print("you're NOT awesome")
print()

""" #2
Purpose: To tell the user the spelling of their name (in order).
Output: Prints out each letter of the user's name (in order) with a new line separating each one.
"""
print("Here is your name spelled out letter by letter:")
for letter in name:
    print(letter)
print()
    
""" #3
Purpose: Gives the user a count of the letters in their name.
Output: Prints the numbers being counted one by one (1, 2, 3...) followed by a total letter count.
"""
print("Now I will count the number of letters in your name.")
for i in range(len(name)):
    print(i + 1, end="")
    if (i != len(name) - 1): # Separates each number during the counting by a comma and a space.
        print(", ", end="")
    else: # Prevents a comma and space being printed for the last number during the count and gives the user their total letter count.
        print(". There are", i + 1, "letters in your name.")
print()
    
""" #4
Purpose: Uses a pass statement to allow for a work in progress function to exist without causing an error.
Output: N/A
"""
def WIP():
    pass
    
""" #5
Purpose: To give the user a reminder of whether or not they are awesome based on their name.
Output: In the case that the user is a Dylan or an Auslander, the program prints a message to say they are awesome. 
In any other case, the program prints that the user is awful.
"""
match name_lower:
    case "dylan" | "auslander":
        print("Just reminding you that you're awesome.")
    case _:
        print("Just reminding you that you're awful.")
print()

""" #6
Purpose: To compare 2 numbers (passed as parameters n1 and n2) to see which is greater.
Output: Returns the greater number.
"""
def higherNum(n1, n2):
    if n1 > n2:
        return n1
    else:
        return n2

print("Please enter 2 numbers to be compared and then multiplied together.")
num1 = int(input("Please input the first number:\n"))
num2 = int(input("Please input the second number:\n"))
print(higherNum(num1, num2), "is the higher number.")
print()

""" #7
Purpose: To multiply 2 numbers (passed as parameters a and b) together.
Output: Returns the product of parameters a and b.
"""
product = lambda a, b : a * b

print("Here are your 2 numbers multiplied together:")
print(product(num1, num2))