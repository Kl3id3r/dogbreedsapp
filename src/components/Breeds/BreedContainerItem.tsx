import React, { memo, useState } from 'react';
import { FlatList, View } from 'react-native';
import { homeStyles } from '../../styles/HomeStyles';
import { BreedContainerProps } from '../../types/BreedsType';
import BreedItem from './BreedItem';

const BreedContainerItem = ({ item, onPressItem, handleFavorite }: BreedContainerProps) => {
    const [showSub, setShowSub] = useState(false);

    const handleShow = () => {
        setShowSub(prev => !prev);
    }

    return (
        <View style={homeStyles.breedItemContainer}>
            <BreedItem
                item={item}
                showSub={showSub}
                onPressItem={onPressItem}
                onShowSub={handleShow}
                handleFavorite={handleFavorite}
            />
            {
                typeof item === 'object' && item?.subBreed?.length ? (
                    showSub && <FlatList
                        data={item.subBreed}
                        renderItem={({ item: child }) =>
                            <BreedItem item={child} onPressItem={onPressItem} isChild />
                        }
                    />
                ) : null
            }
        </View>
    )
}

export default memo(BreedContainerItem);