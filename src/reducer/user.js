// Redux에서 관리할 초기 상태
const initialSate ={
  user: null
}

// 액션 타입
const SET_USER = 'SET_USER';
const REMOVE_USER = 'REMOVE_USER';

// 액션 생성자
export const setUser = ( userData ) => ({ 
  type: SET_USER,
  payload: userData
});

export const removeToken = (  ) => ({ 
  type: REMOVE_USER,
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