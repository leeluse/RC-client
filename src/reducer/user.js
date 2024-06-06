// Redux에서 관리할 초기 상태
const initialState = {
  userID: null,
  accessToken: null
};

// 액션 타입
const SET_USER = 'SET_USER';
const SET_ACCESS_TOKEN = 'SET_ACCESS_TOKEN';

// user 액션 생성자
export const setUser = (userID, accessToken) => ({
  type: SET_USER,
  payload: { userID, accessToken }
});
// accessToken 액션 생성자
export const setAccessToken = (accessToken) => ({
  type: SET_ACCESS_TOKEN,
  payload: accessToken
});


// 리듀서
export default function user(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        ...action.payload
      };
      case SET_ACCESS_TOKEN:
        return {
          ...state,
          accessToken: action.payload
        }
    default:
      return state;
  }
}
