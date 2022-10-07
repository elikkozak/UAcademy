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
const getTeamButton = $("#get-team-btn");
const filterTeamButton = $("#filter-team-btn");
const lightBox = $("#lightBox");
let getYearInput = $("#input-year").get(0);
const getTeamInput = $("#input-team").get(0);
const dataModuleGetter = new dataModule();
const renderer = new viewModule();
getTeamButton.on("click", function () {
    return __awaiter(this, void 0, void 0, function* () {
        dataModuleGetter.getData(getTeamInput.value, getYearInput.value).then((result) => {
            renderer.renderPage(result);
        });
    });
});
filterTeamButton.on("click", function () {
    return __awaiter(this, void 0, void 0, function* () {
        dataModuleGetter.getFilteredData().then((result) => {
            renderer.renderPage(result);
        });
    });
});
$(".players-cards").on("click", ".player-card", function (e) {
    return __awaiter(this, void 0, void 0, function* () {
        if (e.target && e.target.parentElement.className === "player-card") {
            const playerName = e.target.parentElement.children[0].textContent.toLowerCase();
            const [l_name, f_name] = playerName.split(" ");
            dataModuleGetter.getStatsData(f_name, l_name).then((result) => {
                result["img"] = e.target.parentElement.children[2].src;
                renderer.renderLightBox(result);
            });
        }
    });
});
$("body").on("click", "#lightBox", function (e) {
    if (e.target !== e.currentTarget)
        return;
    lightBox.removeClass('active');
});
