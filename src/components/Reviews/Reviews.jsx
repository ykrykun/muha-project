import React from 'react';
import Review from './Review';
import classes from "./Reviews.module.css"

const Reviews = () => {
    return (
        <div className = {classes.wrap}>
            <h2>Отзывы</h2>
            <div className = {classes.reviewWrap}>
                <div className = {classes.reviewBlock}>
                    <Review autor ="Анонимный пользователь" company = "Robotechniks intercorp" text = "При выполнении плана от 76% - 104%: - 13,53 зл/час (основная ставка). При выполнении плана от 105%: - 14,35 зл/час (основная ставка) ДОБАВИТЬ РЕЗЮМЕ" />
                    <Review autor ="Анонимный пользователь" company = "Robotechniks intercorp" text = "При выполнении плана от 76% - 104%: - 13,53 зл/час (основная ставка). При выполнении плана от 105%: - 14,35 зл/час (основная ставка) ДОБАВИТЬ РЕЗЮМЕ" />
                </div>

                <div className = {classes.reviewBlock}>
                    <Review autor ="Анонимный пользователь" company = "Robotechniks intercorp" text = "При выполнении плана от 76% - 104%: - 13,53 зл/час (основная ставка). При выполнении плана от 105%: - 14,35 зл/час (основная ставка) ДОБАВИТЬ РЕЗЮМЕПри выполнении плана от 105%: - 14,35 зл/час (основная ставка) ДОБАВИТЬ РЕЗЮМЕПри выполнении плана от 105%: - 14,35 зл/час " />
                    <Review autor ="Анонимный пользователь" company = "Robotechniks intercorp" text = "При выполнении плана от 76% - 104%: " />
                </div>

                <div className = {classes.reviewBlock}>
                    <Review autor ="Анонимный пользователь" company = "Robotechniks intercorp" text = "При выполнении плана от 76% - 104%: " />
                    <Review autor ="Анонимный пользователь" company = "Robotechniks intercorp" text = "При выполнении плана от 76% - 104%: - 13,53 зл/час (основная ставка). При выполнении плана от 105%: - 14,35 зл/час (основная ставка) ДОБАВИТЬ РЕЗЮМЕПри выполнении плана от 105%: - 14,35 зл/час (основная ставка) ДОБАВИТЬ РЕЗЮМЕПри выполнении плана от 105%: - 14,35 зл/час " />
                </div>

                <div className = {classes.reviewBlock}>
                    <Review autor ="Анонимный пользователь" company = "Robotechniks intercorp" text = "При выполнении плана от 76% - 104%: - 13,53 зл/час (основная ставка). При выполнении плана от 105%: - 14,35 зл/час (основная ставка) ДОБАВИТЬ РЕЗЮМЕПри выполнении плана от 105%: - 14,35 зл/час (основная ставка) ДОБАВИТЬ РЕЗЮМЕПри выполнении плана от 105%: - 14,35 зл/час " />
                    <Review autor ="Анонимный пользователь" company = "Robotechniks intercorp" text = "При выполнении плана от 76% - 104%: " />
                </div>
                
            </div>
         
        </div>
    );
}

export default Reviews;