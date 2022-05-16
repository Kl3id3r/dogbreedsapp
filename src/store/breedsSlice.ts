// @Vendors
import {
    createAsyncThunk, createEntityAdapter, createSlice
} from '@reduxjs/toolkit';
import { GetAllBreeds } from '../api/requests/breedsRequest';
// @Types
import { IAction } from '../types/AppType';
import { IBreeds } from '../types/BreedsType';

const PREFIX = 'breeds';
const authAdapter = createEntityAdapter<IBreeds>({});

// Actions && Middlewares
export const fetchBreeds = createAsyncThunk(`${PREFIX}/fetchBreeds`, async () => {
    const { error, data } = await GetAllBreeds()
    if (error) {
        throw Error(error.message);
    }
    return data;
});

// Reducer
export const breedsSlice = createSlice({
    name: PREFIX,
    initialState: authAdapter.getInitialState({
        loading: false,
        errorMessage: null,
        serverErrors: false,
        loaded: false,
        success: false,
        breeds: [
            ['Pitbull', []],
            ['Chiguagua', ['So', 'Pincher']],
            ['Bullterry', ['Pitbull', 'Pastor-Aleman', 'BullDog']]
        ] as unknown[],
        favoriteBreeds: [] as unknown[]
    }),
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchBreeds.pending, (state) => {
                state.loading = true
                state.loaded = false
            })
            .addCase(fetchBreeds.fulfilled, (state, action: IAction) => {
                state.loading = false
                state.serverErrors = false
                state.breeds = Object.entries(action.payload.message) as unknown[];
                state.success = action.payload.status === 'success';
            })
            .addCase(fetchBreeds.rejected, (state, action: IAction) => {
                state.loading = false
                state.errorMessage = action?.error?.message
                state.serverErrors = true
            })
    },
});

export default breedsSlice.reducer;