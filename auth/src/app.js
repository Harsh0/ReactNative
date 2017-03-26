import React, { Component } from 'react';
import {View} from 'react-native';
import firebase from 'firebase';
import LoginForm from './components/LoginForm.js';
import {Header,Card,CardSection,Button,Spinner} from './components/common';

class App extends Component{
  state={loggedIn:null};
  componentWillMount(){
    firebase.initializeApp({
      apiKey: 'AIzaSyD8S9IUA5wNQqWcCQaQ8qExDXhqjsMMfjU',
      authDomain: 'auth-72bad.firebaseapp.com',
      databaseURL: 'https://auth-72bad.firebaseio.com',
      storageBucket: 'auth-72bad.appspot.com',
      messagingSenderId: '500058703002'
    });
    firebase.auth().onAuthStateChanged((user)=>{
      if(user){
        this.setState({loggedIn:true});
      }else{
        this.setState({loggedIn:false});
      }
    });
  }
  onLogout(){
    firebase.auth().signOut();
  }
  renderContent(){
    switch(this.state.loggedIn){
      case true:
        return (
          <Card>
          <CardSection>
          <Button onPress={this.onLogout.bind(this)}>
          Logout
          </Button>
          </CardSection>
          </Card>
        )
      case false:
        return <LoginForm />
      default:
        return <Spinner size="large" />
    }
  }
  render(){
    return (
      <View>
      <Header headerText='Authentication' />
      {this.renderContent()}
      </View>
    );
  }
};


export default App;
