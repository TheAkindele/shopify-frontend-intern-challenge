import axios from 'axios';
import * as types from "../types"
import { Dispatch } from "redux";

export const SearchMovie =  () => {
    return (keyword?: any) => (dispatch: Dispatch) => {
        dispatch({type: types.SEARCH_MOVIE_REQUEST})
        const proxyUrl = "https://limitless-mountain-31284.herokuapp.com/";
        axios.get(`${proxyUrl}http://www.omdbapi.com/?apikey=4a6c6b7c&s=${keyword}`)
        .then((response: any) => {
            const data = response?.data?.Search
            dispatch({
                type: types.SEARCH_MOVIE_SUCCESS,
                payload: {
                    searchResult: [...data],
                    keyword: keyword
                }
            })
        })  //utility.action // proxy

        .catch((err: any) => {
            dispatch({
                type: types.SEARCH_MOVIE_FAILURE,
                payload: err?.error
            })
        })
    }
}

export const NominateMovie = () => {
    return (movie?: any) => (dispatch: Dispatch) => {
        dispatch({type: types.NOMINATE_MOVIE, payload: movie})
    }
}

export const RemoveNominated = () => {
    return (movie?: any) => (dispatch: Dispatch) => {
        dispatch({type: types.REMOVE_NOMINATED, payload: movie})
    }
}

