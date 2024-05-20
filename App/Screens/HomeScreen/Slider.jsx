import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalApis from '../../Utils/GlobalApis'
import Heading from '../../Components/Heading';

const Slider = () => {

  const [ slider, setSlider ] = useState([]);

  useEffect(() => {
      getSliders()
  },[])

  const getSliders = () => {
    GlobalApis.getItems(
      `query GetSlider {
        sliders {
          id
          name
          image {
            url
          }
        }
      }
      `
    ).then(res => {
        // console.log("response", JSON.stringify(res, null, 2));
        setSlider(res?.data.sliders);
    }).catch(error => {
        console.error("Error fetching sliders:", error);
    });
  }

  return (
    <View>
      <Heading title="Offers For You"/>
      <FlatList
        data={slider}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({item, index}) => (
          <View style={{marginRight: 10}}>
            <Image source={{uri:item?.image?.url}}
              style={styles.sliderImage}
            />
          </View>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  sliderImage: {
    width: 270,
    height: 150,
    objectFit: 'cover',
    borderRadius: 20
  }
});

export default Slider