import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Heading from '../../Components/Heading'
import Colors from '../../Utils/Colors'

const BusinessAbout = ({business}) => {

    const [readIsMore, setReadIsMore] = useState(false)

  return (
    <View>
        <Heading title={"About Me"}/>
        <Text style={styles.about} numberOfLines={readIsMore ? 20 : 4}>{business.about}</Text>
        <TouchableOpacity onPress={()=>setReadIsMore(!readIsMore)}>
            <Text style={{color: Colors.PRIMARY, marginTop:2, fontFamily: 'outfit'}}>
            {readIsMore ? 'Read Less' : 'Read More'}</Text>
        </TouchableOpacity>
    </View>
  )
}

export default BusinessAbout

const styles = StyleSheet.create({
    about: {
        fontFamily: 'outfit',
        fontSize: 16,
        color: Colors.GRAY,
        lineHeight: 28
    }
})