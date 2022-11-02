import React from 'react';
import KakaoAuthButton from '../atoms/KakaoAuthButton';
import { Grid } from '@mui/material';

const SocialLogin = () => {
    return (
        <Grid container sx={{flexDirection: 'column' ,marginBottom: '10px'}}>
            <Grid sx={{flex: 1}} xs="auto" item>
                <KakaoAuthButton/>
            </Grid>
        </Grid>
    );
};

export default SocialLogin;