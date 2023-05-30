import React,{Component} from "react";
import { Alert } from "react-native";
import PostScreen from "./PostScreen";

export default class Login extends Component{
    constructor(){
        super();
        this.state={
            email:"",
            password:"",
            isLogined:false
        }
    }

    signIn= async (email, password) => {
        firebase.auth()
        .signInWithEmailAndPassword(email, password)
        .then(()=>{
            this.props.navigation.replace("PostScreen")
       })
        .catch(error=>{Alert.alert(error.message)})
    }
}