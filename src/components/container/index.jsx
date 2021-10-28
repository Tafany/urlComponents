import React from "react";
import { View, StyleSheet} from "react-native"


function Container (){
    return(
        <View style={style.container}>

        </View>
    );
}

const style= StyleSheet.create({
  container:{
    flex:1,
    marginTop: 50,
  },
});

export default Container;