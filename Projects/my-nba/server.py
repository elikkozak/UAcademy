import json
from unicodedata import name
import requests
import uvicorn
from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles

app = FastAPI()

team_to_ids = {
    "lakers": "1610612747",
    "warriors": "1610612744",
    "heat": "1610612748",
    "suns": "1610612756"
}
@app.get("/")
def init():
    return "Hello World"

def get_player_name(player_data):
    return player_data["firstName"] + " " + player_data["lastName"]

def get_player_pos(player_data):
    return player_data.get("pos")

def get_player_jersey_num(player_data):
    return player_data.get("jersey")

def create_player_obj(player_data):
    return {
        "name":get_player_name(player_data),
        "pos":get_player_pos(player_data),
        "jersey":get_player_jersey_num(player_data)
    }


@app.get("/{team}/{year}")
def get_player_data(team,year):
    player_data_req = requests.get(f'http://data.nba.net/10s/prod/v1/{year}/players.json')
    players_data_list =  [create_player_obj(player_data) for player_data in player_data_req.json()["league"]["standard"]]
    return json.dumps(players_data_list)


if __name__ == "__main__":
    uvicorn.run("server:app", host="0.0.0.0", port=8000, reload=True)
