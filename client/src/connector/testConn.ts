import axios from 'axios';
import { API_CURL } from '../connector/URL';

export interface DBStudent {
    id: number;
    name: string;
    email: string;
    dob: string;
    age: number;
}

const servicekeyNOTMINE = 'xuG%2FG4uWZXpNZJY0vZNG4jSO6SOLh7BbS7w5fqNVtnV77r3BOn60Y2jRV%2BXZbNFTK%2FMqqrvHXgSi8LNOV%2FmOHQ%3D%3D';

export const getStudent = async (): Promise<Array<DBStudent>> => {
    const res = await axios.get(`${API_CURL}/api/v1/student`);
    return res.data;
};

export const addStudent = async (name: string, email: string, date: string) => {
    const res = await axios.post(`${API_CURL}/api/v1/student`, { name: name, email: email, dob: date });
    return res.data;
};

export const updateStudent = async (id: number, name: string, email: string) => {
    const res = await axios.put(`${API_CURL}/api/v1/student/${id}?name=${name}&email=${email}`);
    return res.data;
};

export const deleteStudent = async (id: number) => {
    const res = await axios.delete(`${API_CURL}/api/v1/student/${id}`);
    return res.data;
};

export const KakaoMapKeywordSearch = async (query: string) => {
    const res = await axios.get(`https://dapi.kakao.com/v2/local/search/address.json?query=${query}`, { headers: { Authorization: `KakaoAK 6d14dc79fabe2059d567d923273f3225` } });
    return res.data;
};

export const KakaoGetRegion = async (x: string, y: string) => {
    const res = await axios.get(`https://dapi.kakao.com/v2/local/geo/coord2regioncode.json?x=${x}&y=${y}`, { headers: { Authorization: `KakaoAK 6d14dc79fabe2059d567d923273f3225` } });
    return res.data;
};

export const getHousingComplex = async () => {
    const res = await axios.get(
        'http://apis.data.go.kr/B552555/lhLeaseInfo1/lhLeaseInfo1?serviceKey=Yyq5vnzjRfWn5q0IZ1M%2FC%2BjB1EoBha7eEee7zBuEKEGvnyntpgBKaxGY9BrBX%2FGL%2FUlcvmQHfwmkIk6xnQ43lw%3D%3D&PG_SZ=10&PAGE=1',
    );
    return res.data;
};

export const getListHouse = async (regionCode: number) => {
    const requestUrl = regionCode
        ? `http://apis.data.go.kr/B552555/lhLeaseNoticeInfo1/lhLeaseNoticeInfo1?serviceKey=${servicekeyNOTMINE}&PG_SZ=10&PAGE=1&CNP_CD=${regionCode}`
        : `http://apis.data.go.kr/B552555/lhLeaseNoticeInfo1/lhLeaseNoticeInfo1?serviceKey=${servicekeyNOTMINE}&PG_SZ=10&PAGE=1`;
    const res = await axios.get(requestUrl);
    return res.data;
};
// if (e.key === 'Enter') {
//     const res = await KakaoMapKeywordSearch(search);
//     const searchedLoc = await KakaoGetRegion(res.documents[0]?.x, res.documents[0]?.y);
//     setRegion(searchedLoc.documents[0]?.region_1depth_name);
//     setLoc({ ...loc, lat: parseFloat(res.documents[0]?.y), lng: parseFloat(res.documents[0]?.x) });
// }

export const getListDetail = async (a:string, b:string, c:string,d:string) => {
    const requestUrl = `http://apis.data.go.kr/B552555/lhLeaseNoticeDtlInfo1/getLeaseNoticeDtlInfo1?serviceKey=${servicekeyNOTMINE}&SPL_INF_TP_CD=${a}&CCR_CNNT_SYS_DS_CD=${b}&PAN_ID=${c}&UPP_AIS_TP_CD=${d}`
    const res = await axios.get(requestUrl);
    try{
        const address= res.data[1].dsCtrtPlc[0].CTRT_PLC_ADR;
        const result = await KakaoMapKeywordSearch(address);
        const loc = {
            lat: parseFloat(result.documents[0]?.y),
            lng: parseFloat(result.documents[0]?.x),
        }
        console.log(loc)
        return loc;

    }catch (e){

    }

};

export const getAccessToken = async (code:string) => {
    const reqdata = {
        code: code
    }

    const res = await axios({
        url: `http://localhost:8080/api/auth/token`,
        method: 'get',
        data: JSON.stringify(reqdata)
    })
    return res.data;
}
