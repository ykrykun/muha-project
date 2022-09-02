import React from 'react';
import classes from "./Navigation.module.css";

const Navigation = () => {
    return (
        <div className={classes.navig}>
           <a href="/home"><img className={classes.logo} src="img/logo.svg" alt=""/></a> 
            <nav>
                <a className={classes.item}>Оставить отзыв</a>
                <a href ="/findjob" className={classes.item}>Найти работу</a>
                <a className={classes.item}>Акции</a>
                <a className={classes.item}>Справка</a>
                <a className={classes.item}>Русский</a>
                <a href ="/login" className={classes.item}><img className={classes.account} src="img/account.svg" alt=""/>Войти</a>
            </nav>
        </div>
        
    );
}

export default Navigation;