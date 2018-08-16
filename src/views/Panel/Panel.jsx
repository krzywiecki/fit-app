import React, { PureComponent } from 'react';
import { Route } from 'react-router-dom';
import { Dashboard, PanelPage1 } from './views';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Main } from './components/Main';
import { Footer } from './components/Footer';

class Panel extends PureComponent {
  render() {
    return (
      <div className="panel">
        <Header />
        <Sidebar />
        <Main>
          <Route path="/panel/dashboard" component={Dashboard} />
          <Route path="/panel/panel-page-1" component={PanelPage1} />
        </Main>
        <Footer />
      </div>
    );
  }
}

export default Panel;
