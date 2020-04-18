import _ from 'lodash';
import  {FETCH_STREAM, FETCH_STREAMS, CREATE_STREAM, DELETE_STREAM, EDIT_STREAM} from '../Actions/types';

export default (state= {}, action) => {
    switch(action.type) {
        case FETCH_STREAMS:
            //const animals = [{cat:'meaow', id: 1}, {dog:'bark', id:2}];
            //_.mapKeys(animals, 'id')
            //{"1":{"cat":"meaow","id":1},"2":{"dog":"bark","id":2}}
            //..._.mapkeys will create a new object thats get added into the overall object
            return {...state, ..._.mapKeys(action.payload, 'id')};
        case FETCH_STREAM:
            //id: action.paylaod. here id is the key with value action.payload
            return {...state, [action.payload.id]: action.payload};
        case CREATE_STREAM:
            return {...state, [action.payload.id]:action.payload};
        case EDIT_STREAM:
            return {...state, [action.payload.id]:action.payload};
            case DELETE_STREAM:
                return _.omit(state, action.payload);
        default:
            return state;
    };
};