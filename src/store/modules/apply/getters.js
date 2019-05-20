export const getUserInfo = (state, getters) => {
    /*
    스토어에 저장되어있는 UserInfo
    */
    return state.userInfo;
}
export const getUserEng = (state, getters) => {
    /*
    스토어에 저장되어있는 UserInfo
    */
    return state.userEng;
}
export const getUserGrade = (state, getters) => {
    /*
    스토어에 저장되어있는 UserInfo
    */
    return state.userGrade;
}
export const getUserSW = (state, getters) => {
    /*
    스토어에 저장되어있는 UserInfo
    */
    return state.userSW;
}
  
  export default {
    getUserInfo,
    getUserEng,
    getUserGrade,
    getUserSW
  };