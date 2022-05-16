import React, { useEffect } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import colors from '../theme/colors';

const Details = ({ navigation, route }) => {
    const { item, subItems } = route.params;

    useEffect(() => {
        console.log(item);
        console.log(subItems);
    }, [item, subItems]);

    return (
        <View style={{ flex: 1, backgroundColor: colors.white }}>
            <Text>Details of {item} </Text>
            <Text>Subitems ({subItems.length}) </Text>
            <Button title="Go back" onPress={() => navigation.navigate('Breeds')} />
        </View>
    )
}

export default Details;

const styles = StyleSheet.create({})