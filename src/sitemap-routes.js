import React from 'react';
import { Route } from 'react-router';
 
export default (
    <Route>
	<Route path='/' />
    <Route path='/blog' />
    <Route path='/search'/>
    <Route path='/registration' />
    <Route path='/login' />
	<Route path='/blog/:blogID' />
    </Route>
);