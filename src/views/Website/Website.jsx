import React, { PureComponent } from 'react';
import { Route } from 'react-router-dom';
import { Home, Page } from './views';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { Footer } from './components/Footer';
import './WebsiteStyles.css';

class Website extends PureComponent {
  render() {
    return (
        <div className="website">
          <Header />
          <Main>
            <Route path="/" exact component={Home} />
            <Route path="/page" component={Page} />
          </Main>
          <Footer />
        </div>
    );
  }
}

export default Website;
