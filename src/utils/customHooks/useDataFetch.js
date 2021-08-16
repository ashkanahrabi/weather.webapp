import {useState, useEffect, useReducer} from 'react';
import axios from "axios";

const dataFetchReducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_INIT':
            return {
                ...state,
                isLoading: true,
                isError: false,
                id: action.id
            };
        case 'FETCH_SUCCESS':
            return {
                ...state,
                isLoading: false,
                isError: false,
                data: action.payload,
            };
        case 'FETCH_FAILURE':
            return {
                ...state,
                isLoading: false,
                isError: true,
                data: action.payload
            };
        default:
            throw new Error();
    }
};
const baseApiEndpoint = process.env.REACT_APP_API_ENDPOINT;

export const useDataFetch = (initialParams) => {
    const [params, setParams] = useState(initialParams); // {method, url, data}
    const [state, dispatch] = useReducer(dataFetchReducer, {
        isLoading: false,
        isError: false,
        data: initialParams && initialParams.data
    });
    useEffect(() => {
        if(params){
            const fetchData = async () => {
                dispatch({ type: 'FETCH_INIT', id: params.id });
                await axios[params.method.toLowerCase()](baseApiEndpoint + params.url, params.data)
                    .then(result => {
                        dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
                    })
                    .catch(err => {
                        dispatch({ type: 'FETCH_FAILURE', payload: err});
                    });
            };
            fetchData();
        }
    }, [params]);

    return [state, setParams];
};
