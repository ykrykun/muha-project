import React from 'react';
import Filteritem from './Filteritem';
import classes from './Findjob.module.css';
import Vacancy from './Vacancy';

const Findjob = (props) => {
    return (
        <div className = {classes.wrap}>
            <div className = {classes.find}>
                <div className = {classes.filterBlock}>
                    <div className = {classes.filterBtn}>
                        <img className = {classes.icon} src="/img/eyeIcon.svg" alt="" />
                        <p>Зарплаты по регионам</p>
                    </div>

                    <div className = {classes.filters}>
                        <Filteritem />
                        <Filteritem />
                        <Filteritem />
                        <hr />
                        <div className = {classes.filterClear}>Сбросить все фильтры</div>
                    </div>
                </div>
                    <div className = {classes.vacancy}>
                        <Vacancy />
                        <Vacancy />
                        <Vacancy />
                        <Vacancy />
                        <Vacancy />
                        <Vacancy />
                    </div>
            </div>
        </div>
    );
}

export default Findjob;