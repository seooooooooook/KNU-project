import { atom, selector } from 'recoil';
import { getListDetail } from '../connector/testConn';

export interface locationTypes {
    lat: number;
    lng: number;
}

export const locationState = atom<locationTypes>({
    key: 'locationState',
    default: { lat: 37.554722, lng: 126.970833 },
});

export const regionState = atom<string>({
    key: 'regionState',
    default: '',
});

export const noticeListState = atom({
    key: 'noticeListState',
    default: [],
})

export const noticeDetailSelector = selector({
    key: 'noticeDetailSelector',
    get: ({get}) => {
        const noticeList = get(noticeListState);
        const detailList = [];

        for(let detail of noticeList) {
            //@ts-ignore
            const data = getListDetail(detail.SPL_INF_TP_CD, detail.CCR_CNNT_SYS_DS_CD, detail.PAN_ID, detail.UPP_AIS_TP_CD );
            detailList.push(data);
        }

        return Promise.all(detailList);
    }
})