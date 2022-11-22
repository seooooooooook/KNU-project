import React, { useEffect } from 'react';
import { getAccessToken } from '../connector/testConn';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';

const Loading = () => {
    const location = useLocation();
    const { code } = queryString.parse(location.search);
    const reqAccesstoken =async()=>{
        if(typeof code === 'string') {
            const res = await getAccessToken(code);
            alert(res)
        }
    }

    useEffect(()=>{
        if(code) reqAccesstoken();
    },[code])
    return (
        <div>
            loading....
        </div>
    );
};

export default Loading;