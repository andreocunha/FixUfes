import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import './styles.css';

import logo from '../../assets/logo_ufes.png';
import trabalhadores from '../../assets/trabalhadores_ufes.png';

const Home = () => {
    return (
        <div id="page-home">
            <div className="content">
                <header>
                    <img src={logo} alt="FixUfes"/>
                </header>

                <main>
                    <h1>Melhore a Ufes!</h1>
                    <p>Ajude a tornar a melhor universidade do Estado ainda melhor. Indique no mapa quais pontos da Ufes precisam de melhorias, facilitando o trabalho dos funcionários que irão conserta-los.</p>

                    <Link to="/create-point">
                        <span>
                            <FiLogIn />
                        </span>
                        <strong>Cadastre um ponto de melhoria</strong>
                    </Link>
                </main>
            </div>
        </div>
    )
}

export default Home;


