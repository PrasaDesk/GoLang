import BaseAPI from './api';
import { AppConstants } from '../constants/AppConstants';

const globalHeaders:any = {
    'Content-Type': 'application/json'
}

// const API = BaseAPI?.axiosInstances;

export const loginAPICall = async (requestBody: any) => {
    const headers = {...globalHeaders}
    // const response = await api.post(AppConstants.LOGIN_URL, requestBody, {headers})
}