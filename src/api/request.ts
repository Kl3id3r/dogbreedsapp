// @Vendors
import { AxiosResult, RequestOptionsType } from '../types/ApiType';
import API from './api';

/**
 * Función genérica para comunicarse con la API
 * @param url: string
 * @param options: RequestOptionsType
 * @returns Promise: <AxiosResult<T>> 
 */
export const request = async <T = any>(
    url: string,
    options: RequestOptionsType = {}
): Promise<AxiosResult<T>> => {
    const { method = 'get', data = {}, params } = options
    try {
        const response = await API.request<T>({
            url,
            params,
            method,
            data
        })
        return { data: response.data, error: false }
    } catch (error: any) {
        if (error.response) {
            return {
                code: 'HTTP_ERROR',
                status: error.response.status,
                data: error.response.data,
                error,
            };
        }
        return {
            error: {
                code: 'CONNECTION',
                error,
            },
        };
    }
}