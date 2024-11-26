# WAP to print Multiplication table of given number

n=int(input("Enter number:"))

print("Table:")
# loop to print table
for i in range(1,11):
    print(n,"X",i,"=",(n*i))

