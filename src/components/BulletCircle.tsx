import React from 'react'
import { Pressable, StyleSheet, Text, TextStyle } from 'react-native'
import colors from '../theme/colors'
import fonts from '../theme/fonts'

const styledColors = {
    yellow: colors.yellow,
    gray: colors.gray,
    default: colors.green
}

type IProps = {
    text: string,
    color?: string;
    onPress?: React.ReactEventHandler,
    style: TextStyle
}

const BulletCircle = ({ text, color = 'default', onPress, style, ...resProps }: IProps) => {
    return (
        <Pressable onPress={onPress} pressableProps={{
            onPress,
            android_ripple: { radius: 500 },
        }}
            focusable
            style={{ ...styles.bullet, backgroundColor: styledColors[color], ...style }}
            flexDirection="row"
            alignItems="center"
            height={40}
            {...resProps}
        >
            <Text style={{ color: colors.white, fontWeight: fonts.weight.bold, fontSize: fonts.size.font14, textTransform: 'uppercase' }}>{text}</Text>
        </Pressable>
    )
}

export default BulletCircle;

const styles = StyleSheet.create({
    bullet: {
        width: 40,
        height: 40,
        borderRadius: 40,
        alignItems: 'center',
        justifyContent: 'center',
        textTransform: 'uppercase'
    }
})