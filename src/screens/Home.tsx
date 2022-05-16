// @Vendors
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, TextInput, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import BreedContainerItem from '../components/Breeds/BreedContainerItem';
import useDebounceFn from '../hooks/useDebounceFn';
import { RootState } from '../store';
import { fetchBreeds, fetchUpdateBreeds } from '../store/breedsSlice';
import { homeStyles } from '../styles/HomeStyles';
import styles from '../styles/PublicStyles';
import colors from '../theme/colors';
import { IBreedList } from '../types/BreedsType';

const Home = ({ navigation }) => {

    const dispatch = useDispatch()
    const { breeds, loading, loaded, errorMessage, serverErrors } = useSelector((state: RootState) => state.breedsReducer);

    const [keyword, setKeyword] = useState();
    const [breedsFiltered, setFiltered] = useState([] as IBreedList[]);

    const debouncedSearchTerm = useDebounceFn(keyword, 500);

    const viewDetailBreed = (item?: string | IBreedList, subItems?: string[]) => {
        navigation.navigate('Details', { item, subItems });
    }

    const handleFavorite = (breed?: IBreedList) => {
        dispatch(fetchUpdateBreeds({ breed, index: breeds.indexOf(breed) }));
    }

    useEffect(() => {
        dispatch(fetchBreeds())
    }, []);

    // Effect for Filter Breeds
    useEffect(() => {
        if (debouncedSearchTerm) {
            const filtered = breeds.filter(
                ({ breed }: IBreedList) => breed.toLocaleLowerCase().includes((debouncedSearchTerm as string).toLocaleLowerCase()
                ));
            setFiltered(filtered);
        } else {
            setFiltered(breeds);
        }
    }, [debouncedSearchTerm, breeds]);

    return (
        <View style={{ flex: 1, backgroundColor: colors.white }}>
            <TextInput
                style={styles.control}
                onChangeText={setKeyword}
                value={keyword}
                placeholder="Search a Breed"
            />

            <Text style={homeStyles.cumbsText}>
                Breeds ({breedsFiltered.length})
            </Text>

            {!loaded && !loading && serverErrors ? (
                <Text style={{...homeStyles.cumbsText, ...homeStyles.cumbsError}}>
                    {errorMessage}
                </Text>
            ) : null}

            {loading && !loaded ?
                <ActivityIndicator /> :
                <FlatList
                    data={breedsFiltered}
                    renderItem={({ item }: { item: IBreedList }) =>
                        <BreedContainerItem item={item} onPressItem={viewDetailBreed} handleFavorite={handleFavorite} />
                    }
                />}

        </View>
    )
}

export default Home;