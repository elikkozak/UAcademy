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
            team = "lakers";
            year = "2020";
            let result = yield $.get(`http://localhost:8000/players?team=${team}&year=${year}`);
            return result;
        });
    }
    getFilteredData() {
        return __awaiter(this, void 0, void 0, function* () {
            let result = yield $.get(`http://localhost:8000//players/isBirthday`);
            return result;
        });
    }
}
