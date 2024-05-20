import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalApis from '../../Utils/GlobalApis';
import Heading from '../../Components/Heading';
import BusinessListInner from './BusinessListInner';

const BusinessList = () => {

    const [businessList, setBusinessList] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await GlobalApis.getBusinessList();
                setBusinessList(res?.businessLists); 
            } catch (error) {
                console.error("Error fetching business list:", error);
            }
        };
    
        fetchData();
    }, []);

  return (
    <View style={styles.container}>
      <Heading title={'Latest Business'} isViewAll={true}/>
      <FlatList
        data={businessList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({item, index}) => (
            <View style={{marginRight: 10}}>
                <BusinessListInner item={item}/>
            </View>
        )}
      />
    </View>
  )
}

export default BusinessList

const styles = StyleSheet.create({
    container: {
        marginTop: 20
    }
})