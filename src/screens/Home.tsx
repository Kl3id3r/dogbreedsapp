// @Vendors
import React, { useEffect } from 'react';
import { Button, StyleSheet, Text, View, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

// @Store
import { RootState } from '../store';
import { fetchBreeds } from '../store/breedsSlice';


const Home = ({ navigation }) => {
    const dispatch = useDispatch()
    const { breeds } = useSelector((state: RootState) => state.breedsReducer);

    useEffect(() => {
        dispatch(fetchBreeds())
    }, []);

    useEffect(() => {
        console.log(breeds);
    }, [breeds]);

    return (
        <View>
            <Text>Breeds ({breeds.length})</Text>

            <FlatList
                data={breeds}
                renderItem={({ item }) => <Text>{item[0]}</Text>}
            />

            <Button
                title="Go to Profile"
                onPress={() => {
                    navigation.navigate('Profile')
                }}
            />

        </View>
    )
}

export default Home

const styles = StyleSheet.create({})