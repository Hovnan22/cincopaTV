import { AppStorage, CincopaServer } from "../services";
import { SET_CHANNELS, REMOVE_CHANNEL, IS_LOADING, SET_ERROR, SET_SUCCESS, SET_CHANNEL } from "./actionType";

export const PairChannel = (pair) => {
    return async (dispatch) => {
        try {
            const { data } = await CincopaServer.pairChannel(pair);
            if (data.success) {
                dispatch({
                    type: SET_ERROR,
                    payload: false,
                });
                dispatch({
                    type: SET_SUCCESS,
                    payload: true,
                });
                dispatch({
                    type: SET_CHANNELS,
                    payload: { [data.user.uuid]: data.user },
                });
                AppStorage.setUsers(data.user);
            } else {
                dispatch({
                    type: SET_ERROR,
                    payload: data.message,
                });
                dispatch({
                    type: SET_SUCCESS,
                    payload: false,
                });
            }

            dispatch({
                type: IS_LOADING,
                payload: false,
            });

        } catch (err) {
            console.log(err)
        }


    };
};

export const setUsers = (user) => {
    return ({
        type: SET_CHANNELS,
        payload: user,
    })
};

export const removeUsers = (channels) => {
    return ({
        type: REMOVE_CHANNEL,
        payload: channels,
    })
};

export const setIsLoading = (loading) => {
    return ({
        type: IS_LOADING,
        payload: loading,
    })
};

export const setSuccess = (loading) => {
    return ({
        type: SET_SUCCESS,
        payload: loading,
    })
};

export const setChannel = (uuid) => {
    return async (dispatch) => {
        try {
            const { data } = await CincopaServer.loadChannel(uuid);
            if (data.success) {
                dispatch({
                    type: SET_CHANNEL,
                    payload: data,
                });
            } else {
                dispatch({
                    type: SET_ERROR,
                    payload: data.message,
                });
            }
            dispatch({
                type: IS_LOADING,
                payload: false,
            });
        } catch (err) {
            console.log(err)
        }
    };
};

export const setError = (loading) => {
    return ({
        type: SET_ERROR,
        payload: loading,
    })
};
