import React from 'react'
import { Pressable, PressableProps, StyleSheet, Text } from 'react-native'
import colors from '../theme/colors'
import fonts from '../theme/fonts'

type StyledColors = 'green' | 'gray' | 'yellow'
type StyledVariant = 'filled' | 'outline'

type ButtonProps = {
    text: string;
    color?: StyledColors;
    variant?: StyledVariant;
} & PressableProps

const styledColors = {
    green: colors.green,
    yellow: colors.yellow,
    gray: colors.gray
}

const StyledButton = ({ text, color, variant, ...restProsps }: ButtonProps) => {
    const styledVariants = {
        fullfilled: {
            backgroundColor: styledColors[color || 'green']
        },
        outline: {
            backgroundColor: 'transparent',
            borderWidth: 1,
            borderColor: styledColors[color || 'green']
        }
    }
    return (
        <Pressable {...restProsps} style={{
            ...styles.styledButton,
            ...styledVariants[variant || 'fullfilled'],
        }}>
            <Text style={{
                ...styles.styledButtonText, color: variant ? (
                    variant === 'outline' ? styledColors[color || 'green'] : colors.white
                ) : colors.white
            }}>{text}</Text>
        </Pressable>
    )
}

export default StyledButton

const styles = StyleSheet.create({
    styledButton: {
        width: '100%',
        paddingVertical: 13,
        paddingHorizontal: 23,
        borderRadius: 50,
    },
    styledButtonText: {
        textTransform: 'uppercase',
        fontWeight: fonts.weight.bold,
        textAlign: 'center'
    }
})