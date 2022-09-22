import axios, { AxiosResponse } from 'axios';
import { API_CURL } from '../connector/URL';

axios.defaults.withCredentials = true;

export interface DBStudent {
    id: number;
    name: string;
    email: string;
    dob: string;
    age: number;
}

export const getStudent = async (): Promise<Array<DBStudent>> => {
    const res = await axios.get(`${API_CURL}/api/v1/student`);
    return res.data;
}

export const addStudent = async (name: string, email: string, date:string) => {
    const res = await axios.post(`${API_CURL}/api/v1/student`, {"name":name, "email": email, "dob":date});
    return res.data;
}

export const updateStudent = async (id:number, name: string, email: string) => {
    const res = await axios.put(`${API_CURL}/api/v1/student/${id}?name=${name}&email=${email}`);
    return res.data;
}

export const deleteStudent = async (id:number) => {
    const res = await axios.delete(`${API_CURL}/api/v1/student/${id}`);
    return res.data;
}
