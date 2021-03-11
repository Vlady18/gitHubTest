
export const FETCH_USERS = "FETCH_USERS";
export const FETCH_PROFILE = "FETCH_PROFILE";
export const TOOGLE_LOADER = "TOOGLE_LOADER";


const handlers = {
    [FETCH_USERS]: (state, {payload})=>({
        ...state,
        users: payload,
        loading: false,
    }),
    [FETCH_PROFILE]: (state, {payload})=>{
        return {
            ...state,
            loading: false,
            profileInfo: payload
        }
    },
    [TOOGLE_LOADER]: (state, {payload})=>({
        ...state,
        loading: payload,
    }),
    DEFAULT: state => state
}

export const usersReducer = (state, action)=>{
    const handle = handlers[action.type] || handlers['DEFAULT']
    return handle(state, action)
}
