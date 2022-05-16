// @Vendors
import {
    createAsyncThunk, createEntityAdapter, createSlice
} from '@reduxjs/toolkit';
import { GetAllBreeds } from '../api/requests/breedsRequest';
// @Types
import { IAction } from '../types/AppType';
import { IBreedList, IBreeds } from '../types/BreedsType';
import { convertData } from '../utils/breeds';

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

export const fetchUpdateBreeds = createAsyncThunk(`${PREFIX}/updateBreed`, async ({ breed, index }) => {
    const updateBreed = { ...breed };
    updateBreed.isFavorite = !updateBreed.isFavorite;
    return { updateBreed, index };
})

// Reducer
export const breedsSlice = createSlice({
    name: PREFIX,
    initialState: authAdapter.getInitialState({
        loading: false,
        errorMessage: null,
        serverErrors: false,
        loaded: false,
        success: false,
        breeds: [] as IBreedList[]
    }),
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchBreeds.pending, (state) => {
                state.loading = true
                state.loaded = false
            })
            .addCase(fetchBreeds.fulfilled, (state, { payload: { message, status } }: IAction) => {
                state.loading = false
                state.loaded = true
                state.serverErrors = false
                state.breeds = convertData(message) as IBreedList[];
                state.success = status === 'success';
            })
            .addCase(fetchBreeds.rejected, (state, action: IAction) => {
                state.loading = false
                state.loaded = false
                state.errorMessage = action?.error?.message || 'Error load Breeds, try again'
                state.serverErrors = true;
            })
            .addCase(fetchUpdateBreeds.fulfilled, (state, { payload }: IAction) => {
                const newBreeds = [...state.breeds]
                newBreeds[payload.index] = payload.updateBreed;
                state.loading = false;
                state.breeds = newBreeds;
            })
    },
});

export default breedsSlice.reducer;