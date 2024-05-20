import { FlatList, Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalApis from '../../Utils/GlobalApis';
import Heading from '../../Components/Heading';
import Colors from '../../Utils/Colors';
import { useNavigation } from '@react-navigation/native';

const Categories = () => {

  const navigation = useNavigation();

    const [ categories, setCategories ] = useState([]);
    const [ numColumns,  setNumColumns ] = useState(1)

    useEffect(() => {
      const fetchCategories = async () => {
          try {
              const { categories } = await GlobalApis.getCategories();
              setCategories(categories);
              setNumColumns(categories.length);
          } catch (error) {
              console.error("Error fetching categories:", error);
          }
      };
  
      fetchCategories();
  }, []);

  return (
    <View style={styles.container}>
      <Heading title={"Categories"} isViewAll={true}/>
      <FlatList
        key={numColumns} 
        data={categories}
        numColumns={numColumns}
        renderItem={({item, index})=> (
            <TouchableOpacity style={styles.categoriesRow}
              onPress={() => navigation.navigate('business-list', {category: item.name})}
            >
                <View style={styles.iconContainer}>
                    <Image source={{uri:item?.icon?.url}}
                    style={{width: 40, height: 40}}/>
                </View>
                <Text style={styles.title}>{item?.name}</Text>
            </TouchableOpacity>
        )}
      />
    </View>
  )
}

export default Categories

const styles = StyleSheet.create({
    container: {
        marginTop: 10
    },
    categoriesRow: {
        flex: 1,
        alignItems: 'center'
    },
    iconContainer: {
        backgroundColor: Colors.LIGHT_GRAY,
        padding: 10,
        borderRadius: '50%'
    },
    title: {
        fontFamily: 'outfit-medium',
        marginTop: 5
    }
})