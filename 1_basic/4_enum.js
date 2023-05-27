"use strict";
/**
 * Enum
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * API 요청을 한다.
 * 상태는 4가지 형태
 *
 * DONE - 요청완료상태
 * ERROR - 에러가 난 상태
 * LOADING - 로딩상태
 * INITIAL - 초기상태
 */
var State;
(function (State) {
    State[State["DONE"] = 0] = "DONE";
    State[State["LOADING"] = 1] = "LOADING";
    State[State["INITIAL"] = 2] = "INITIAL";
    State[State["ERROR"] = 3] = "ERROR";
})(State || (State = {}));
function runWork() {
    let state = State.INITIAL;
    try {
        state = State.LOADING;
        //작업을 한다.
        state = State.DONE;
    }
    catch (e) {
        state = State.ERROR;
    }
    finally {
        return state;
    }
}
runWork();
console.log(runWork() === State.DONE);
