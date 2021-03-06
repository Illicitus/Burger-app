import React from 'react';

import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';

import classes from './CheckoutSummary.css'


const checkoutSummary = (props) => {
    return (
        <div className={classes.CheckoutSummary}>
            <h1> Some text </h1>
            <div className={classes.Burger}>
                <Burger ingredients={props.ingredients}/>
            </div>
            <Button
                btnType='Danger'
                clicked={props.checkoutCancelled}
            >CANCEL</Button>
            <Button
                btnType='Success'
                clicked={props.checkoutContinued}
            >CONTINUE</Button>
        </div>
    )
};

export default checkoutSummary;