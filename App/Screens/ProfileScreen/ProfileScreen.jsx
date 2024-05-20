import { Alert, FlatList, Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect } from 'react';
import Colors from '../../Utils/Colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { useClerk, useUser } from '@clerk/clerk-expo';

const profileMenu = [
  {
    id: 1,
    name: 'Home',
    icon: 'home',
    screen: 'Home'
  },
  {
    id: 2,
    name: 'My Booking',
    icon: 'bookmark-sharp',
    screen: 'Booking'
  },
  {
    id: 4,
    name: 'Logout',
    icon: 'log-out',
    action: 'logout'
  }
]

const ProfileScreen = () => {

  const {user} = useUser();
  const { signOut } = useClerk();

  const navigation = useNavigation();

  const handlePress = async (item) => {
    if (item.action === 'logout') {
      try {
        await signOut();
      } catch (err) {
        console.error('Logout failed', err);
      }
    } else if (item.screen) {
      navigation.navigate(item.screen);
    }
  };

  return (
    <View>
      <View style={{padding: 20, backgroundColor: Colors.PRIMARY}}>
        <Text style={{fontSize: 30, fontFamily: 'outfit-bold', color: Colors.WHITE}}>Profile</Text>
        <View style={{display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 20}}>
          <Image source={{uri: user.imageUrl}} style={{width: 90, height: 90, borderRadius: '50%'}}/>
          <Text style={{fontSize: 20, fontFamily: 'outfit-medium', marginTop: 10, color: Colors.WHITE}}>{user.fullName}</Text>
          <Text style={{fontSize: 16, fontFamily: 'outfit', marginTop: 10, color: Colors.WHITE}}>{user.primaryEmailAddress.emailAddress}</Text>
        </View>
      </View>
      <View style={{paddingTop: 60}}>
          <FlatList
            data={profileMenu}
            renderItem={({item, index}) => (
              <TouchableOpacity onPress={() => handlePress(item)} style={{ marginBottom: 40, paddingHorizontal: 50, display: 'flex', alignItems: 'center', flexDirection: 'row', gap: 10}}>
                <Ionicons name={item.icon} size={24} color={Colors.PRIMARY} />
                <Text style={{fontSize: 20, fontFamily: 'outfit-medium'}}>{item.name}</Text>
              </TouchableOpacity>
            )}
            keyExtractor={item => item.id.toString()}
          />
        </View>
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({})