import store
import uvicorn
from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles

app = FastAPI()


@app.get("/")
async def root():
    return {"message:hello world"}


# EX 1

@app.get("/sanity")
async def root_sage():
    return {"Server is up and running smoothly"}

app.mount("/static", StaticFiles(directory="exercises/static"), name="static")

# EX 2


@app.get("/items/{item_name}")
def get_item_price(item_name):
    for item in store.store:
        if item["name"] == item_name:
            return {f"price: {item['price']}"}
    return {"price: None"}

# EX 4


@app.get("/buy-item/{item_name}")
def buy_item(item_name):
    for item in store.store:
        if item["name"] == item_name:
            if item["inventory"] > 0:
                item["inventory"] -= 1
                return {"success" : {"inventory": f"{item['inventory']}",  "price": f"{item['price']}"}},
                # return {f'{item_name} amount left is {item["inventory"]}'}
            else:
                return {"failed":"item not in stock"}
    return {"failed":"item not found"}


# EX 6
@app.get("/sale/")
def sale_discount(admin  = False):
    if admin == "true":

        for item in store.store:
            if item["inventory"] > 10:
                item["price"] *= 0.5
        return store.store

# EXTENSION 1
@app.get("/buy/{item_name}")
def get_item_price(item_name):
    for item in store.store:
        if item["name"] == item_name:
            return {"price":f'{item["price"]}'}
    

if __name__ == "__main__":
    uvicorn.run("server:app", host="0.0.0.0", port=8000, reload=True)
