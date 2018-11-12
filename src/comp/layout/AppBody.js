import { Redirect, Route, Switch } from 'react-router-dom';
import HomePage from '../homePage/HomePage';
import ContactListPage from '../contactListPage/ContactListPage';
import NotFound from '../notFound/NotFound';
import React from 'react';
import ContactDetailPage from '../contactDetailPage/ContactDetailPage';

const AppBody = () => (
  <div className={ 'app-body' }>
    <Switch>
      <Route exact path="/" component={ HomePage } />
      <Redirect from={ '/home' } to={ '/' } />
      <Route path="/contact-list" component={ ContactListPage } />
      <Route path="/contact-detail" component={ ContactDetailPage } />
      <Route component={ NotFound } />
    </Switch>
  </div>
);

export default AppBody;
