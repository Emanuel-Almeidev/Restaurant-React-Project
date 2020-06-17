import React, { Component } from 'react'

import { MdArrowBack } from 'react-icons/md'

import { Link } from 'react-router-dom'

import { Container, LineOrange, Orders, DayOrders, CardOrder } from './styles'

import Sidebar from '../../components/Sidebar'
import Header from '../../components/Header'

export default class ClientOrders extends Component {
    state = {

    }

    render() {
        return (
            <>
                <Header/>
                <Sidebar/>
                
                <Container>
                    <div>
                        <Link to="/pedidos">
                            <MdArrowBack color="#FF8822" size={18} />
                        </Link>
                        <h3>Pedidos do Luiz</h3>
                        <LineOrange/>
                    </div>
                    <Orders>
                        <DayOrders>
                            <span> 
                                <b>13/05/2019</b>
                            </span>
                            <CardOrder>
                                <img 
                                    src="https://i.pinimg.com/originals/00/15/56/001556c500e003afeba6cf4806811055.jpg" 
                                    alt=""
                                />
                                <div>
                                    <div>
                                        <h6><b>2x Bolo frito + Café c/ leite</b></h6>
                                    </div>
                                    <p>R$ 4,25</p>
                                </div>
                                
                            </CardOrder>
                        </DayOrders>

                        <DayOrders>
                            <span> 
                                <b>13/05/2019</b>
                            </span>
                            
                            <CardOrder>
                                <img 
                                    src="https://i.pinimg.com/originals/00/15/56/001556c500e003afeba6cf4806811055.jpg" 
                                    alt=""
                                />
                                <div>
                                    <div>
                                        <h6><b>2x Bolo frito + Café c/ leite</b></h6>
                                    </div>
                                    <p>R$ 4,25</p>
                                </div>
                                
                            </CardOrder>
                            
                        </DayOrders>
                    </Orders>
                    

                </Container>
            </>
        )
    }
}
