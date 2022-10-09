import json
from pydantic import Json
import requests
import uvicorn
from fastapi import FastAPI, Request
from fastapi.encoders import jsonable_encoder


from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse


app = FastAPI()

app.mount("/client/build", StaticFiles(directory="client/build"), name="static")


@app.get('/')
def root():
    return FileResponse('./client/build/index.html')


dream_team_players = []

data_holder = []
is_data_init = False

team_to_ids = {
    "lakers": "1610612747",
    "warriors": "1610612744",
    "heat": "1610612748",
    "suns": "1610612756"
}


def get_player_name(player_data):
    return player_data["lastName"] + " " + player_data["firstName"]


def get_player_pos(player_data):
    return player_data.get("pos")


def get_player_jersey_num(player_data):
    return player_data.get("jersey")


def create_player_obj(player_data):
    name = get_player_name(player_data)
    l_name, f_name = name.split()
    return {

        "name": name,
        "pos": get_player_pos(player_data),
        "jersey": get_player_jersey_num(player_data),
        "img": f'https://nba-players.herokuapp.com/players/{l_name}/{f_name}'
    }


@app.get("/players")
def get_player_data(team, year):
    global data_holder, is_data_init, dream_team_players
    player_data_req = requests.get(
        f'http://data.nba.net/10s/prod/v1/{year}/players.json')
    filtered_data = list(filter(
        lambda player_data: player_data["teamId"] == team_to_ids[team], player_data_req.json()["league"]["standard"]))
    data_holder = filtered_data
    is_data_init = True
    players_data_list = [create_player_obj(
        player_data) for player_data in filtered_data]
    # dream_team_players = players_data_list[:5]
    return players_data_list


@app.get("/players/isBirthday")
def get_player_with_birthday():
    if not is_data_init:
        return []
    filtered_data = list(
        filter(lambda player_data: player_data["dateOfBirthUTC"] != "", data_holder))
    players_data_list = [create_player_obj(
        player_data) for player_data in filtered_data]
    return players_data_list


@app.get("/players/stats")
def get_player_stats(l_name, f_name):
    player_stats_req = requests.get(
        f'https://nba-players.herokuapp.com/players-stats/{l_name}/{f_name}')

    return player_stats_req.json()


@app.get("/dreamTeam")
def get_dream_team():
    return dream_team_players


@app.post("/dreamTeam")
async def add_player_to_dream_team(request: Request):
    global dream_team_players
    da = await request.form()
    da = jsonable_encoder(da)
    dream_team_players.append(da)
    # return dream_team_players


@app.delete("/dreamTeam")
async def remove_player_from_dream_team(request: Request):
    global dream_team_players
    da = await request.form()
    da = jsonable_encoder(da)
    dream_team_players = list(
        filter(lambda player: player["name"] != da["name"], dream_team_players))


if __name__ == "__main__":
    uvicorn.run("server:app", host="0.0.0.0", port=8040, reload=True)
