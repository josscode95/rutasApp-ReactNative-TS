import React from 'react'
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';

interface IFab{
  iconName:string;
  onPress:()=>void;
  style?:StyleProp<ViewStyle>;
}

export const Fab = ({iconName, onPress, style = {}}:IFab) => {
  return (
    <View style={{...style as any}}>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={onPress}
        style={styles.blackButton}
      >

      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  blackButton:{

  }
});