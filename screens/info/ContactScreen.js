import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import WebView from 'react-native-webview'

const ContactScreen = () => {
  return (
    <WebView source={{ uri: "https://www.ilovefreegle.org/help"}} />
  )
}

export default ContactScreen

const styles = StyleSheet.create({})