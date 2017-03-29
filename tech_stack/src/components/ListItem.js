import React,{Component} from 'react';
import {
  Text,
  TouchableWithoutFeedback,
  View,
  LayoutAnimation
} from 'react-native';
import {connect } from 'react-redux';
import {CardSection} from './common';
import * as actions from '../actions';
class ListItem extends Component{
    componentWillUpdate(){
      LayoutAnimation.spring();
    }
    renderDescription(){
      const {library, expanded} = this.props;
      if(expanded){
        return (
          <CardSection>
          <Text style={{flex:1,fontSize:18,paddingLeft:5,paddingRight:5}}>
          {library.description}
          </Text>
          </CardSection>
        );
      }
    }
    render(){
      const {titleStyle} = styles;
      const {id,title} = this.props.library;
      console.log(this.props);
      return (
        <TouchableWithoutFeedback onPress={()=> this.props.selectLibrary(id)}>
          <View>
            <CardSection>
              <Text style={titleStyle}>
                {title}
              </Text>
            </CardSection>
            {this.renderDescription()}
          </View>
        </TouchableWithoutFeedback>
      )
    }
}

const styles={
  titleStyle:{
    fontSize:18,
    paddingLeft:15
  }
}
const mapStateToProps= (state,ownProps)=>{
  return {expanded:(ownProps.library.id===state.selectedLibararyId)};
};
export default connect(mapStateToProps,actions)(ListItem);
