import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import WebView from 'react-native-webview'

const TermsScreen = () => {
  return (
    <WebView source={{ uri: "https://www.ilovefreegle.org/terms" }} />
  )
}

export default TermsScreen

const styles = StyleSheet.create({})