def addition(a, b):
    return a + b

def subtraction(a, b):
    return a - b

def multiplication(a, b):
    return a * b

def division(a, b):
    if b == 0:
        return "Error: division by zero"
    return a / b

def power(a, b):
    return a ** b

def calculator():
    print("=== CALCULATOR ===")
    print("Available operations:")
    print("1. Addition (+)")
    print("2. Subtraction (-)")
    print("3. Multiplication (*)")
    print("4. Division (/)")
    print("5. Power (^)")
    print("6. Exit")
    
    while True:
        choice = input("\nChoose an operation (0-5): ")
        
        if choice == '0':
            print("Goodbye!")
            break
        
        if choice in ['1', '2', '3', '4', '5']:
            num1 = float(input("Enter the first number: "))
            num2 = float(input("Enter the second number: "))
            
            if choice == '1':
                print(f"Result: {num1} + {num2} = {addition(num1, num2)}")
            elif choice == '2':
                print(f"Result: {num1} - {num2} = {subtraction(num1, num2)}")
            elif choice == '3':
                print(f"Result: {num1} * {num2} = {multiplication(num1, num2)}")
            elif choice == '4':
                print(f"Result: {num1} / {num2} = {division(num1, num2)}")
            elif choice == '5':
                print(f"Result: {num1} ^ {num2} = {power(num1, num2)}")
        else:
            print("Invalid choice. Please try again.")

if __name__ == "__main__":
    calculator()