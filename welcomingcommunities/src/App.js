import React, { Component } from 'react';
// import Card from './components/CardComponent'
import './App.css';
import LandingPage from './components/LandingPage'
import CulturePage from './components/CulturePage'
import Map from './components/Map'
import OrganizationMap from './components/OrganizationMap'
import { Button, Header, Image, Modal } from 'semantic-ui-react'
var api_key = process.env.API_KEY;


class App extends Component {
  state={
    data:[],
  }
  data = async () => {
    let data = await fetch('https:api.airtable.com/v0/appQVHyUAtu8PtEYC/CountryInfo?maxRecords=3&view=Grid%20view',{
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer keyvXxrgLJDpKDquk`
    }
  }
)
  let res = await data.json();
  let countryInfo = res.records.map(e => e.fields)
  this.setState({data: countryInfo})
  }
  componentDidMount() {
    this.data()
    }
  render() {

    return (
      <div className="App">
        <header className="App-header">

         <LandingPage/>
        </header>

        <CulturePage countries={this.state.data}/>

        <Modal trigger={<Button>Get Involved</Button>}>
          <Modal.Header>Get Involved</Modal.Header>
          <Modal.Content>
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScGlPX7DhNrSbsibAcO_JCbMr74JAJLQSKxwLpOc0OnWD9VuA/viewform?embedded=true" width="640" height="947" frameBorder="0" marginHeight="0" marginWidth="0">Loading...</iframe>
          </Modal.Content>
        </Modal>

        <h1>Resettlement Voluntary Agency Local Affiliates</h1>
        <OrganizationMap/>

      </div>
    );
  }
}

export default App;
