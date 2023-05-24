import React from 'react';
import { Link } from './common/icons/Link';
import { Header } from './resume/Header';


const App = () =>  (
  <Header 
    name="Stephen Roth"
    tagline="Making something of myself" 
    website="designbystephen.com"
    email="designbystephen@gmail.com"
    git="github.com/designbystephen"
    location="St. Louis, MO"
    avatar="images/stephen-roth-avatar.png"
  />
);

export default App;
