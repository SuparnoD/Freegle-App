import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import WebView from 'react-native-webview'

const DisclaimerScreen = () => {
  return (
    <WebView source={{ uri: "https://www.ilovefreegle.org/disclaimer"}} />
  )
}

export default DisclaimerScreen

const styles = StyleSheet.create({})