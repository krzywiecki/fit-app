import React, { PureComponent } from 'react';
import './HeaderStyles.css';
import Logo from '../../../../assets/img/brand/logo.svg';

class HeaderComponent extends PureComponent {
  render() {
    return (
      <header className="header">
        <img className="logo" src={Logo} />
      </header>
    );
  }
}

export default HeaderComponent;
