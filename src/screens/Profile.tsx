import React from 'react'
import { FlatList, StyleSheet, StyleSheetProperties, Text, View } from 'react-native'
import { useSelector } from 'react-redux'
import BreedContainerItem from '../components/Breeds/BreedContainerItem'
import StyledButton from '../components/StyledButton'
import { RootState } from '../store'
import colors from '../theme/colors'
import fonts from '../theme/fonts'

const InnerTexts = ({ label, text, style, ...props }: { label: string, text: string, style?: StyleSheetProperties | undefined }) => (
  <View style={{
    flexDirection: 'row',
    ...style
  }} {...props}>
    <Text style={{
      fontSize: fonts.size.font16,
      fontWeight: fonts.weight.bold,
      color: colors.graySecondary,
      marginRight: 10,
      textTransform: 'capitalize'
    }}>{label}</Text>
    <Text style={{
      fontSize: fonts.size.font16,
      fontWeight: fonts.weight.normal,
      color: colors.gray
    }}>{text}</Text>
  </View>
);

const Profile = ({ navigation }) => {
  const { user } = useSelector((state: RootState) => state.authReducer);
  const { breeds } = useSelector((state: RootState) => state.breedsReducer);

  const favoriteBreeds = breeds.filter(e => e.isFavorite);

  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>
      {/* Title */}
      <Text style={styles.mainTitle}>Your Profile</Text>

      {/* Profiles */}
      <View style={{
        backgroundColor: colors.whiteSecondary,
        padding: 10,
        borderRadius: 5,
        marginBottom: 35
      }}>
        <InnerTexts label='Name:' text={user?.name} />
        <InnerTexts label='Email:' text={user?.email} />
      </View>

      <View>
        <Text style={styles.mainTitle}>Your Favorites Breeds ({favoriteBreeds.length})</Text>
        <FlatList
          data={favoriteBreeds}
          renderItem={({ item }) =>
            <BreedContainerItem
              item={item}
              onPressItem={() => navigation.navigate('Details', { item: item?.breed || item, subItems: item?.subBreed || [] })}
            />
          }
        />
      </View>

      {/* Go back button */}
      <StyledButton text='Go back' onPress={() => navigation.navigate('Breeds')} />
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  mainTitle: {
    fontSize: fonts.size.font20,
    color: colors.graySecondary,
    fontWeight: fonts.weight.semi,
    textAlign: 'center',
    marginBottom: 15
  }
})