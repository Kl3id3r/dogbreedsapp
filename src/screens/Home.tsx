// @Vendors
import React, { useEffect } from 'react';
import { FlatList, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

// @Store
import { RootState } from '../store';
import { fetchBreeds } from '../store/breedsSlice';

// @Components
import BreedItem from '../components/BreedItem';

const Home = ({ navigation }) => {
    const dispatch = useDispatch()
    const { breeds } = useSelector((state: RootState) => state.breedsReducer);

    useEffect(() => {
        dispatch(fetchBreeds())
    }, []);

    const viewDetailBreed = (item: string, subItems: string[]) => {
        navigation.navigate('Details', { item, subItems });
    }

    return (
        <View style={{ flex: 1 }}>
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