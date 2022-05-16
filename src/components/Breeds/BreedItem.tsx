import React, { memo } from 'react';
import { Pressable, Text, View } from 'react-native';
import ArroIcon from '../../assets/icons/arrowIcon.svg';
import ArrowUpIcon from '../../assets/icons/arrowUpIcon.svg';
import { homeStyles } from '../../styles/HomeStyles';
import { BreedItemProps } from '../../types/BreedsType';
import BreedIconRender from './BreedIconRender';

const BreedItem = ({ item, subItems, onPressItem, isChild, showSub, onShowSub }: BreedItemProps) => {
    return (
        <View style={{ ...homeStyles.breedItem, paddingLeft: isChild ? 30 : 0, marginTop: isChild ? 10 : 0 }}>
            <View style={homeStyles.breedItemIcon}>
                <BreedIconRender />
            </View>

            <Pressable style={homeStyles.breedItemPress} onPress={() => onPressItem(item, subItems ?? [])}>
                <Text style={homeStyles.breedTitle}>{item}</Text>
            </Pressable>

            <View style={{ width: isChild ? 50 : 20 }}>
                {subItems?.length && !isChild ? (
                    <Pressable
                        onPress={onShowSub}>
                        <ArroIcon width={20} height={20} style={{ display: showSub ? 'none' : 'flex' }} />
                        <ArrowUpIcon width={20} height={20} style={{ display: !showSub ? 'none' : 'flex' }} />
                    </Pressable>
                ) : null}
            </View>
        </View>
    )
}

export default memo(BreedItem)