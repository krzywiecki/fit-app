import React, { PureComponent } from 'react';
import './HeaderStyles.css';
import Logo from '../../../../assets/img/brand/logo.svg';

class HeaderComponent extends PureComponent {
  render() {
    return (
      <header className="header">
        This is Website Header
      </header>
    );
  }
}

export default HeaderComponent;
