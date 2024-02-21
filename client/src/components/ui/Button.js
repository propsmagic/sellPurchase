import React from 'react';
import classes from './Button.module.css';

function Button(props) {
  return (
    <React.Fragment>
        <button className={classes.button}  type={props.type}> {props.buttonName} </button>
    </React.Fragment>
  ) 
}

export default Button