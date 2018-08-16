import React, { PureComponent } from 'react';
import './MainStyles.scss';

class MainComponent extends PureComponent {
  render() {
    return (
      <main className="main">
        { this.props.children }
      </main>
    );
  }
}

export default MainComponent;
