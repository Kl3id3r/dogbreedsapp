import React, { memo, useState } from 'react';
import { FlatList, View } from 'react-native';
import { homeStyles } from '../../styles/HomeStyles';
import { BreedContainerProps } from '../../types/BreedsType';
import BreedItem from './BreedItem';

const BreedContainerItem = ({ item, subItems, onPressItem }: BreedContainerProps) => {
    const [showSub, setShowSub] = useState(false);

    const handleShow = () => {
        setShowSub(prev => !prev);
    }

    return (
        <View style={homeStyles.breedItemContainer}>
            <BreedItem
                item={item}
                subItems={subItems}
                showSub={showSub}
                onPressItem={onPressItem}
                onShowSub={handleShow}
            />
            {
                subItems?.length ? (
                    showSub && <FlatList
                        data={subItems}
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