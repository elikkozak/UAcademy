from fastapi import FastAPI
from fastapi import Request
from fastapi import Body

import uvicorn

app = FastAPI()
# id_counter = 1
# wonders = [
#     {
#         "ID": 1,
#         "name": "The Great Pyramid",
#         "location": "Giza"
#     }
# ]

# Exercise 1


@app.get('/')
def root():
    return {"message": "Server is up and running"}


@app.get('/sanity')
def check_routing(id):
    return "Working"

# Exercise 2

wordCounter = {}
@app.get('/{word}')
def get_word_count(word):
    if word in wordCounter:
        return {"count": f"{wordCounter[word]}"}
    else:
        return {"count": 0}

#  Exercise 3
       
async def create_wonder(request: Request):
    global id_counter
    id_counter += 1
    new_wonder = await request.json()
    new_wonder["ID"] = id_counter
    wonders.append(new_wonder)

    return "Created"

@app.put('/wonders/{id}')
async def update_wonder(id ,name = Body(...), location = Body(...)):
    for wonder in wonders:
        if wonder["ID"] == int(id):
            wonder["name"] = name
            wonder["location"]= location
            return "Updated"
    return "Not Found"

if __name__ == "__main__":
    uvicorn.run("server:app", host="0.0.0.0", port=8000, reload=True)
