import React from 'react'
import { Pressable, StyleSheet, Text } from 'react-native'

type IProps = { text: string }

const StyledButton = ({ text, ...restProsps }: IProps) => {
    return (
        <Pressable {...restProsps}>
            <Text>text</Text>
        </Pressable>
    )
}

export default StyledButton

const styles = StyleSheet.create({})