import React from 'react';
import KakaoAuthButton from '../atoms/KakaoAuthButton';
import { Grid, Typography } from '@mui/material';

const SocialLogin = () => {
    return (
        <Grid container>
            <Grid xs sx={{display: 'flex', justifyContent: 'left', fontWeight: 'bold', alignItems: 'center' }}>
                <Typography variant='subtitle2'>소셜 계정으로 로그인</Typography>
            </Grid>
            <Grid xs="auto" item>
                <KakaoAuthButton/>
            </Grid>
        </Grid>
    );
};

export default SocialLogin;