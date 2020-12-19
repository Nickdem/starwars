import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorBoundry from '../error-boundry';
import { PeoplePage, StarshipsPage, PlanetsPage, LoginPage, SecretPage } from '../pages';
import { StarshipDetails } from '../sw-components';

import SwapiService from '../../services/swapi-service';
import { SwapiServiceProvider } from '../swapi-service-context';

import './app.css';

export default class App extends Component {

  state = {
    isLoggedIn: false
  };

  onLogin = () => {
    this.setState({ isLoggedIn: true });
  };

  swapiService = new SwapiService();

  render() {

    const { isLoggedIn } = this.state;

    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.swapiService}>
          <BrowserRouter>
              <Header />

              <RandomPlanet />
              <Switch>
                <Route path="/" exact render={() => <h2 style={{fontSize: '32px', textAlign: 'center'}}>Welcome to StarDB</h2>} />
                <Route path="/people/:id?" component={PeoplePage} />
                <Route path="/starships" exact component={StarshipsPage} />
                <Route path="/planets" component={PlanetsPage} />
                <Route path="/starships/:id" render={({ match }) => <StarshipDetails itemId={match.params.id} />} />
                <Route path="/secret" render={() => <SecretPage isLoggedIn={isLoggedIn} />} />
                <Route path="/login" render={() => <LoginPage onLogin={this.onLogin} isLoggedIn={isLoggedIn} />} />
                <Route render={() => <h2>Page not found</h2>} />
              </Switch>

          </BrowserRouter>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}
