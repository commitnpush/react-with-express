import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './Header.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

class Header extends Component {
  render() {
    return (
      <div className="navigation">
        <nav>
          <div className={cx('nav', 'nav-wrapper', 'teal', 'lighten-1')}>
            <Link to="/" className={cx('brand-logo', 'left')}>
              IN & OUT
            </Link>
            <div className={cx('right')}>
              <ul>
                <li>
                  <a>
                    <i
                      className={cx('material-icons', 'search-icon')}
                      onClick={this.toggleSearch}
                    >
                      search
                    </i>
                  </a>
                </li>
                <li>
                  <Link to="/chat">
                    <i
                      className={cx('material-icons', 'search-icon')}
                      onClick={this.toggleSearch}
                    >
                      chat
                    </i>
                  </Link>
                </li>
                <li>
                  <a onClick={this.props.onLogout}>
                    <i className={cx('material-icons')}>lock_open</i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

Header.propTypes = {
  isLoggedIn: PropTypes.bool,
  onLogout: PropTypes.func
};

Header.defaultProps = {
  isLoggedIn: false,
  onLogout: () => console.error('onLogout function is not defined')
};

export default Header;
