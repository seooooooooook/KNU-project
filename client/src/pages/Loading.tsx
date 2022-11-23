import React, { useEffect } from 'react';
import { getAccessToken } from '../connector/testConn';
import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';

const Loading = () => {
    const location = useLocation();
    const navigate =  useNavigate();

    const { code } = queryString.parse(location.search);

    const reqAccesstoken =async()=>{
        if(typeof code === 'string') {
            const res = await getAccessToken(code);
            localStorage.setItem('access_token', JSON.stringify(res.access_token))
            navigate('/')
        }
    }

    useEffect(()=>{
        if(code) reqAccesstoken();
    },[])

    return (
        <div>
            loading....
        </div>
    );
};

export default Loading;