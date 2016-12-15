import fetch from 'isomorphic-fetch'

const ADD_GOOD = 'ADD_GOOD'
const ADD_GOOD_SUCCESS = 'ADD_GOOD_SUCCESS'

const GET_GOODS = 'GET_GOODS'
const GET_GOODS_SUCCESS = 'GET_GOODS_SUCCESS'

const GET_CATEGORIES = 'GET_CATEGORIES'
const GET_CATEGORIES_SUCCESS = 'GET_CATEGORIES_SUCCESS'

const SET_CATEGORY_SUCCESS = 'SET_CATEGORY_SUCCESS'

const CHANGE_GOOD = 'CHANGE_GOOD'
const CHANGE_GOOD_SUCCESS = 'CHANGE_GOOD_SUCCESS'

const DELETE_GOOD = 'DELETE_GOOD'
const DELETE_GOOD_SUCCESS = 'DELETE_GOOD_SUCCESS'

const ADD_CATEGORY = 'ADD_CATEGORY'
const ADD_CATEGORY_SUCCESS = 'ADD_CATEGORY_SUCCESS'

const DELETE_CATEGORY = 'DELETE_CATEGORY'
const DELETE_CATEGORY_SUCCESS = 'DELETE_CATEGORY_SUCCESS'

const initialState = {
  currentCategoryId: null,
  categories: [],
  goods: []
}

export default function api (state = initialState, action = {}) {
  switch(action.type) {
    
    case GET_GOODS:
      return state;

    case GET_GOODS_SUCCESS: 
      return {
        ...state,
        goods: action.goods
      };

    case ADD_GOOD_SUCCESS:
      let newGoods = state.goods.slice(0);
      newGoods.push(action.good);
      return {
        ...state,
        goods: newGoods
      };

    case ADD_CATEGORY_SUCCESS:
      let newCats = state.categories.slice(0);
      newCats.push(action.category);
      return {
        ...state,
        categories: newCats
      }

    case CHANGE_GOOD_SUCCESS:
      let changedGoods = state.goods.slice(0)
      let updGoods = changedGoods.filter((good) => {
        if (good._id === action.good._id) {
          return false
        } else { return true }
      });
      updGoods.push(action.good);
      return {
        ...state,
        goods: updGoods
      };

    case DELETE_GOOD_SUCCESS:
      let leftGoods = state.goods.slice(0)
      let left = leftGoods.filter((good) => {
        if (good._id === action.goodId) {
          return false
        } else { return true }
      });
      return {
        ...state,
        goods: left
      };

    case DELETE_CATEGORY_SUCCESS:
      let renewedGoods = state.categories.slice(0)
      let renewed = renewedGoods.forEach((good) => {
        if (good.categoryId === action.catId) {
          good.categoryId = null
        } 
      })
      let leftCats = state.categories.slice(0)
      let leftCategories = leftCats.filter((cat) => {
        if (cat._id === action.catId) {
          return false
        } else {return true}
      });
      let updCurId;
      if (state.currentCategoryId === action.catId) {
        updCurId = null
      } else if (state.currentCategoryId !== action.catId) {
        updCurId = state.currentCategoryId
      }
      return {
        ...state,
        categories: leftCategories,
        currentCategoryId: updCurId,
        goods: renewed
      };
        
    case GET_CATEGORIES:
      return state;
    
    case GET_CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: action.categories
      };  
    
    case SET_CATEGORY_SUCCESS:
      return {
        ...state,
        currentCategoryId: action.currentCategoryId
      }
    
    default:
      return state;
  }
}

export function getGoods() {
  return (dispatch, getState) => {
    dispatch({type: GET_GOODS, foo: "yo"});
    fetch('/api/goods', {method: 'get' })
      .then((response) =>  {
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        };
        return response.json();
      })
      .then((goodsResponse) => {
        dispatch({type: GET_GOODS_SUCCESS, goods: goodsResponse.goods })
      });
  }
}

export function getCategories() {
  return (dispatch, getState) => {
    dispatch({type: GET_CATEGORIES});
    fetch('/api/categories', {method: 'get'})
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        };
        return response.json();
      })
      .then((categoriesResponse) => {
        dispatch({type: GET_CATEGORIES_SUCCESS, categories: categoriesResponse.categories })
      });
  }
}

export function addGood(params) {
  return (dispatch, getState) => {
    dispatch({type:ADD_GOOD});
    let myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    fetch('/api/goods', {
      method: 'post',
      headers: myHeaders,
      mode: 'cors',
      cache: 'default',
      body: JSON.stringify({
        good: {name: params.newGoodName, purchasingPrice: params.newPurchased, retailPrice: params.newRetail, categoryId: params.newCatId}
      })
    })
    .then((response) => {
      if (response.status >=400) {
        throw new Error("Bad Response from server");
      };
      return response.json();
    })
    .then((goodResponse) => {
      dispatch({type: ADD_GOOD_SUCCESS, good: goodResponse.good}) 
    });
    
  }
}

export function addCategory(params) {
  return (dispatch, getState) => {
    dispatch({type:ADD_CATEGORY});
    let myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    fetch('/api/categories', {
      method: 'post',
      headers: myHeaders,
      mode: 'cors',
      cashe: 'default',
      body: JSON.stringify({
        category: {name: params.newCatName}
      })
    })
    .then((response) => {
      if (response.status >=400) {
        throw new Error("Bad response from server");
      };
      return response.json();
    })
    .then((catResponse) => {
      dispatch({type: ADD_CATEGORY_SUCCESS, category: catResponse.category})
    });
  } 
}

export function setCategory(params) {
  return (dispatch, getState) => {
    dispatch({type:SET_CATEGORY_SUCCESS, currentCategoryId: params.categoryId})     
  }
}

export function changeGood(params) {
  return (dispatch, getState) => {
    dispatch({type:CHANGE_GOOD});
    let myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    fetch('/api/goods/'+params.updGoodId, {
      method: 'put',
      headers: myHeaders,
      mode: 'cors',
      cashe: 'default',
      body: JSON.stringify({
        good: {
          name: params.updGoodName, 
          purchasingPrice: params.updPurchasingPrice, 
          retailPrice: params.updRetailPrice, 
          categoryId: params.updCatId}
      })
    })
    .then((response) => {
      if (response.status >=400) {
        throw new Error("Bad response from server");
      };
      return response.json();
    })
    .then((updatedGoodResponse) => {
      dispatch({type:CHANGE_GOOD_SUCCESS, good: updatedGoodResponse.good})
    });
  }
}

export function deleteGood(params) {
  return (dispatch, getState) => {
    dispatch({type:DELETE_GOOD});
    fetch('/api/goods/'+params.delGoodId, {
      method: 'delete'
    }).then((response) => {
      if (response.status >=400) {
        throw new Error('Bad response from server');
      };
      return true;
    })
    .then(() => {
      dispatch({type:DELETE_GOOD_SUCCESS, goodId: params.delGoodId})
    });
  }
}

export function deleteCategory(params) {
  return (dispatch, getState) => {
    dispatch({type:DELETE_CATEGORY});
    fetch('/api/categories/'+params.delCatId, {
      method: 'delete'
    }).then((response) => {
        if (response.status >=400) {
          throw new Error('Bad response from server');
        };
        return true;
    })
    .then(() => {
      dispatch({type:DELETE_CATEGORY_SUCCESS, catId: params.delCatId})
    })
  }
}








