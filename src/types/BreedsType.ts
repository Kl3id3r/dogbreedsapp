export type IBreeds = {
    breeds: unknown[]
}

export type BreedContainerProps = {
    item?: string;
    subItems?: string[];
    onPressItem: ((item?: string, subItems?: string[]) => void);
    isChild?: boolean
}

export type BreedItemProps = {
    showSub?: boolean;
    onShowSub?: () => void
} & BreedContainerProps