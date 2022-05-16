import { PressableProps } from "react-native";

export type StyledColors = 'green' | 'gray' | 'yellow'

export type StyledVariant = 'filled' | 'outline'

export type ButtonProps = {
    text: string;
    color?: StyledColors;
    variant?: StyledVariant;
} & PressableProps