import axios from '../helpers/axios'
import { ADD_NEW_CATEGORY_FAILURE, ADD_NEW_CATEGORY_REQUEST, ADD_NEW_CATEGORY_SUCCESS, GET_ALL_CATEGORIES_FAILURE, GET_ALL_CATEGORIES_REQUEST, GET_ALL_CATEGORIES_SUCCESS } from './types';

export const getAllCategory = () => {
    return async dispatch => {
        dispatch({type: GET_ALL_CATEGORIES_REQUEST})
        const res = await axios.get('/category/getCategory');
        console.log(res.data);

        if(res.status === 200) {
            const {categoryList} = res.data;

            dispatch({
                type: GET_ALL_CATEGORIES_SUCCESS,
                payload: {categories: categoryList}
            })
        }else {
            dispatch({
                type: GET_ALL_CATEGORIES_FAILURE,
                payload: {error: res.data.error}
            })
        }
    }
}

