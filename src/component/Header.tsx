import React from 'react'
import { Link } from 'react-router-dom'

import './header.css'

export const Header: React.FC = () => {

    return (
        <div className="header-outer">
            <div className="header container">
                <div className="header__title">
                    <span>RGR</span>
                </div>
                <div className="header__line" />
                <div className="header__links">
                    <Link className="header__link" to="/clients">Клиент</Link>
                    <Link className="header__link" to="/masters">Мастера</Link>
                    <Link className="header__link" to="/materials">Материалы</Link>
                    <Link className="header__link" to="/moving_information">Информация о перемещении</Link>
                    <Link className="header__link" to="/services">Услуги</Link>
                    <Link className="header__link" to="/staff">Персонал</Link>
                    <Link className="header__link" to="/specializations">Специализации</Link>
                </div>
            </div>
        </div>
    )
}