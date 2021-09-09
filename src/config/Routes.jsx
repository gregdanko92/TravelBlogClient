import React from 'react';
import HomePage from '../pages/HomePage';
import CreatePostPage from '../pages/Tiptap';
import CitiesIndexPage from '../pages/CitiesIndexPage';
import ArticlePage from '../pages/ArticlePage';
import CityShowPage from '../pages/CityShowPage';
import { Switch, Route } from 'react-router-dom';
import CreateCity from '../pages/CreateCity';
import SignupPage from '../pages/SignupPage';
import LoginPage from '../pages/LoginPage'
// import CityModel from '../models/CityModel';
import Tiptap from '../pages/Tiptap';
import Header from '../components/Header'


function Routes(){
  
    return(
        <Switch>

        <Route path='/' exact component={HomePage}/>
          
        {/* <Route path='/cities/:id' exact component={CityShowPage} /> */}
        <Route path='/cities/:id/create' component={Tiptap} />
        <Route exact path='/cities/:id'render={(props)=> <CityShowPage {...props} />} />
        
        <Route path='/cities' component={CitiesIndexPage} />

        {/* <Route path='/cities/:id' exact render={()=>{
          <CityShowPage cityData={cityData}/>}} /> */}

        <Route path='/cities/:id/:id' component={ArticlePage} />

        <Route path='/create' component={CreateCity} />

        <Route path='/signup' render={(props) => <SignupPage {...props} /> } />

        <Route path ='/login' render={(props) => <LoginPage {...props} /> } />

      </Switch>
        
    )
}

export default Routes;