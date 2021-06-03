import "../lib/luk.js";
import { int } from "./basic/int.js";

type primitiveTypes = "falsy" | "bool" | "tinyint" | "int" | "bigint" | "any";

export const primitiveValue: any = function (type: primitiveTypes | "any") {

    const types: primitiveTypes[] = ["bool", "tinyint", "int", "bigint", "falsy"];

    if (type === "any") type = types.pick()[0];

    let res;

    switch (type) {
        case "bool":
            res = [true, false].pick()[0];
            break;
        case "tinyint":
            res = int(256);
            break;
        case "int":
            res = int(65526);
            break;
        case "bigint":
            res = int(4294967296);
            break;
        case "falsy":
            res = [null, NaN].pick()[0];
            break;
        default:
            res = primitiveValue(types.pick()[0]);
            break;
    }

    return res;

};