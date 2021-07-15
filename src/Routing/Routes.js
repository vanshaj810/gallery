import React from 'react';
import {Switch,Route} from 'react-router-dom';
import Login from '../Login/Login';
import Signup from '../Signup/Signup';
import Profile from '../Profile/Profile';
import Artwork from '../Artwork/Artwork';
import Artist from '../Artist/Artist';
import Productinfo from '../Productinfo/Productinfo';
import Paintingupload from '../paintingupload/paintingupload';
import Filter from '../Filter/Filter';
import Banner from '../banner/banner';
import About from '../about/about';
import Paintinglist from '../paintings/painting';
import Paintingofmonth from '../paintingofmonth/paintingofmonth';

function Routes() {
    return (
       <Switch>
           <Route path="/" exact component={Banner}/>
           <Route path="/profile" component={Profile} />
           <Route path="/login" component={Login}/>
           <Route path="/uploadartwork" component={Artwork}/>
           <Route path="/artist" component={Artist}/>
           <Route path="/signup" component={Signup}/>
           <Route path="/paintinginfo" component={Productinfo}/>
           <Route path="/paintingupload" component={Paintingupload}/>
           <Route path="/filter" component={Filter}/>
           <Route path="/about" component={About}/>
           <Route path="/paintinglist" component={Paintinglist}/>
           <Route path="/paintingofmonth" component={Paintingofmonth}/>
           <Route component={Banner}/>
       </Switch>
    )
}
export default Routes
