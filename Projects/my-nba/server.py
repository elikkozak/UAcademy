import json
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


@app.get("/{team}/{year}")
def get_player_data(team,year):
    player_data_dict = requests.get(f'http://data.nba.net/10s/prod/v1/{year}/players.json')
    return {get_player_name(player_data) for player_data in player_data_dict.json()["league"]["standard"]}


if __name__ == "__main__":
    uvicorn.run("server:app", host="0.0.0.0", port=8000, reload=True)
