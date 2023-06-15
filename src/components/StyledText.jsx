import React from "react"
import theme from "./themes"

import { StyleSheet, Text } from 'react-native'

const styles = StyleSheet.create({
    text: {
        fontSize: theme.fontSize.body,
        color: theme.colors.textPrimary,
        fontWeight: theme.fontWeights.normal,
        fontFamily: theme.fonts.main
    },
    colorPrimary: {
        color: theme.colors.colorPrimary
    },

    colorSecondary: {
        color: theme.colors.colorSecondary
    },

    bold: {
        fontWeight: theme.fontWeights.bold
    },
    subheading: {
        fontSize: theme.fontSize.subheading
    },

    textAlignCenter: {
        textAlign: 'center'
    }
})


export default function StyledText({ children, color, fontSize, align, fontWeight, style, ...restOfProps }) {

    const textStyles = [
        styles.text,
        color === 'primary' && styles.colorPrimary,
        color === 'secondary' && styles.colorSecondary,
        fontSize === 'subheading' && styles.subheading,
        fontWeight === 'bold' && styles.bold,
        align === 'center' && styles.textAlignCenter,
        style
    ]

    return (
        <Text style={textStyles} {...restOfProps}>
            {children}
        </Text>
    )
}
