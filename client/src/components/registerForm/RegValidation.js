import React from 'react'


const RegValidation=(fieldName, fieldValue) => {
    switch(fieldName) {
        case "userName" :
            if(fieldValue.length < 3){
                return "User name is too short";
            }else if(fieldValue.length >25){
                return "User name is too long";
            }else{
                return "";
            }
        break;

        case "userID":
            if(fieldValue.length < 8){
                return("UserID is too short")
            }else if(fieldValue.length >25){
                return("User name is too long")
            }else if(!fieldValue.includes("@")){
                    return("please include @")
            }else{
                return("")
            }
        break;

        case "password":
            if(fieldValue.length < 8){
                return("Password is too short")
            }else if(fieldValue.length >25){
                return("Password is too long")
            }else{
                return("")
            }
        break;
        default:{
            return ""
        }
    }
}


export default RegValidation