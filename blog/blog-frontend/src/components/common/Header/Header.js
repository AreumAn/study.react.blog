import React from 'react';
import styles from './Header.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';

const cx = classNames.bind(styles);

const Header = () => (
    <header className={cx('header')}>
        <div className={cx('header-content')}>
            <div className={cx('brand')}>
                <Link to="/">Areum React!</Link>
            </div>
            <div className={cx('right')} >
                <Button theme="outline" to="/editor"> Write POST</Button>
            </div>
        </div>
    </header>
);



export default Header;