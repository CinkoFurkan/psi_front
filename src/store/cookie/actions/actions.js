import store from "../../store";
import {_setCookie} from "../slice/slice";

export const setCookie = (data) => store.dispatch(_setCookie(data))