// @Types
import { IUserData } from "./UserDataType";

/**
 * 
 */
export type IAuth = {
    loading: boolean;
    user: IUserData;
    isAuthenticated: boolean
}

/**
 * 
 */
export type IAction = {
    type: string
    payload?: any
    error?: any
}