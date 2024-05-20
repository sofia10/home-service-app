import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import GlobalApis from '../../Utils/GlobalApis';
import { useRoute, useNavigation } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';
import BusinessListItem from './BusinessListItem';

const BusinessListByCategory = () => {

    const [businessList, setBusinessList] = useState([]);

    const navigate = useNavigation();

    const param = useRoute().params;

    useEffect(() => {
        param && getBusinessByCategory()
    }, [param]);
    
    const getBusinessByCategory = () => {
        GlobalApis.getBusinessByCategory(param.category)
        .then(res=>{
            setBusinessList(res.businessLists)
        })
    }

  return (
    <View>
      <TouchableOpacity style={styles.backRow}
        onPress={() => navigate.goBack()}
      >
        <Ionicons style={styles.backArrow} name="arrow-back-outline" size={32} color="black" />
        <Text style={styles.title}>{param.category}</Text>
      </TouchableOpacity>
      <FlatList 
        style={{margin: 10}}
        data={businessList}
        renderItem={({item, index}) => (
            <BusinessListItem item={item}/>
        )}
      />
    </View>
  )
}

export default BusinessListByCategory

const styles = StyleSheet.create({
    backRow: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    backArrow: {
        padding: 20
    },
    title: {
        fontSize: 24,
        fontFamily: 'outfit-medium'
    }
})