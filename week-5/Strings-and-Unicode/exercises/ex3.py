def get_word_value(word):
    sum = 0
    for char in word:
        sum += ord(char) - (ord('a')-1)
    return sum


print(get_word_value("day"))
