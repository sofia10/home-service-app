import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Colors from '../../Utils/Colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import AntDesign from '@expo/vector-icons/AntDesign';

const BusinessListItem = ({item, booking}) => {

    const navigation = useNavigation();

  return (
    <TouchableOpacity style={styles.container} onPress={() => {
        if(!booking?.id){
            navigation.navigate('business-details', {item: item})}
        }
        }>
      <Image source={{uri: item?.images[0].url}} style={styles.image}/>
      <View style={styles.info}>
        <Text style={styles.person}>{item.contactPerson}</Text>
        <Text style={styles.name}>{item.name}</Text>
        
        {!booking?.id ? (
            <Text style={styles.address}>
                <Ionicons name="location-sharp" size={20} color={Colors.PRIMARY} />
                {item.address}
            </Text>
        ) : (
            <Text style={[
                {
                    padding: 5,
                    borderRadius: 5,
                    fontSize: 14,
                    alignSelf: 'flex-start',
                    color: Colors.PRIMARY,
                    backgroundColor: Colors.PRIMARY_LIGHT,
                },
                booking?.bookingStatus === 'completed' && {
                    backgroundColor: 'lightgreen',
                    color: 'green',
                },
                booking?.bookingStatus === 'canceled' && {
                    backgroundColor: 'lightcoral',
                    color: 'red',
                }
            ]}>
                {booking?.bookingStatus}
            </Text>
        )}
        
        <Text style={styles.address}>
            {booking?.date && (
                <>
                    <AntDesign name="calendar" size={20} color={Colors.PRIMARY} />
                    {booking.date}
                </>
            )}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

export default BusinessListItem

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 10,
        backgroundColor: Colors.WHITE,
        borderRadius: 15,
        marginBottom: 15,
        gap: 10
    },
    image: {
        width: 120,
        height: 120,
        borderRadius: 8
    },
    info: {
        gap: 8
    },
    person: {
        fontFamily: 'outfit',
        color: Colors.GRAY,
        fontSize: 15
    },
    name: {
        fontFamily: 'outfit-bold',
        fontSize: 19
    },
    address: {
        fontFamily: 'outfit',
        color: Colors.GRAY,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        fontSize: 16,
    }
})