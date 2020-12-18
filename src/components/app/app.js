import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorBoundry from '../error-boundry';

import SwapiService from "../../services/swapi-service";

import './app.css';
import { SwapiServiceProvider } from '../swapi-service-context';
import { PeoplePage, StarshipsPage, PlanetsPage } from '../pages';

export default class App extends Component {

  swapiService = new SwapiService();

  render() {

    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.swapiService}>
          <div className="stardb-app">
            <Header />

            <RandomPlanet />

            <PeoplePage />

            <StarshipsPage />

            <PlanetsPage />

          </div>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}
