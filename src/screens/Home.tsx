// @Vendors
import React, { useEffect, useState } from 'react';
import { FlatList, Text, TextInput, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

// @Store
import { RootState } from '../store';
import { fetchBreeds } from '../store/breedsSlice';

// @Components
import BreedItem from '../components/BreedItem';
import styles from '../styles/PublicStyles';
import useDebounceFn from '../hooks/useDebounceFn';

const Home = ({ navigation }) => {

    const dispatch = useDispatch()
    const { breeds } = useSelector((state: RootState) => state.breedsReducer);

    const [keyword, setKeyword] = useState();
    const [breedsFiltered, setFiltered] = useState([]);
    const debouncedSearchTerm = useDebounceFn(keyword, 500);

    const viewDetailBreed = (item: string, subItems: string[]) => {
        navigation.navigate('Details', { item, subItems });
    }

    // Effect for API call
    useEffect(
        () => {
            if (debouncedSearchTerm) {
                // SetIsSearching true
                // SearchCharacters
                const filtered = breeds.filter( (breed: unknown[]) => breed[0].includes(debouncedSearchTerm) )
                console.log('filtered', filtered);
                
            } else {
                // Dispatch null
            }
        },
        [debouncedSearchTerm] // Only call effect if debounced search term changes
    );

    useEffect(() => {
        dispatch(fetchBreeds())
    }, []);


    return (
        <View style={{ flex: 1 }}>
            <TextInput
                style={styles.control}
                onChangeText={setKeyword}
                value={keyword}
                placeholder="Search a Breed"
            />

            <Text>Breeds ({breeds.length})</Text>
            <FlatList
                data={breeds}
                renderItem={({ item }) =>
                    <BreedItem item={item[0]} subItems={item[1]} onPressItem={viewDetailBreed} />
                }
            />
        </View>
    )
}

export default Home;