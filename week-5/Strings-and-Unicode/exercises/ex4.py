def encode(msg, n):
    return "".join([chr((ord(char) + n - ord("A")) % 26 + ord("A")) for char in msg])


print(encode("ABXYZ", 3))   # "DEABC"

def decode(msg, n):
    return encode(msg,-n)

print(decode(encode("ABXYZ", 3),3))   # "DEABC"
