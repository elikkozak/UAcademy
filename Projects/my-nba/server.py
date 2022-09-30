import json
import requests
import uvicorn
from fastapi import FastAPI

from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse


app = FastAPI()

app.mount("/client/build", StaticFiles(directory="client/build"), name="static")

@app.get('/')
def root():
    return FileResponse('./client/build/index.html')

data_holder = []
is_data_init = False

team_to_ids = {
    "lakers": "1610612747",
    "warriors": "1610612744",
    "heat": "1610612748",
    "suns": "1610612756"
}

def get_player_name(player_data):
    return player_data["firstName"] + " " + player_data["lastName"]

def get_player_pos(player_data):
    return player_data.get("pos")

def get_player_jersey_num(player_data):
    return player_data.get("jersey")

def create_player_obj(player_data):
    name = get_player_name(player_data)
    f_name,l_name = name.split()
    return {

        "name":name,
        "pos":get_player_pos(player_data),
        "jersey":get_player_jersey_num(player_data),
        "img":f'https://nba-players.herokuapp.com/players/{l_name}/{f_name}'
    }


@app.get("/players")
def get_player_data(team,year):
    player_data_req = requests.get(f'http://data.nba.net/10s/prod/v1/{year}/players.json')
    filtered_data = list(filter(lambda player_data: player_data["teamId"] == team_to_ids[team],player_data_req.json()["league"]["standard"]))
    data_holder = filtered_data
    is_data_init = True
    players_data_list =  [create_player_obj(player_data) for player_data in filtered_data]
   
    return players_data_list

@app.get("/players/isBirthday")
def get_player_with_birthday():
    if not is_data_init:
        return []
    filtered_data = list(filter(lambda player_data: player_data["dateOfBirthUTC"] != "",data_holder))
    players_data_list =  [create_player_obj(player_data) for player_data in filtered_data]
    return players_data_list


if __name__ == "__main__":
    uvicorn.run("server:app", host="0.0.0.0", port=8000, reload=True)
