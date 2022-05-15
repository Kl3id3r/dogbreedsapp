import { AxiosRequestConfig } from "axios";

export interface RequestOptionsType extends AxiosRequestConfig {
    authRequire?: boolean;
}

export type AxiosResult <T> = {
    data?: T;
    error?: any;
    code?: string;
    status?: number | string;
}