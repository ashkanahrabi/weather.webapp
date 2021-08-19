import {useState, useEffect, useReducer} from 'react';
import axios from "axios";

// the returns different values based on different phases
const dataFetchReducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_INIT':
            return {
                ...state,
                isLoading: true,
                isError: false
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

//useDataFetch is the custom hook which handles axios calls.
//it returns state which is the state and result of api call and setParams which makes it available to call several apis in a component
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
                dispatch({ type: 'FETCH_INIT'});
                await axios[params.method.toLowerCase()](params.url, params.data)
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
