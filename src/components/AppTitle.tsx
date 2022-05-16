import React from 'react';
import { Text, View } from 'react-native';
import styles from '../styles/PublicStyles';
import colors from '../theme/colors';
import fonts from '../theme/fonts';

const AppStyledTitle = ({ showSecond }: {showSecond?: boolean}) => {
    return (
        <View style={styles.boxLoginTitle}>
            <Text style={styles.titleLogin}>BreedsApp</Text>
            {showSecond &&  (
                <Text style={{ fontSize: fonts.size.font16, color: colors.gray, fontWeight: fonts.weight.semi, textAlign: 'center', marginBottom: 30 }}>Sign In</Text>
            )}
            
        </View>
    )
}

export default AppStyledTitle;