def max_arguments():
    def count_args(*args):
        return len(args)
    return count_args

func = max_arguments()
print(func())           # 0
print(func(1,2,3,7))    # 4
print(func(9,2))        # 4
print(func(1,2,3,4,5))  # 5 