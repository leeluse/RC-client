// Redux에서 관리할 초기 상태
const initialSate ={
  user: {
    userID: null,
    userToken: null
  }
}

// 액션 타입
const SET_USER = 'SET_USER';
const SET_TOKEN = 'SET_TOKEN';
const REMOVE_USER = 'REMOVE_USER';

// 액션 생성자
export const getUser = ( userID ) => ({ 
  type: SET_USER,
  payload: userID
});

// 액션 생성자
export const getToken = ( userToken ) => ({ 
        type: SET_TOKEN,
        payload: userToken
});

export const removeToken = (  ) => ({ 
  type: REMOVE_USER,
});

export default function user(state = initialSate, action) {
  switch(action.type) {
    case SET_USER:
      return {
        ...state,
        user: {
          ...state.user,
          userID: action.payload,
          userToken: action.payload
        }
      }

    default:
      return state;
  }
}
