import React from "react";
import { IconButton } from '@mui/material';
import { kakaoClientId, redirectUri } from '../../conf/config';
import kakao from '../../images/kakao_login_medium_narrow.png';

const loginUri = `https://kauth.kakao.com/oauth/authorize?client_id=${kakaoClientId}&redirect_uri=${redirectUri}&response_type=code`;


const KakaoAuthButton = () => {
    return (
        <IconButton sx={{'&.MuiIconButton-root': {padding:'0px'}}}>
            <a href={loginUri}  rel="noopener noreferrer">
                <img src={kakao} alt="카카오계정으로 로그인" />
            </a>
        </IconButton>
    );
};

export default KakaoAuthButton;