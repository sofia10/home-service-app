import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Colors from '../../Utils/Colors'
import { useNavigation } from '@react-navigation/native'

const BusinessListInner = ({item}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={styles.container} 
      onPress={() => navigation.push('business-details', {item: item})}>
      <Image source={{uri: item?.images[0].url}}
        style={styles.image}
      />
      <View>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.person}>{item.contactPerson}</Text>
        <Text style={styles.category}>{item.category.name}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default BusinessListInner

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.WHITE,
        padding: 5,
        borderRadius: 10,
    },
    image: {
        width: 160,
        height: 100,
        borderRadius: 10
    },
    name: {
        fontFamily: 'outfit-medium',
        fontSize: 17
    },
    person: {
        fontFamily: 'outfit',
        fontSize: 14
    },
    category: {
        fontFamily: 'outfit',
        fontSize: 10,
        color: Colors.PRIMARY,
        marginTop: 3
    }
})