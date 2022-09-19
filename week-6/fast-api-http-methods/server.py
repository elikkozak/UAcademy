from fastapi import FastAPI
from fastapi import Request
from fastapi import Body

import uvicorn

app = FastAPI()
id_counter = 1
wonders = [
    {
        "ID": 1,
        "name": "The Great Pyramid",
        "location": "Giza"
    }
]


@app.get('/')
def root():
    return {"message": "Server is up and running"}


@app.get('/wonders/{id}')
def get_wonder_by_id(id):
    for wonder in wonders:
        if wonder["ID"] == int(id):
            return wonder["name"]
    return {"ERROR": "NO WONDER BY THIS ID"}


@app.post('/wonders')
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
