import React, {Component} from "react";
import { Alert } from "react-native";
import Login from "./Login";

export default class Register extends Component{
    constructor(){
        super();
        this.state={
            email:"",
            password:"",
            confirm_password:"",
            first_name:"",
            last_name:""
        }
    }

    registerUser=(email,password,confirm_password,first_name,last_name)=>{
        if(password===confirm_password){
            firebase.auth()
            .createUsetWithEmailAndPassword(email,password)
            .then((userCredential)=>{
                Alert.alert("User Registered")
                this.props.navigation.replace("Login")
                firebase.database().ref("/users/"+userCredential.user.uid)
                .set({
                    email:userCredential.user.email,
                    first_name:first_name,
                    last_name:last_name
                })
            })
            .catch(error=>Alert.alert(error.message))
        }
        else{
            Alert.alert("Password doesn't matches")
        }
    }
}