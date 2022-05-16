import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Image, Text, View } from 'react-native';
import BreedContainerItem from '../components/Breeds/BreedContainerItem';
import StyledButton from '../components/StyledButton';
import { homeStyles } from '../styles/HomeStyles';
import colors from '../theme/colors';

const Details = ({ navigation, route }) => {
    const { item, subItems } = route.params;

    const [image, setImage] = useState();

    useEffect(() => {
        async function getImage() {
            try {
                const { data } = await axios.get(`https://dog.ceo/api/breed/${item?.breed || item}/images/random`);
                const image = data.message;
                setImage(image);
            } catch (err) { }
        }
        getImage();
    }, [item?.breed || item]);

    return (
        <View style={{ flex: 1, backgroundColor: colors.white }}>
            <Text style={homeStyles.cumbsText}>
                Breeds / {item?.breed || item}
            </Text>

            <View style={homeStyles.breedDetailImage}>
                {/* Image here */}
                <Image
                    style={{ borderRadius: 160 }}
                    source={{ width: 160, height: 160, uri: image || '!' }}
                ></Image>
            </View>

            <BreedContainerItem item={item} subItems={subItems} onPressItem={() => null} />

            <StyledButton text='Go back' onPress={() => navigation.navigate('Breeds')} />
        </View>
    )
}

export default Details;