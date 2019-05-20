import * as mutation from './mutations.js';
import axios from 'axios'

export default {
    resetState({commit}){
        commit(mutation.RESETSTATE);
    },

    submit_userInfo({commit},data){
        commit(mutation.SUBMIT_USERINFO,data);
    },

    submit_userEng({commit},data){
        commit(mutation.SUBMIT_USERENG,data);
    },

    submit_userGrade({commit},data){
        commit(mutation.SUBMIT_USERGRADE,data);
    },

    submit_SW({commit},data){
        commit(mutation.SUBMIT_USERSW,data);
    },

    submit_ALL({commit},data){
        console.log(data)
        axios.post('http://api.ajou-internsheep.co/std/mypage/resume',{req : data}).then((response) => {
                   
        })
    },

    setApplyState({commit}, data){
        commit(mutation.SETAPPLYSTATE, data);
    },
    
};
