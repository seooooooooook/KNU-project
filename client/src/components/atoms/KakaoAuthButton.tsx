import React from "react";
import { Box, IconButton, Typography } from '@mui/material';
import { kakaoClientId, redirectUri } from '../../conf/config';
import {ReactComponent as KakaoIco} from '../../images/kakao_ico.svg'

const loginUri = `https://kauth.kakao.com/oauth/authorize?client_id=${kakaoClientId}&redirect_uri=${redirectUri}&response_type=code`;
const RESET_ANCHOR: object =  {color: "#fff", textDecoration: "none" ,outline: "none", "a:hover, a:active": {textDecoration: "none", color: "#fff", backgroundColor: "#f59000"} }


const KakaoAuthButton = () => {
    return (
        <IconButton sx={{width: '100%', display:'block' , '&.MuiIconButton-root': {padding:'0px'}}}>
            <a href={loginUri} style={RESET_ANCHOR}  rel="noopener noreferrer">
                <Box sx={{position:'relative', backgroundColor: '#fee500',borderRadius: '6px', display:'flex', justifyContent:'center',  padding: '5px' }}>
                    <KakaoIco style={{position: 'absolute' ,left: '30px', transform: 'translate(-50%, 20%)'}}/>
                    <Typography fontWeight='bold' variant='subtitle1' color="#191919" fontSize="60%" >카카오 계정으로 로그인</Typography>
                </Box>
            </a>
        </IconButton>
    );
};

export default KakaoAuthButton;