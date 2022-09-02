import React from 'react';
import classes from './Vacancy.module.css';

const Vacancy = () => {
    return(
        <div className = {classes.vacancyBlock}>
            <div className = {classes.block}>
                <div className = {classes.satisfaction}> <img className = {classes.satisfactionImg} src="img/satisfaction.svg" alt="" /> 4 отзыва</div>
                <div className = {classes.save}>Сохранить</div>
            </div>
            <div className = {classes.block}>
                <div className ={classes.vacancyTitle}>
                    <h3>Завод Bosh (Сбор бытовой техники) от 3680 zl <br /> Семейные пары</h3>
                    <p>Агенство “Тамара”</p>    
                </div>
                <div>Заплата</div>
            </div>
            <div className ={classes.vacancyText}>
                <p>Официальное трудоустройство (umowa zlecenia).
Комплект постельного белья предоставляется по желанию (стоимость 50 злотых) высчитывается с зарплаты. Рабочая одежда выдается бесплатно.</p>
            </div>
            <div className = {classes.block}>
                <div>Польша, Лодзь</div>
                <div className = {classes.block}> 
                    <div className = {classes.footerAny}>безопасность</div>
                    <div className = {classes.footerAny}>срочность</div>
                </div>
               
            </div>
        </div>
    );
}

export default Vacancy;