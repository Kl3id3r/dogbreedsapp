import React from 'react'
import { Pressable, Text } from 'react-native'
import { stylesButton } from '../styles/StyledButton'
import colors from '../theme/colors'
import { ButtonProps } from '../types/ButtonProps'

const styledColors = {
    green: colors.green,
    yellow: colors.yellow,
    gray: colors.gray
}

const StyledButton = ({ text, color, variant, style, ...restProsps }: ButtonProps) => {
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
            ...stylesButton.styledButton,
            ...styledVariants[variant || 'fullfilled'],
            ...style
        }}>
            <Text style={{
                ...stylesButton.styledButtonText, color: variant ? (
                    variant === 'outline' ? styledColors[color || 'green'] : colors.white
                ) : colors.white
            }}>{text}</Text>
        </Pressable>
    )
}

export default StyledButton;
