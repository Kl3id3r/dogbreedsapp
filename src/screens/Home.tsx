// @Vendors
import React, { useEffect, useState } from 'react';
import { FlatList, Text, TextInput, View } from 'react-native';
import { useDispatch } from 'react-redux';
// @Components
import BreedItem from '../components/BreedItem';
import useDebounceFn from '../hooks/useDebounceFn';
import styles from '../styles/PublicStyles';
import colors from '../theme/colors';

const Home = ({ navigation }) => {

    const dispatch = useDispatch()
    // const { breeds } = useSelector((state: RootState) => state.breedsReducer);

    const breeds = [
        ['Pitbull', []],
        ['Chiguagua', []],
        ['Bullterry', ['Pitbull', 'Pastor-Aleman', 'BullDog']]
    ]
    const [keyword, setKeyword] = useState();
    const [breedsFiltered, setFiltered] = useState([] as unknown);

    const debouncedSearchTerm = useDebounceFn(keyword, 500);

    const viewDetailBreed = (item: string, subItems: string[]) => {
        navigation.navigate('Details', { item, subItems });
    }

    // Effect for Filter Breeds
    useEffect(() => {
        if (debouncedSearchTerm) {
            const filtered = breeds.filter((breed: unknown[]) => (breed as string[])[0].toLocaleLowerCase().includes((debouncedSearchTerm as string).toLocaleLowerCase()));
            setFiltered(filtered);
        } else {
            setFiltered(breeds);
        }
    }, [debouncedSearchTerm]);

    // useEffect(() => {
    //     dispatch(fetchBreeds())
    // }, []);


    return (
        <View style={{ flex: 1, backgroundColor: colors.white }}>
            <TextInput
                style={styles.control}
                onChangeText={setKeyword}
                value={keyword}
                placeholder="Search a Breed"
            />

            <Text>Breeds ({breedsFiltered.length})</Text>
            <FlatList
                data={breedsFiltered}
                renderItem={({ item }) =>
                    <BreedItem item={item[0]} subItems={item[1]} onPressItem={viewDetailBreed} />
                }
            />
        </View>
    )
}

export default Home;