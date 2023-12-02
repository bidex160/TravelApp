import react from "react";
import { FlatList, SafeAreaView, Text, View } from "react-native";
import styles from "./style";
import Title from "../../components/Title";
import Categories from "../../components/Categories";
import React, { useEffect, useState } from "react";
import AttractionCard from "../../components/AttractionCard";
import attractions from '../../data/attractions.json'
import categoriesList from '../../data/categories.json'
import { useNavigation } from "@react-navigation/native";

const ALL = 'All'
const Home  = () =>{
  const navigation = useNavigation()
    const [selectedCatgory, setSelectedCatgory] = useState('All')
    const [data, setData] = useState([])

    useEffect(()=>{
        setData(attractions)
    },[])

     useEffect(()=>{
        if(selectedCatgory == ALL)setData(attractions)
        else{
          const filter = attractions.filter((att)=> att?.categories?.includes(selectedCatgory))
          setData(filter)
        }
    },[selectedCatgory])
    return (
       <SafeAreaView style={styles.safeArea}>         
        <FlatList
          // style={{margin: 32}}
          ListEmptyComponent={(<Text style={styles.emptyComponent}>Empty messgae</Text>)}
          ListHeaderComponent={(
          <>
          <View style={{margin: 32}} >  
          <Title text="Where do" style={ { fontWeight: 'normal' }} />
         <Title text="you want to go"/>
         <Title text="Explore Attractions" style={styles.subTitle} />
           </View>
         <Categories selectedCatgory={selectedCatgory}  onCategoryPress={setSelectedCatgory} categories={[ALL, ...categoriesList]} />
           </>
          )}
          numColumns={2}
          data={data}
          keyExtractor={(item)=>String(item?.id)}
          renderItem={({item, index})=>{
     return  <AttractionCard 
             onPress={()=>navigation.navigate('AttractionDetails', {item: item})}
            style={ (index%2 == 0) ? { marginRight: 12, marginLeft:32}: {marginRight:32}}
            key={index}
            title={item.name} 
            subTitle={item.city}
            imageSrc={item.images?.length ? item.images[0]: null}  />
          }}
        />

       </SafeAreaView>
    )
} 

export default React.memo(Home)