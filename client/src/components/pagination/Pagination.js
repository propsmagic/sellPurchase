import React from 'react'
import classes from './Pagination.module.css'

function Pagination(props) {
    let pageNo = 1;

    const pagePostHandler=(e)=>{
        let firstRange = (e.target.value-1)*5;
        let secondRange = e.target.value*5;

        props.postRange(firstRange,secondRange)

        //console.log(firstRange,secondRange)
    } 
  return (
    <React.Fragment>
        {
        props.pageBtnCount.map((index)=>{
            return(<button key={index} value={pageNo++} onClick={pagePostHandler} className={classes.pageButton}>{pageNo-1}</button>)
        })
        }
    </React.Fragment>
  )
}

export default Pagination