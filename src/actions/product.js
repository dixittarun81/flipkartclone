import axios from '../helpers/axios'
import { GET_PRODUCTS_BY_SLUG } from './types';

export const getProductsBySlug = (slug) => {
    return async dispatch => {
        const res = await axios.get(`/product/${slug}`);
        if(res.status === 200) {
            dispatch({
                type: GET_PRODUCTS_BY_SLUG,
                payload: res.data
            })
        }else{
            //
        }
    }
}