"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class dataModule {
    getData(team, year) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // team = "lakers"
                // year = "2020"
                let result = yield $.get(`http://localhost:8040/players?team=${team}&year=${year}`);
                return result;
            }
            catch (error) {
                return { "err": error };
            }
        });
    }
    getFilteredData() {
        return __awaiter(this, void 0, void 0, function* () {
            let result = yield $.get(`http://localhost:8040/players/isBirthday`);
            return result;
        });
    }
    getStatsData(f_name, l_name) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = yield $.get(`http://localhost:8040/players/stats?l_name=${l_name}&f_name=${f_name}`);
            return result;
        });
    }
    addPlayerToDreamTeam(playerObj) {
        $.post("http://localhost:8040/dreamTeam", playerObj);
    }
    removePlayerFromDreamTeam(playerObj) {
        return $.ajax({
            url: `/dreamTeam`,
            method: "DELETE",
            data: playerObj
        });
    }
    getDreamTeam() {
        return __awaiter(this, void 0, void 0, function* () {
            let result = yield $.get(`http://localhost:8040/dreamTeam`);
            return result;
        });
    }
}
