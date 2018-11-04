import React, { Component } from 'react';
import CountrySegmentComponent from './CountrySegmentComponent'
// import './App.css';
import CardComponent from './CardComponent'
import { Image } from 'semantic-ui-react'

import imageSrc from './cultural-background.png';

class CulturePage extends Component {
  render() {
    let data= this.props

    return (
      <Image src={imageSrc}/>
     //  <div className="CulturePage">
     //    <header className="culture-header">
     //
     //  {/* <CountrySegmentComponent/> */}
     //  { this.props.countries ? this.props.countries.map(country=>
     //  <CardComponent country={country}/>)
     // : ''}
     //    </header>
     //  </div>
    );
  }
}

export default CulturePage;
