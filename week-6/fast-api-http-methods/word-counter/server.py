from fastapi import FastAPI, Response, status
from fastapi import Request
from fastapi import Body
import requests

import uvicorn

app = FastAPI()

# Exercise 1


@app.get('/')
def root():
    return {"message": "Server is up and running"}


@app.get('/sanity')
def check_routing():
    return "Working"

# Exercise 2


word_counter = {}


@app.get('/{word}')
def get_word_count(word):
    if word in word_counter:
        return {"count": f"{word_counter[word]}"}
    else:
        return {"count": 0}

#  Exercise 3


@app.post('/add-word')
async def add_word(request: Request):
    dict_result = await request.json()
    word = dict_result["word"]
    word_counter[word] = word_counter.get(word, 0)+1
    return {"text": f"Added {word}", "currentCount": f"{word_counter[word]}"}

# Exercise 4

@app.post('/add-sentence')
async def add_sentence(request: Request):
    dict_result = await request.json()
    sentence = dict_result["sentence"]
    word_list = sentence.split(" ")
    num_new_words, num_old_words = 0, 0
    for word in word_list:
        if word not in word_counter:
            num_new_words +=1
            word_counter[word] += 1
        else:
            num_old_words += 1
            word_counter[word] = 1
    return {"text": "Added {num_new_words} words, {num_old_words} already existed"}
        
# Exercise 5

@app.delete('/delete/{word}',status_code=200)
def delete_word_count(word,response: Response):
    if word in word_counter:
        word_counter.pop(word)
    else:
        response.status_code = status.HTTP_201_CREATED
        return "Error, word not found"
# Extension 1
import re

def clean_str(str):
    str = str.lower()
    my_regex = '[^a-z ]+'
    str = re.sub(my_regex, '', str)
    return str

# Extension 2
from collections import Counter

def get_high_freq(text,amount):
    line = text.split()
    return Counter(line).most_common(amount)
  

@app.get('/most-popular-word/')
def get_most_popular_word():
    c = Counter(word_counter)
    if c:
        most_common = get_high_freq(c,1)
        word, count = most_common
        return {"text": f"{word}", "count": f"{count}" }
    else:
        return "No words"

@app.get('/5-most-popular-word/')
def get_5_most_popular_word():
    c = Counter(word_counter)
    if c:
        most_common_5 = get_high_freq(c,5)
        body = []
        for word, count in most_common_5:
            body.append({word:count})
        return {"ranking": f"{body}" }
    else:
        return "No words"
       

if __name__ == "__main__":
    uvicorn.run("server:app", host="0.0.0.0", port=8000, reload=True)
