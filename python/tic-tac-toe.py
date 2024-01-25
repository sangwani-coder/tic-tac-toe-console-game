
def playing_field(field):
    for row in range(5):
        if row % 2 == 0:
            practicalRow = int(row/2)
            for column in range(5):
                if column % 2 == 0:
                    practicalColumn = int(column/2)
                    if column != 4:
                        print(field[practicalColumn][practicalRow], end="")
                    else:
                        print(field[practicalColumn][practicalRow])
                else:
                    print("|", end="")
        else:
            print("_____")
    return True

player =1
currentField = [[" ", " ", " "],[" ", " ", " "],[" ", " ", " "]]
playing_field(currentField)

while (True):
    print("players turn:", player)
    MoveRow = int(input("Enter Row number:\n"))
    MoveColumn = int(input("Enter Column number:\n"))
    if player == 1:
        if currentField[MoveColumn][MoveRow] == " ":
            currentField[MoveColumn][MoveRow] = "X"
            player = 2
    else:
        if currentField[MoveColumn][MoveRow] == " ":
            currentField[MoveColumn][MoveRow] = "O"
            player =1
    playing_field(currentField)