import stateStatus from './state';
export const RESETSTATE = 'RESETSTATE';
export const SETPROFILESTATE = 'SETPROFILESTATE';

    
export default {
    [RESETSTATE](state){
        Object.assign(state, stateStatus);
    },
    [SETPROFILESTATE](state,result){
        state.profile_state = result;
    }
};