import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';

import classes from '../NavigationItems/NavigationItems.module.css';

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem active>Burger Builder</NavigationItem>
        <NavigationItem>Checkout</NavigationItem>
    </ul>
);

export default navigationItems;