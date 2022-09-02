import React from 'react';
import classes from "./Filteritem.module.css"

const Filteritem = (props) => {
    return (
        <div className = {classes.filterItem}>
            <h3 className = {classes.filterItemHeader}>Страна</h3>
                <div className = {classes.filterCheck}>

                    <label className = {classes.check} >
                        <input type="checkbox" className = {classes.checkInput} />
                        <p className = {classes.inputText}>Польша</p>   
                        <span className = {classes.filterSpan}>123</span>
                    </label>

                    <label className = {classes.check} >
                        <input type="checkbox" className = {classes.checkInput} />
                        <p className = {classes.inputText}>Литва</p>   
                        <span className = {classes.filterSpan}>123</span>
                    </label>

                    <label className = {classes.check} >
                        <input type="checkbox" className = {classes.checkInput} />
                        <p className = {classes.inputText}>Германия</p>   
                        <span className = {classes.filterSpan}>123</span>
                    </label>

                    <label className = {classes.check} >
                        <input type="checkbox" className = {classes.checkInput} />
                        <p className = {classes.inputText}>Чехия</p>   
                        <span className = {classes.filterSpan}>123</span>
                    </label>

                    <label className = {classes.check} >
                        <input type="checkbox" className = {classes.checkInput} />
                        <p className = {classes.inputText}>Австрия</p>   
                        <span className = {classes.filterSpan}>123</span>
                    </label>

                    <label className = {classes.check} >
                        <input type="checkbox" className = {classes.checkInput} />
                        <p className = {classes.inputText}>Бельгия</p>   
                        <span className = {classes.filterSpan}>123</span>
                    </label>

                    <label className = {classes.check} >
                        <input type="checkbox" className = {classes.checkInput} />
                        <p className = {classes.inputText}>Великобритания</p>   
                        <span className = {classes.filterSpan}>123</span>
                    </label>

                </div>
        </div>
    );
}

export default Filteritem;
