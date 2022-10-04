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
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        if (e.target && (e.target.className === "player-card" || ((_a = e.target.parentElement) === null || _a === void 0 ? void 0 : _a.className) === "player-card")) {
            let playerCardElem = e.target.parentElement;
            let imageElem = playerCardElem === null || playerCardElem === void 0 ? void 0 : playerCardElem.querySelector("img");
            let imgSrc = (imageElem === null || imageElem === void 0 ? void 0 : imageElem.src) || "";
            renderer.renderLightBox(imgSrc);
        }
    });
});
$("body").on("click", "#lightBox", function (e) {
    var _a;
    if (e.target !== e.currentTarget)
        return;
    (_a = document.getElementById("lightBox")) === null || _a === void 0 ? void 0 : _a.classList.remove('active');
});
