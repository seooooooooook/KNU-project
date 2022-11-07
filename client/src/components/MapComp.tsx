import React, { useState } from 'react';
// @ts-ignore
import { RenderAfterNavermapsLoaded, NaverMap, Marker } from 'react-naver-maps';
import { Box, TextField } from '@mui/material';
import { KakaoMapKeywordSearch, KakaoGetRegion } from '../connector/testConn';
import { locationState, locationTypes, regionState } from '../store';
import { useRecoilState, useSetRecoilState } from 'recoil';

const MapComp = () => {
    const [loc, setLoc] = useRecoilState<locationTypes>(locationState);
    const setRegion = useSetRecoilState(regionState);
    const [search, setSearch] = useState('');

    const onEnter = async (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            const res = await KakaoMapKeywordSearch(search);
            const searchedLoc = await KakaoGetRegion(res.documents[0]?.x, res.documents[0]?.y);
            setRegion(searchedLoc.documents[0]?.region_1depth_name);
            setLoc({ ...loc, lat: parseFloat(res.documents[0]?.y), lng: parseFloat(res.documents[0]?.x) });
        }
    };

    return (
        <RenderAfterNavermapsLoaded ncpClientId={'s4t0ye8hyu'} error={<p>Maps Load Error</p>} loading={<p>Maps Loading...</p>}>
            <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <TextField label="주소 검색" size="medium" variant="filled" placeholder="검색어를 입력하세요." onChange={e => setSearch(e.target.value)} value={search} onKeyDown={onEnter} />
                <NaverMap
                    mapDivId={'react-naver-map'}
                    style={{
                        width: '100%',
                        height: '70vh',
                    }}
                    center={loc}
                    defaultZoom={10}
                >
                    <Marker key={1} position={loc} />
                </NaverMap>
            </Box>
        </RenderAfterNavermapsLoaded>
    );
};

export default MapComp;
