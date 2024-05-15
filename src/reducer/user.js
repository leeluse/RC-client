// Redux에서 관리할 초기 상태
const initialSate ={
  accessToken: null
}

// 액션 타입
const SET_USER = 'SET_USER';

// 액션 생성자
export const setUser = ( token ) => ({ 
  type: SET_USER,
  payload: {accessToken: token}
});


export default function user(state = initialSate, action) {
  switch(action.type) {
    case SET_USER:
      return {
        ...action.payload
      }

    default:
      return state;
  }
}