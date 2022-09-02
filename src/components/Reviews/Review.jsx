import React from 'react';
import classes from "./Review.module.css"

const Review = (props) => {
    return (
        <div className = {classes.review}>
            <div className = {classes.reviewHeader}>
                <div className = {classes.reviewLogo}> <img src="img/reviewPeople.svg" alt="" /> </div>
                <div className = {classes.reviewRes}> <img src="img/satisfaction.svg" alt="" /></div>
                
            </div>
                <div className = {classes.reviewAutor}> {props.autor} <br/> <span>отзыв о</span> {props.company} </div>
                 <hr />
                <div className = {classes.text}>{props.text}</div> 
        </div>
        
    );
}

export default Review;