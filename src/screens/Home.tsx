// @Vendors
import React, { useEffect, useState } from 'react';
import { FlatList, Text, TextInput, View } from 'react-native';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import BreedContainerItem from '../components/Breeds/BreedContainerItem';
import useDebounceFn from '../hooks/useDebounceFn';
import { RootState } from '../store';
import { fetchBreeds } from '../store/breedsSlice';
import styles from '../styles/PublicStyles';
import colors from '../theme/colors';
import fonts from '../theme/fonts';

const Home = ({ navigation }) => {

    const dispatch = useDispatch()
    const { breeds } = useSelector((state: RootState) => state.breedsReducer);
    const [keyword, setKeyword] = useState();
    const [breedsFiltered, setFiltered] = useState([] as unknown[]);

    const debouncedSearchTerm = useDebounceFn(keyword, 500);

    const viewDetailBreed = (item?: string, subItems?: string[]) => {
        navigation.navigate('Details', { item, subItems });
    }

    useEffect(() => {
        dispatch(fetchBreeds())
    }, []);
    
    // Effect for Filter Breeds
    useEffect(() => {
        if (debouncedSearchTerm) {
            const filtered = breeds.filter((breed: unknown[]) => (breed as string[])[0].toLocaleLowerCase().includes((debouncedSearchTerm as string).toLocaleLowerCase()));
            setFiltered(filtered);
        } else {
            setFiltered(breeds);
        }
    }, [debouncedSearchTerm]);

    return (
        <View style={{ flex: 1, backgroundColor: colors.white }}>
            <TextInput
                style={styles.control}
                onChangeText={setKeyword}
                value={keyword}
                placeholder="Search a Breed"
            />

            <Text style={{ fontSize: fonts.size.font16, fontWeight: fonts.weight.full, marginTop: 5, marginBottom: 25 }}>
                Breeds ({breedsFiltered.length})
            </Text>

            <FlatList
                data={breedsFiltered}
                renderItem={({ item }) =>
                    <BreedContainerItem item={item[0]} subItems={item[1]} onPressItem={viewDetailBreed} />
                }
            />
        </View>
    )
}

export default Home;