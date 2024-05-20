import { View, Text, Image, StyleSheet, TextInput } from 'react-native';
import React from 'react';
import { useUser } from '@clerk/clerk-expo';
import Colors from '../../Utils/Colors';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const Header = () => {
    const {user, isLoading} = useUser();
  return user&&(
    <View style={styles.container}>
        <View style={styles.subContainer}>
            <View style={styles.profileContainer}>
                <Image source={{uri: user?.imageUrl}} style={styles.userImage}/>
                <View>
                    <Text style={styles.title}>Welcome,</Text>
                    <Text style={styles.firstname}>{user?.firstName}</Text>
                </View>
            </View>
            <FontAwesome name="bookmark-o" size={27} color={Colors.WHITE} />
        </View>
        <View style={styles.searchBarContainer}>
            <TextInput placeholder='Search' style={styles.textInput}/>
            <View style={styles.iconContainer}>
                <FontAwesome name="search" style={styles.searchIcon} />
            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingTop: 20,
        backgroundColor: Colors.PRIMARY,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
    },
    subContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    profileContainer: {
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center'
    },
    userImage: {
        width: 45,
        height: 45,
        borderRadius: '50%',
    },
    title: {
        color: Colors.WHITE,
        fontFamily: 'Outfit'
    },
    firstname: {
        color: Colors.WHITE,
        fontSize: 24,
        fontFamily: 'Outfit-Bold'
    },
    searchBarContainer: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 20,
        gap: 10,
     },
    textInput: {
        backgroundColor: Colors.WHITE,
        padding: 7,
        paddingHorizontal: 17,
        borderRadius: 8,
        width: '85%',
        fontSize: 16
    },
    iconContainer: {
        backgroundColor: Colors.WHITE,
        borderRadius: 10,
        padding: 10,
    },
    searchIcon: {
        color: Colors.PRIMARY,
        fontSize: 24,
    },
})

export default Header