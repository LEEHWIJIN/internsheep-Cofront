import stateStatus from './state';
export const RESETSTATE = 'RESETSTATE';
export const SUBMIT_USERINFO = 'SUBMIT_USERINFO';
export const SUBMIT_USERENG = 'SUBMIT_USERENG';
export const SUBMIT_USERGRADE = 'SUBMIT_USERGRADE';
export const SUBMIT_USERSW = 'SUBMIT_USERSW';
export const SETRESUMESTATE = 'SETRESUMESTATE';
export const SETAPPLYSTATE = 'SETAPPLYSTATE';

    
export default {
    [RESETSTATE](state){
        Object.assign(state, stateStatus);
    },
    [SUBMIT_USERINFO](state, result){
        state.userInfo = result;
    },
    [SUBMIT_USERENG](state, result){
        state.userEng = result;
    },
    [SUBMIT_USERGRADE](state, result){
        state.userGrade = result;
    },
    [SUBMIT_USERSW](state, result){
        state.userSW = result;
    },
    [SETRESUMESTATE](state,result){
        state.resume_state = result;
    },
    [SETAPPLYSTATE](state,result){
        state.apply_state = result;
    },
};