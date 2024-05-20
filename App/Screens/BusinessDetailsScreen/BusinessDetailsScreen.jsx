import { Image, Modal, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Colors from '../../Utils/Colors';
import Heading from '../../Components/Heading';
import BusinessPhotos from './BusinessPhotos';
import BusinessAbout from './BusinessAbout';
import BookingModal from './BookingModal';

const BusinessDetailsScreen = () => {


    const navigate = useNavigation()

    const param = useRoute().params;

    const [business, setBusiness] = useState(param.item);
    const [showModal, setShowModal] = useState(false)

    useEffect(()=>{
    },[])
  return business && (
    <View>
        <ScrollView style={{height: '91%'}}>
            <TouchableOpacity style={styles.backIconContainer} onPress={()=>navigate.goBack()}>
                <Ionicons style={styles.backIcon} name="arrow-back" size={24} color={Colors.WHITE} />
        </TouchableOpacity>
        <Image source={{uri: business.images[0].url}} style={styles.image} />
        <View style={styles.info}>
            <Text style={styles.title}>{business.name}</Text>
            <View style={styles.infoRow}>
                <Text style={styles.name}>{business.contactPerson}</Text>
                <Text style={styles.category}>{business.category.name}</Text>
            </View>
            <Text>{business.contactPerson}</Text>
            <Text style={styles.address}>
                <Ionicons name="location-sharp" size={20} color={Colors.PRIMARY} />
                {business.address}
            </Text>
            <View style={styles.line}></View>
            <View>
                <BusinessAbout business={business}/>
            </View>
            <View style={styles.line}></View>
            <BusinessPhotos business={business}/>
        </View>
        </ScrollView>
        <View style={styles.btnsRow}>
            <TouchableOpacity style={styles.messageBtn}>
                <Text style={styles.messageBtnText}>Message</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.bookingBtn} onPress={() => setShowModal(true)}>
                <Text style={styles.bookingBtnText}>Book Now</Text>
            </TouchableOpacity>
        </View>
        <Modal
            animationType='slide'
            visible={showModal}
        >
            <BookingModal
                businessId={business.id}
                hideModal={() => setShowModal(false)}/>
        </Modal>
    </View>
  )
}

export default BusinessDetailsScreen

const styles = StyleSheet.create({
    container: {
    },
    backIconContainer: {
        position: 'absolute',
        zIndex: 1,
        backgroundColor: Colors.GRAY,
        borderRadius: '50%',
        padding: 5,
        marginTop: 10,
        marginLeft: 10
    },  
    image: {
        width: '100%',
        height: 300
    },
    info: {
        display: 'flex',
        marginTop: 20,
        paddingHorizontal: 20
    },
    title: {
        fontSize: 24,
        fontFamily: 'outfit-bold'
    },
    infoRow: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 10
    },
    name: {
        fontFamily: 'outfit-medium',
        fontSize: 20,
        color: Colors.PRIMARY
    },
    category: {
        fontSize: 14,
        color: Colors.PRIMARY,
        backgroundColor: Colors.PRIMARY_LIGHT,
        padding: 5,
        borderRadius: 5,
        marginLeft: 20,
    },
    address: {
        marginTop: 10,
        fontFamily: 'outfit',
        color: Colors.GRAY,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        fontSize: 16,
    },
    line: {
        borderWidth: 0.4,
        backgroundColor: Colors.LIGHT_GRAY,
        marginVertical: 20
    },
    btnsRow: {
        display: 'flex',
        flexDirection: 'row',
        gap: 5,
        margin: 8
    },
    messageBtn: {
        padding: 15,
        backgroundColor: Colors.WHITE,
        borderWidth: 1,
        borderColor: Colors.PRIMARY,
        borderRadius: '50%',
        flex: 1
    },
    messageBtnText: {
        fontSize: 18,
        textAlign: 'center',
        color: Colors.PRIMARY,
        fontFamily: 'outfit-medium'
    },
    bookingBtn: {
        padding: 15,
        backgroundColor: Colors.PRIMARY,
        borderWidth: 1,
        borderColor: Colors.PRIMARY,
        borderRadius: '50%',
        flex: 1
    },
    bookingBtnText: {
        fontSize: 18,
        textAlign: 'center',
        color: Colors.WHITE,
        fontFamily: 'outfit-medium'
    }
})