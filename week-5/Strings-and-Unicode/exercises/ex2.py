def encode(msg):
    str_to_ret = ""
    for c in "".join(msg[:-1:]):
        str_to_ret += str(ord(c)) + " "
    str_to_ret += str(ord(msg[-1]))
    return str_to_ret


print(encode("Hello"))

def decode(msg):
    str_to_ret = ""
    for c in msg.split():
        str_to_ret += str(chr(int(c)))
    return str_to_ret

print(decode(encode("Hello")))        # "Hello" 

