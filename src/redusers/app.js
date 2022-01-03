import { SET_CHANNEL, REMOVE_CHANNEL, IS_LOADING, SET_ERROR, SET_SUCCESS, SET_CHANNELS } from "../actions/actionType"

const initialState = {
    channels: {},
    isLoading: false,
    success: false,
    errorMessage: '',
    channel: {}
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_CHANNELS: {
            return {
                ...state,
                channels: { ...state?.channels, ...payload }
            }
        }
        case REMOVE_CHANNEL: {
            return {
                ...state,
                channels: { ...payload }
            }
        }
        case SET_ERROR: {
            return {
                ...state,
                errorMessage: payload
            }
        }
        case IS_LOADING: {
            return {
                ...state,
                isLoading: payload
            }
        }
        case SET_SUCCESS: {
            return {
                ...state,
                success: payload
            }
        }
        case SET_CHANNEL: {
            return {
                ...state,
                channel: payload
            }
        }

        default: {
            return state;
        }
    }
}