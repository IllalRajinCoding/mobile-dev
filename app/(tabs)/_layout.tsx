import React from 'react'
import { Tabs } from 'expo-router'


// 46 
const _layout = () => {
  return (
    <Tabs>
        <Tabs.Screen name="index" options={{ title: 'Home', headerShown : false }} />
    </Tabs>
  )
}

export default _layout