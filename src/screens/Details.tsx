import React from 'react';
import { Text, View } from 'react-native';
import BreedContainerItem from '../components/Breeds/BreedContainerItem';
import StyledButton from '../components/StyledButton';
import { homeStyles } from '../styles/HomeStyles';
import colors from '../theme/colors';

const Details = ({ navigation, route }) => {
    const { item, subItems } = route.params;

    return (
        <View style={{ flex: 1, backgroundColor: colors.white }}>
            <Text style={homeStyles.cumbsText}>
                Breeds / {item?.breed || item}
            </Text>

            <View style={homeStyles.breedDetailImage}>
                {/* Image here */}
            </View>

            <BreedContainerItem item={item} subItems={subItems} onPressItem={() => null} />

            <StyledButton text='Go back' onPress={() => navigation.navigate('Breeds')} />
        </View>
    )
}

export default Details;