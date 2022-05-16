import React, { memo } from 'react';
import StartIconOutline from '../../assets/icons/starIconOutline.svg';
import StartIcon from '../../assets/icons/starIcon.svg';

const BreedIconRender = ({ isFavorite }: { isFavorite: boolean }) => (
    isFavorite ? <StartIcon width={20} height={20} /> : <StartIconOutline width={20} height={20} />
)


export default memo(BreedIconRender);