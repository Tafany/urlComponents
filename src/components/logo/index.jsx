import React from "react";
import { View, Image, StyleSheet} from "react-native"

const Logo = (path) =>{
    return(
        <Image style={style.image}
          source={{uri:path}}

        />
    );
}

export default Logo;

const style = StyleSheet.create({
  image:{
      width: 50,
      height: 25,
  }
})