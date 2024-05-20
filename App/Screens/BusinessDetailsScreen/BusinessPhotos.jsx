import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Heading from '../../Components/Heading'

const BusinessPhotos = ({business}) => {
    const renderItem = ({ item, index }) => {
        return (
          <View style={styles.imageContainer}>
            <Image source={{ uri: item.url }} style={styles.image} />
          </View>
        );
    };

  return (
    <View  style={styles.container}>
        <Heading title={"Photos"}/>
        <FlatList
            data={business.images}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
            numColumns={2}
            columnWrapperStyle={styles.row}
        />
    </View>
  )
}

export default BusinessPhotos

const styles = StyleSheet.create({
    imageContainer: {
        flex: 1,
        margin: 5,
    },
    image: {
        width: '100%',
        height: 120,
        borderRadius: 10
    },
})