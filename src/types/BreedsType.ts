export type IBreedList = {
    breed: string;
    isFavorite: boolean;
    subBreed: string[];
}

export type IBreeds = {
    breeds: IBreedList[]
}

export type BreedContainerProps = {
    item?: IBreedList | string;
    subItems?: IBreedList[];
    onPressItem: ((item?: IBreedList | string, subItems?: string[]) => void);
    isChild?: boolean,
    handleFavorite?: ((item?: IBreedList) => void);
}

export type BreedItemProps = {
    showSub?: boolean;
    onShowSub?: () => void
} & BreedContainerProps