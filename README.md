# react-native-sf-checkbox-new

# 选择框

# 安装
> npm install react-native-sf-checkbox-new  
> npm i prop-types

# Props
|  parameter  |  type  |  required  |   description  |  default  |
|:-----|:-----|:-----|:-----|:-----|
|img|array|no|图片数组|null|
|imgSize|number|no|图片大小|null|
|style|style|no|布局|null
|onClick|func|no|点击回调|null|

# Func
> setCheck 设置状态  
> getCheck 获取状态

# 例子
```
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import SFCheckbox from "./react-native-sf-checkbox/src/SFCheckbox";

const instructions = Platform.select({
   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
   android:
   'Double tap R on your keyboard to reload,\n' +
   'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

   componentDidMount() {
      for(var i = 0 ; i < 5; i++) {
         if (i == 3) {
            this.refs[i].setCheck(true)
         }
      }
   }

   render() {
      return (
          <View style={styles.container}>
             <Text style={styles.welcome} onPress={this.submit}>Welcome to React Native!</Text>
             <Text style={styles.instructions}>To get started, edit App.js</Text>
             <Text style={styles.instructions}>{instructions}</Text>

             {this.setUI()}
          </View>
      );
   }

   submit = () =>{
      var arr = []
      for (var i =0; i < 5; i++) {
         var t =  this.refs[i].getCheck()
         arr.push(t)
      }
      console.log(arr)
   }

   setUI = () => {
      var arr = []
      for (var i = 0; i < 5; i++) {
         arr.push(
             <View
                 key={i}
                 style={{width: '100%', height: 40, backgroundColor: 'red', flexDirection: 'row', alignItems: 'center'}}>
                <SFCheckbox
                    ref={i}
                    style={{marginLeft: 15}}
                    imgSize={30}
                    onClick={(p) => this.clickImage(p)}/>
             </View>
         )
      }
      return arr
   }

   clickImage = (p) => {
      console.log(p)
   }
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
   },
   welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
   },
   instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
   },
});

```
