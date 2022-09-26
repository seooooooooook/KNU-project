import React, { useState } from 'react';
// @ts-ignore
import { RenderAfterNavermapsLoaded, NaverMap , Marker } from 'react-naver-maps';
import { Box, TextField } from '@mui/material';
import { KakaoMapKeywordSearch } from '../connector/testConn';

const MapComp = () => {
    const [loc, setLoc] = useState<{lat: number; lng: number}>({ lat: 37.554722, lng: 126.970833 })
    const [search , setSearch] = useState('')

    const onEnter =  async (e :React.KeyboardEvent) => {
        if(e.key === 'Enter') {
            const res = await KakaoMapKeywordSearch(search);
            console.log(res.documents[0]?.address_name)
            console.log(res.documents[0].y)
            setLoc({...loc, lat: parseFloat(res.documents[0]?.y), lng: parseFloat(res.documents[0]?.x)})

        }}
    console.log(loc)
    return (
        <RenderAfterNavermapsLoaded
            ncpClientId={'s4t0ye8hyu'}
            error={<p>Maps Load Error</p>}
            loading={<p>Maps Loading...</p>}
        >
            <Box sx={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                <TextField label='주소 검색' size='medium' variant='filled'  placeholder="검색어를 입력하세요." onChange={e=>setSearch(e.target.value)} value={search} onKeyDown={onEnter}/>
                <NaverMap
                    mapDivId={"react-naver-map"}
                    style={{
                        width: '100%',
                        height: '70vh'
                    }}
                    center={loc}
                    defaultZoom={15}>
                    <Marker
                            key={1}
                            position={loc}
                        />
                </NaverMap>
            </Box>
        </RenderAfterNavermapsLoaded>
    );
}

export default MapComp
