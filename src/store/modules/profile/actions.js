import * as mutation from './mutations.js';
import axios from 'axios'

export default {
    resetState({commit}){
        commit(mutation.RESETSTATE);
    },
    setProfileState({commit}, data){
        commit(mutation.SETPROFILESTATE, data);
    },
};
