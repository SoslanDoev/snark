X, S, N = list(map(int, input().split(" ")))

if N == 0:
    print("NO")
else:
    buns = list(map(int, input("").split(" ")))
    length = maxLength = 0
    buns.sort()
    for i in range(len(buns) - 1):
        if buns[i + 1] - buns[i] == 1:
            length += 1
            maxLength = max(length, maxLength)
        else:
            length = 1
    if maxLength >= S:
        print("NO")
    else:
        flag = True
        for i in range(X - S + 1):
            time = (X - i) / S
            count = 0
            for j in buns:
                if j > i + S:
                    break
                elif i < j <= i + S:
                    count += 1
            if S - count > time:
                print("YES")
                flag = False
                break
        if flag:
            print("NO")
# console.log("9~", main(10, 100, [1, 2, 3, 4, 5, 6, 7, 8, 9]))
# 10, 3, [7, 8]))