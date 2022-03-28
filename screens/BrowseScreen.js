import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const BrowseScreen = () => {
  return (
    <View style={styles.container}>
      <Text>BrowseScreen</Text>
    </View>
  )
}

export default BrowseScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
      },
})