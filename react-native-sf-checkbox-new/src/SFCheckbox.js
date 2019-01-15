/**
 * Created by SF on 2018/4/13.
 */

import React, {Component} from 'react';
import {
   View,
   Image,
   TouchableOpacity,
} from 'react-native';
import Proptypes from 'prop-types';

export default class SFCheckbox extends Component {

   static propTypes = {
      img: Proptypes.array,
      imgSize: Proptypes.number,
      style: Proptypes.any,
      onClick: Proptypes.func,
   }


   render() {
      const {style, imgSize} = this.props;
      return (
          <View style={[style, {width: imgSize, height: imgSize}]}>
             {this.setImage()}
          </View>
      )
   }

   constructor(props) {
      super(props);
      this.state = {
         isChecked: false,
      }
   }

   setCheck = (p) => {
      this.setState({
         isChecked: p,
      })
   }

   getCheck = () =>{
      return this.state.isChecked
   }

   clickImages = () => {
      var t = this.state.isChecked;
      this.setState({
         isChecked: !t
      }, () => {
         if (this.props.onClick)
            this.props.onClick(this.state.isChecked)
      })
   }

   setImage = () => {
      const {img, imgSize} = this.props;
      if (img) {
         return (
             <TouchableOpacity activeOpacity={1} onPress={this.clickImages}>
                <View style={{width: imgSize, height: imgSize, justifyContent: 'center', alignItems: 'center'}}>
                   <Image
                       style={{width: imgSize, height: imgSize}}
                       source={this.state.isChecked ? img[0] : img[1]}
                       resizeMode={'cover'}/>
                </View>
             </TouchableOpacity>
         )
      }
      return (
          <TouchableOpacity activeOpacity={1} onPress={this.clickImages}>
             <View style={{width: imgSize, height: imgSize, justifyContent: 'center', alignItems: 'center'}}>
                <Image
                    style={{width: imgSize, height: imgSize}}
                    source={this.state.isChecked ? require('./select.png') : require('./no_select.png')}
                    resizeMode={'cover'}/>
             </View>
          </TouchableOpacity>
      )
   }

}