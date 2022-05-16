// @Api
import { BREEDS } from './../endpoints';
import { request } from './../request';

/**
 * Llamar todas las razas
 * @function GetAllBreeds
 */
export const GetAllBreeds = () => {
    return request(BREEDS.GET_ALL, {
        method: 'get'
    })
}