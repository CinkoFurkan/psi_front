import store from "../../store";
import {_setDecrementLoading, _setIncrementLoading} from "../slice/slice";

export const setIncrementLoading = () => store.dispatch(_setIncrementLoading())
export const setDecrementLoading = () => store.dispatch(_setDecrementLoading())