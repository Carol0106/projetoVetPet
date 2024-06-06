import React, { useEffect } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Slide from '../Components/Slide';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '../Assets/CSS/Style.css';
import invernoImage from '../Assets/IMG/img1.jpg';
import logo from '../Assets/IMG/lo.png';
import { initializeScripts } from '../Assets/JS/Script';

const Home = () => {
    useEffect(() => {
        const cleanup = initializeScripts();

        return () => {
            cleanup();
        };
    }, []);

    return (
        <div>
            <Header />

            <main>
                <section>
                    <div className='BannerP'>
                        <img src={logo} alt="Imagem 1" style={{ filter: 'invert(1)' }} />
                    </div>

                    <div className='cardMeio'>
                        <h3 className="text-center" style={{ color: '#fff' }}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry <br />
                            <span style={{ color: '#32AEAE' }}>Lorem Ipsum has been the industry's</span>  standard dummy text ever since the 1500s, when an <br />
                            unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </h3>

                        <div className="row card-container" style={{ display: 'flex', margin: '50px auto' }}>
                            <div className="card" id="card1">
                                <div className="original-content">
                                    <img src={invernoImage} alt="Imagem 1" />
                                    <p className="cardParagrafo">Lorem Ipsum is simply dummy*</p>
                                    <h3>PRIMEIRO</h3>
                                    <p>Lorem Ipsum is simply dummy text of the Lorem Ipsum is simply dummy text of the.</p>
                                    <a href="#" className="ver-datas" data-card="card1">VER MAIS</a>
                                </div>
                                <div className="dates-content">
                                    <h3 style={{ marginBottom: '56px' }}>PRIMEIRO</h3>
                                    <a className="clickPacote" href="" target="_blank" style={{ marginTop: '4px', padding: '4px 7px' }} data-rotulo="PRIMEIRO">PRIMEIRO</a>
                                    <a className="clickPacote" href="" target="_blank" style={{ marginTop: '4px', padding: '4px 7px' }} data-rotulo="PRIMEIRO">PRIMEIRO</a>
                                    <a className="clickPacote" href="" target="_blank" style={{ marginTop: '4px', padding: '4px 7px' }} data-rotulo="PRIMEIRO">PRIMEIRO</a>
                                    <a className="clickPacote" href="" target="_blank" style={{ marginTop: '4px', padding: '4px 7px' }} data-rotulo="PRIMEIRO">PRIMEIRO</a>
                                    <br />
                                    <a href="#" className="voltar" data-card="card1">VOLTAR</a>
                                </div>
                            </div>

                            <div className="card" id="card2">
                                <div className="original-content">
                                    <img src={invernoImage} alt="Imagem 2" />
                                    <p className="cardParagrafo">Lorem Ipsum is simply dummy*</p>
                                    <h3>SEGUNDO</h3>
                                    <p>Lorem Ipsum is simply dummy text of the Lorem Ipsum is simply dummy text of the.</p>
                                    <a href="#" className="ver-datas" data-card="card2">VER MAIS</a>
                                </div>
                                <div className="dates-content">
                                    <h3 style={{ marginBottom: '23px' }}>SEGUNDO</h3>
                                    <a className="clickPacote" href="#" target="_blank" style={{ marginTop: '4px', padding: '4px 7px' }} data-rotulo="SEGUNDO">SEGUNDO</a>
                                    <a className="clickPacote" href="#" target="_blank" style={{ marginTop: '4px', padding: '4px 7px' }} data-rotulo="SEGUNDO">SEGUNDO</a>
                                    <a className="clickPacote" href="#" target="_blank" style={{ marginTop: '4px', padding: '4px 7px' }} data-rotulo="SEGUNDO">SEGUNDO</a>
                                    <a className="clickPacote" href="#" target="_blank" style={{ marginTop: '4px', padding: '4px 7px' }} data-rotulo="SEGUNDO">SEGUNDO</a>
                                    <a className="clickPacote" href="#" target="_blank" style={{ marginTop: '4px', padding: '4px 7px' }} data-rotulo="SEGUNDO">SEGUNDO</a>
                                    <br />
                                    <a href="#" className="voltar" data-card="card2">VOLTAR</a>
                                </div>
                            </div>

                            <div className="card" id="card3">
                                <div className="original-content">
                                    <img src={invernoImage} alt="Imagem 3" />
                                    <p className="cardParagrafo">Lorem Ipsum is simply dummy*</p>
                                    <h3>TERCEIRO</h3>
                                    <p>Lorem Ipsum is simply dummy text of the Lorem Ipsum is simply dummy text of the!</p>
                                    <a href="#" className="ver-datas" data-card="card3">VER MAIS</a>
                                </div>
                                <div className="dates-content">
                                    <h3 style={{ marginBottom: '0' }}>TERCEIRO</h3>
                                    <a className="clickPacote" href="#" target="_blank" style={{ marginTop: '4px', padding: '4px 7px' }} data-rotulo="TERCEIRO">TERCEIRO</a>
                                    <a className="clickPacote" href="#" target="_blank" style={{ marginTop: '4px', padding: '4px 7px' }} data-rotulo="TERCEIRO">TERCEIRO</a>
                                    <a className="clickPacote" href="#" target="_blank" style={{ marginTop: '4px', padding: '4px 7px' }} data-rotulo="TERCEIRO">TERCEIRO</a>
                                    <a className="clickPacote" href="#" target="_blank" style={{ marginTop: '4px', padding: '4px 7px' }} data-rotulo="TERCEIRO">TERCEIRO</a>
                                    <br />
                                    <a href="#" className="voltar" data-card="card3">VOLTAR</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="fundo"></div>

                    <div className="destino" style={{marginTop:'20px', color:'#fff' }}>
                        <div className="container">
                            <Row className="text-center" style={{margin: '90px auto', textAlign: 'center', maxWidth: '750px'}}>
                                <h2>Lorem Ipsum is simply dummy text <br/>of the printing and typesetting industry</h2>

                                <Col sm={6}>
                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industryLorem Ipsum is simply dummy text of the printing and typesetting industryLorem Ipsum is simply dummy text of the printing and typesetting industry
                                    </p>
                                </Col>
                            </Row>
                        </div>

                        <Slide />
                    </div>
                </section>
            </main>

            
            <Footer />
        </div>
    );
};

export default Home;
