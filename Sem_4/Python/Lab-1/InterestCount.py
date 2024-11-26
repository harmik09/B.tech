# WAP to calculate simple interest


principal=float(input("Enter the principal amount:"))
rate=float(input("Enter the annual interest rate (in %):"))
time=float(input("Enter the time (in year):"))

# count simple intersest
simple_interest=(principal*rate*time)/100

print("The simple interest is: ", simple_interest)