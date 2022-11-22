export const kakaoClientId = '6d14dc79fabe2059d567d923273f3225';
// export const redirectUri = 'http://localhost:3000/main/signin'
// export const redirectUri = 'https://cozyinfo.vercel.app/main';
export const redirectUri = 'http://localhost:3000/auth';

interface regionType {
    [key: string]: number;
}

export const regionCode: regionType = {
    서울특별시: 11,
    부산광역시: 26,
    대구광역시: 27,
    인천광역시: 28,
    광주광역시: 29,
    대전광역시: 30,
    울산광역시: 31,
    세종특별자치시: 36110,
    경기도: 41,
    강원도: 42,
    충청북도: 43,
    충청남도: 44,
    전라북도: 45,
    전라남도: 46,
    경상북도: 47,
    경상남도: 48,
    제주특별자치도: 50,
};
