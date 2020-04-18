import streams from '../apis/streams';
import history from '../history';
import { SIGN_IN, SIGN_OUT, CREATE_STREAM, FETCH_STREAMS, FETCH_STREAM, DELETE_STREAM, EDIT_STREAM} from './types';

// userid is from googleauth 
export const signIn = (userId) => {
    return {
        type: SIGN_IN,
        payload: userId
    };
};

export const signOut = () => {
    return {
        type: SIGN_OUT
    };
};

export const createStream = (formValues) => {
    return async (dispatch, getState) => {
        // making api call
        //userid is from auth object in the state.
        const { userId } = getState().auth;
        const response = await streams.post('/streams', {...formValues, userId});
        dispatch({type: CREATE_STREAM, payload: response.data});
        // push is to navigate the user around. once the user creates the stream and submits it, the page will redirect to list of streams(home page).
        history.push('/');
    };
};

export const fetchStreams = () => {
    return async (dispatch) => {
        // making api call
        const response = await streams.get('/streams');
        dispatch({type: FETCH_STREAMS, payload: response.data});
    };
};

export const fetchStream = (id) => {
    return async (dispatch) => {
        // making api call
        const response = await streams.get(`/streams/${id}`);
        dispatch({type: FETCH_STREAM, payload: response.data});
    };
};

export const editStream = (id, formValues) => {
    return async (dispatch) => {
        // making api call
        const response = await streams.patch(`/streams/${id}`, formValues);
        dispatch({type: EDIT_STREAM, payload: response.data});
        history.push('/');
    };
};

export const deleteStream = (id) => {
    return async (dispatch) => {
        // making api call
        await streams.delete(`/streams/${id}`);
        //just to delete the id. so payload is set to id
        dispatch({type: DELETE_STREAM, payload: id});
        history.push('/');
    };
};