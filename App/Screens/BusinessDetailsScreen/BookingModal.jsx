import { SafeAreaView, StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import CalendarPicker from 'react-native-calendar-picker';
import Colors from '../../Utils/Colors';
import Heading from '../../Components/Heading';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import GlobalApis from '../../Utils/GlobalApis';
import { useUser } from '@clerk/clerk-expo';
import { Toast } from 'react-native-toast-message/lib/src/Toast';

const BookingModal = ({businessId, hideModal}) => {
    const navigate = useNavigation();
    const [note, setNote] = useState('');
    const [ selectedDate, setSelectedDate ] = useState('');

    const {user} = useUser();

    const createNewBooking = () => {
        if (!selectedDate) {
            Toast.show({
                type: 'error',
                text1: 'Please select Date',
                position: 'bottom',
                visibilityTime: 3000,
            });
            return;
        }
        const data = {
            userName: user.fullName,
            userEmail: user.primaryEmailAddress.emailAddress,
            date: selectedDate,
            note: note,
            businessId: businessId
        };
    
        GlobalApis.createBooking(data).then(
            res => {
                Toast.show({
                    type: 'success',
                    text1: 'Booking Created Successfully',
                    position: 'bottom',
                    visibilityTime: 3000,
                })
                // ToastAndroid.show('Booking Created Successfully', ToastAndroid.LONG)
            }
        ).catch(
            err => {
                console.error("Error creating booking:", err);
                Toast.show({
                    type: 'error',
                    text1: 'Failed to Create Booking',
                    position: 'bottom',
                    visibilityTime: 3000,
                });
            }
        );
    };

  return (
    <SafeAreaView style={styles.modal}>
        <KeyboardAwareScrollView
                contentContainerStyle={styles.modalContainer}
                enableAutomaticScroll={true}
                extraScrollHeight={20}
                style={{flex: 1}}
            >
            <TouchableOpacity style={styles.backRow}
                onPress={() => hideModal()}
            >
                <Ionicons style={styles.backArrow} name="arrow-back-outline" size={32} color="black" />
                <Text style={styles.title}>Booking</Text>
            </TouchableOpacity>
            <Heading title={"Select Date"}/>
            <View style={styles.calendarContainer}>
                <CalendarPicker
                    onDateChange={setSelectedDate}
                    width={340}
                    minDate={Date.now()}
                    selectedDayColor={Colors.PRIMARY}
                    selectedDayTextColor={Colors.WHITE}
                />
            </View> 
            <View style={{paddingTop: 20}}>
                <Heading title={"Any Suggestion Note"}/>
                <TextInput 
                    placeholder='Note' 
                    style={styles.textarea}
                    multiline={true} 
                    onChangeText={text => setNote(text)}
                />
            </View>
        </KeyboardAwareScrollView>
        <TouchableOpacity style={styles.confirmBtn} onPress={() => createNewBooking()}>
            <Text style={styles.confirmBtnText}>Confirm & Book</Text>
        </TouchableOpacity>
        <Toast />
    </SafeAreaView>
  ) 
}

export default BookingModal

const styles = StyleSheet.create({
    modal: {
        flex: 1,
    },
    modalContainer: {
        paddingHorizontal: 20
    },
    backRow: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10
    },
    backArrow: {
        padding: 20
    },
    title: {
        fontSize: 24,
        fontFamily: 'outfit-medium'
    },
    calendarContainer: {
        backgroundColor: Colors.PRIMARY_LIGHT,
        padding: 20,
        borderRadius: 15
    },
    textarea: {
        borderWidth: 1,
        borderRadius: 15,
        borderColor: Colors.PRIMARY,
        textAlignVertical: "top",
        padding: 10,
        fontSize: 16,
        height: 100,
        marginTop: 5,
        fontFamily: 'outfit'
    },
    confirmBtn: {
        borderRadius: 99,
        backgroundColor: Colors.PRIMARY,
        marginTop: 15,
        marginHorizontal: 20
    },
    confirmBtnText: {
        textAlign: 'center',
        fontFamily: 'outfit-medium',
        fontSize: 17,
        color: Colors.WHITE,
        padding: 14,
        elevation: 2    }
})