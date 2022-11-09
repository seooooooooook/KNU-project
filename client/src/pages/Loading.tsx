import React, { useEffect } from 'react';
import { getAccessToken } from '../connector/testConn';

const Loading = () => {
    const queryString = require('query-string');
    const reqAccesstoken =async(code : string )=>{
        const res = await getAccessToken(code);
        alert(res)
    }

    useEffect(()=>{
        const res = queryString.parse(window.location.search);

        if(res)reqAccesstoken(res.code)
    },[])
    return (
        <div>
            loading....
        </div>
    );
};

export default Loading;