"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.warhammerFantasy = exports.starWarsD6 = exports.seventhSea = exports.dnd5 = exports.callOfCthulhu = void 0;
const schema_1 = require("./callOfCthulhu/schema");
const default_1 = __importDefault(require("./callOfCthulhu/default"));
const schema_2 = require("./dnd5/schema");
const default_2 = __importDefault(require("./dnd5/default"));
const schema_3 = require("./seventhSea/schema");
const default_3 = __importDefault(require("./seventhSea/default"));
const schema_4 = require("./starWarsD6/schema");
const default_4 = __importDefault(require("./starWarsD6/default"));
const schema_5 = require("./warhammerFantasy/schema");
const default_5 = __importDefault(require("./warhammerFantasy/default"));
__exportStar(require("./callOfCthulhu/types"), exports);
__exportStar(require("./dnd5/types"), exports);
__exportStar(require("./seventhSea/types"), exports);
__exportStar(require("./starWarsD6/types"), exports);
__exportStar(require("./warhammerFantasy/types"), exports);
exports.callOfCthulhu = {
    schema: schema_1.cocCharacterSchema,
    default: default_1.default
};
exports.dnd5 = {
    schema: schema_2.dnd5CharacterSchema,
    default: default_2.default
};
exports.seventhSea = {
    schema: schema_3.seventhSeaCharacterSchema,
    default: default_3.default
};
exports.starWarsD6 = {
    schema: schema_4.swd6CharacterSchema,
    default: default_4.default
};
exports.warhammerFantasy = {
    schema: schema_5.warhammerFantasyCharacterSchema,
    default: default_5.default
};
