import { IBreedList } from "../types/BreedsType";

export function convertData(data: unknown): IBreedList[] {

    /**
     * input: { "Pitbull": ['lista','de', 'animal'] }
     * expected output: [ { breed: "Pitbull", subBreed: ['lista','de', 'animal'] } ]
     */

    const dataFormatted = Object.keys(data as object).reduce((acc: IBreedList[], el: string) => {
        const breed = el;
        const subBreed = data[el];
        acc.push({ breed, subBreed, isFavorite: el.includes('ho') });
        return acc;
    }, [] as IBreedList[]);

    return dataFormatted;
}