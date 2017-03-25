

//import libarary to make component
import React from 'react';
import { Text, View } from 'react-native';


const style = {
	viewStyle:{
		backgroundColor:'#F8F8F8',
		justifyContent:'center',
		alignItems:'center',
		height:60,
		paddingTop:0,
		shadowColor:'#42f445',
		shadowOffset:{width:0,height:2},
		shadowOpacity:0.2,
		elevation:2,
		position:'relative'
	},
	textStyle:{
		fontSize:20
	}
};

//make a component
const Header = (props) => {
	const {textStyle, viewStyle} = style;
	 return (
	 	<View style={viewStyle}>
	 		<Text style={textStyle} >{props.headerText}</Text>
	 	</View>
	 	);
};

//make a component available to other part of app
export default Header;
