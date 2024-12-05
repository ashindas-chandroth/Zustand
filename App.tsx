import { ActivityIndicator, FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useUserStore } from './src/store'
import { User } from './src/store'



const App = () => {
  const { users, loading, error, fetchUsers } = useUserStore();
  useEffect(() => {
    fetchUsers()
  }, [fetchUsers])

  const renderItem = ({ item }:{item:User}) => {
    return (
       <View style={styles.cardStyle}>
          <Text>{item.name}</Text>
          <Image height={25} width={25} source={{uri:"https://fastly.picsum.photos/id/64/4326/2884.jpg?hmac=9_SzX666YRpR_fOyYStXpfSiJ_edO3ghlSRnH2w09Kg"}} style={{objectFit:'cover'}} />
       </View>
    )
  }
  return (
    <View style={styles.containerStyle}>
      {
        loading ?
          (
            <ActivityIndicator size='large' color="orange" />
          ) : error ? (
            <Text>{error}</Text>
          ) :
            (
              <FlatList contentContainerStyle={{gap:10}}renderItem={renderItem} data={users} keyExtractor={(item) => item.id.toString()} />
            )
      }
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  cardStyle:{
    backgroundColor:"#f9f9fc",
    borderRadius:10,
    flexDirection:"column"
  },
  containerStyle:{
    padding:12,
    flex:1,
    backgroundColor:"white",
    flexDirection:'column'
  },

})