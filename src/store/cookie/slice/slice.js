import { createSlice } from '@reduxjs/toolkit';
import { Cookies } from 'react-cookie';

const cookies = new Cookies();

const cookie = createSlice({
    name: 'cookies',
    initialState: {
        user: cookies.get('user') || null,
    },
    reducers: {
        _setCookie: (state, action) => {
            const { name, value, options } = action.payload;
            cookies.set(name, value, options);
            state[name] = value;
        },
        _removeCookie: (state, action) => {
            const { name } = action.payload;
            cookies.remove(name);
            state[name] = null;
        },
    },
});

export const { _setCookie, _removeCookie } = cookie.actions;
export default cookie.reducer;
