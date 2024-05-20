import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Heading from '../../Components/Heading'
import GlobalApis from '../../Utils/GlobalApis'
import { useUser } from '@clerk/clerk-expo'
import BusinessListItem from '../BusinessListByCategory/BusinessListItem'

const BookingScreen = () => {

const {user} = useUser();

const [bookingList, setBookingList] = useState([])
const [loading, setLoading] = useState(false)

useEffect(() => {
  user && getUserBookings();
}, [user])

  const getUserBookings = () => {
    setLoading(true);
    GlobalApis.getUserBookings(user.primaryEmailAddress.emailAddress).then(
      res => {
        setBookingList(res.data.bookings);
        setLoading(false);
      }
    )
  }


  return (
    <View style={styles.container}>
      <Heading title={'Bookings'} />
      <View>
        <FlatList
          data={bookingList}
          onRefresh={() => getUserBookings()}
          refreshing={loading}
          renderItem={({item, index}) => (
            <BusinessListItem 
              item={item.businessList}
              booking={item}
            />
          )}
        />
      </View>
    </View>
  )
}

export default BookingScreen

const styles = StyleSheet.create({
  container: {
    padding: 20
  }
})