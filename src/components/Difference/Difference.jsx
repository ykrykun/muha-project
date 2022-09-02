import React from 'react';
import classes from "./Difference.module.css";

const Difference = () => {
    return (
        <div className = {classes.wrap}>
            <div className = {classes.textBlock}>
                <div className = {classes.title}>
                    <h2 className = {classes.textTitle}>Это упростит Вашу жизнь</h2>
                    <p className = {classes.text}>Наша компания здесь, чтобы в разы увеличить
                     возможности людей, которые зарабативают деньги заграницей</p>
                </div>

                <div className = {classes.sectorWrap}>
                    <div className = {classes.sector}>
                        <div className = {classes.header}>
                            <img src="./img/search.svg" alt="" className = {classes.logo} />
                            <h3>Поиск</h3>
                        </div>
                        <div className = {classes.textSector}>
                            <p className = {classes.text}>Найдите нужную Вам вакансию по адресу, имени компании или на карте. Чтобы избежать возмоных неожиданных неприятностей</p>
                        </div> 
                    </div>
                    <div className = {classes.sector}>
                        <div className = {classes.header}>
                            <img src="./img/review.svg" alt="" className = {classes.logo} />
                            <h3>Оставить отзыв</h3>
                        </div>
                        <div className = {classes.textSector}>
                            <p className = {classes.text}>Разместите отзывы о своих бывших работодателях. Или анонимно, если это Ваш текущий работодатель</p>
                        </div> 
                    </div>
                    <div className = {classes.sector}>
                        <div className = {classes.header}>
                            <img src="./img/support.svg" alt="" className = {classes.logo} />
                            <h3>Взаимная помощь</h3>
                        </div>
                        <div className = {classes.textSector}>
                            <p className = {classes.text}>Есди Вы оставляете хороший отзыв, Вы помогаете другим людям найти хорошую работу. Если плохой, тогда помогаете другим людям не попасть в проблемы</p>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Difference;