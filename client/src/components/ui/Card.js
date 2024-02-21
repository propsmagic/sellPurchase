import React from 'react'
import classes from './Card.module.css'
import Button from './Button'
import { Link } from 'react-router-dom'
function Card(props) {
  return (
    <div className={classes.card}>
        <div>
          <img src={props.imagePath} alt={props.imageAlt}/>
        </div>
        <div>
            <h3>{props.title}</h3>
            <p>{props.briefDescription}</p>
            <div className={classes.cardFooter}>
              <Link to={`/postdetails/${props.postID}`}>
                <Button   buttonName = {"Read More"} />
              </Link>
            </div>
        </div>
        
    </div>
  )
}

export default Card