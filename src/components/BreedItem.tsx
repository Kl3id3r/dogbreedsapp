import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

type IProps = {
    item: string;
    subItems: string[];
    onPressItem: ((item: string, subItems: string[]) => void) | undefined
}
const BreedItem = ({ item, subItems, onPressItem }: IProps) => {

    const handlePress = () => {
        onPressItem && onPressItem(item, subItems);
    }

    return (
        <View>
            <Text>
                <Button title={item} onPress={handlePress} />
            </Text>
            <Text>{subItems.length}</Text>
        </View>
    )
}

export default BreedItem

const styles = StyleSheet.create({})