// Redux에서 관리할 초기 상태
const initialState = {
  userID: null,
  accessToken: null
};

// 액션 타입
const SET_USER = 'SET_USER';

// 액션 생성자
export const setUser = (userID, accessToken) => ({
  type: SET_USER,
  payload: { userID, accessToken }
});

// 리듀서
export default function user(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
}
