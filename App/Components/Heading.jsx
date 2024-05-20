import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Heading = ({title, isViewAll=false}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{title}</Text>
      {isViewAll && <Text style={styles.viewAll}>View all</Text>}
    </View>
  )
}

export default Heading

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    heading: {
        fontSize: 20,
        fontFamily: 'Outfit-medium',
        marginBottom: 10
    },
    viewAll: {
        fontFamily: 'Outfit'
    }
})