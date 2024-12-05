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
          
          <Image height={45} width={45} style={styles.imageStyle} source={{uri:"https://raw.githubusercontent.com/ashindas-chandroth/Database/main/premium_photo-1671656349322-41de944d259b.jpg"}}/>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.email}>{item.email}</Text>
       </View>
    )
  }
  return (
    <View style={styles.containerStyle}>
      {
        loading ?
          (
            <ActivityIndicator size='large' color="blue" />
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
    flexDirection:"column",
    elevation:5,
    alignItems:'center',
    justifyContent:'center',
    padding:10
  },
  containerStyle:{
    padding:12,
    flex:1,
    backgroundColor:"white",
    flexDirection:'column'
  },
  imageStyle:{
    objectFit:'cover',
    borderRadius:40
  },
  name:{
    textAlign:'center',
    color:"black",
    fontWeight:'bold'
  },
  email:{
    textAlign:'center',
    color:'blue',

  }

})