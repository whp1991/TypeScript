//// [tests/cases/compiler/importHelpersES6.ts] ////

//// [a.ts]
declare var dec: any;
@dec export class A {
    #x: number = 1;
    async f() { this.#x = await this.#x; }
}

const o = { a: 1 };
const y = { ...o };

//// [tslib.d.ts]
export declare function __extends(d: Function, b: Function): void;
export declare function __decorate(decorators: Function[], target: any, key?: string | symbol, desc?: any): any;
export declare function __param(paramIndex: number, decorator: Function): Function;
export declare function __metadata(metadataKey: any, metadataValue: any): Function;
export declare function __awaiter(thisArg: any, _arguments: any, P: Function, generator: Function): any;
export declare function __classPrivateFieldGet(): any;
export declare function __classPrivateFieldSet(): any;

//// [a.js]
var _x;
import { __awaiter, __classPrivateFieldGet, __classPrivateFieldSet, __decorate } from "tslib";
let A = class A {
    constructor() {
        _x.set(this, 1);
    }
    f() {
        return __awaiter(this, void 0, void 0, function* () { __classPrivateFieldSet(this, _x, yield __classPrivateFieldGet(this, _x)); });
    }
};
_x = new WeakMap();
A = __decorate([
    dec
], A);
export { A };
const o = { a: 1 };
const y = Object.assign({}, o);
