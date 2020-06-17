import React, { Component } from 'react';
import { Container, LineOrange, CardOrder, SearchBox, DayOrders, Orders } from './styles'
import { FaPlus, FaSearch, FaFilter } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Sidebar from '../../components/Sidebar'
import Header from '../../components/Header'

class Main extends Component {
    
    state = { 
        
    }

    componentDidMount(){
        this.setState({
            
        })
    }

    render() { 
        return ( 
            <>
                <Sidebar/>
                <Header/>
                <Container>

                    <div>
                        <h3>Olá, Vanusa!</h3>
                        <LineOrange/>
                        <Link to="/pedidos/novo_pedido">
                            <CardOrder>
                                <FaPlus color="#FF8822" size={18} />
                                <span>FAZER NOVO PEDIDO</span>
                            </CardOrder>
                        </Link>

                        <SearchBox>
                            <FaSearch color="#FF8822" size={18} />
                            <input 
                                type="text"
                                placeholder="Procure o pedido aqui..."
                            />
                            <FaFilter color="#FF8822" size={18} />
                        </SearchBox>
                    </div>
                    <Orders>
                        <DayOrders>
                            <span> 
                                <b>13/05/2019,</b> Você vendeu <b>R$ 45,80</b>
                            </span>
                            <Link  to="/pedidos/cliente/2">
                                <CardOrder>
                                    <img 
                                        src="https://www.sonoticias.com.br/wp-content/uploads/2019/12/12189063_192902174380813_6192279883125431059_n-596x556.jpg" 
                                        alt=""
                                    />
                                    <div>
                                        <div>
                                            <h6><b>Marcel Batista</b></h6>
                                            <span><b>R$ 3,50</b></span>
                                        </div>
                                        <p>cuscuz com calabresa, suco de laranja.</p>
                                    </div>
                                    
                                </CardOrder>
                            </Link>
                            <CardOrder>
                                <img 
                                    src="https://www.sonoticias.com.br/wp-content/uploads/2019/12/12189063_192902174380813_6192279883125431059_n-596x556.jpg" 
                                    alt=""
                                />
                                <div>
                                    <div>
                                        <h6><b>Fernanda Siqueira</b></h6>
                                        <span><b>R$ 7,90</b></span>
                                    </div>
                                    <p>Iogurte desnatado com maçã.</p>
                                </div>
                                
                            </CardOrder>
                            <CardOrder>
                                <img 
                                    src="https://lh3.googleusercontent.com/proxy/PGLAvQRxP3bgH0q3dgwYTpofkCCeOlUCAe4PDUaF8CBdrI-5aVPng4E_vIpGd5p7Sh64w5ZjtRH-7qPKQiJrdZYjWA71L6OBoZlD_KnOcKphAI6JxioN32_rETGUEdnU" 
                                    alt=""
                                />
                                <div>
                                    <div>
                                        <h6><b>Luiz Oliveira</b></h6>
                                        <span><b>R$ 4,50</b></span>
                                    </div>
                                    <p>2x bolo frito, café c/ leite.</p>
                                </div>
                                
                            </CardOrder>
                        </DayOrders>

                        <DayOrders>
                            <span> 
                                <b>09/05/2019,</b> Você vendeu <b>R$ 123,50</b>
                            </span>
                            <CardOrder>
                                <img 
                                    src="https://lh3.googleusercontent.com/proxy/PGLAvQRxP3bgH0q3dgwYTpofkCCeOlUCAe4PDUaF8CBdrI-5aVPng4E_vIpGd5p7Sh64w5ZjtRH-7qPKQiJrdZYjWA71L6OBoZlD_KnOcKphAI6JxioN32_rETGUEdnU" 
                                    alt=""
                                />
                                <div>
                                    <div>
                                        <h6><b>Ana Virlania</b></h6>
                                        <span><b>R$ 5,00</b></span>
                                    </div>
                                    <p>2x sanduíche de pão de arroz, vitamina de goiaba.</p>
                                </div>
                                
                            </CardOrder>
                            <CardOrder>
                                <img 
                                    src="https://lh3.googleusercontent.com/proxy/PGLAvQRxP3bgH0q3dgwYTpofkCCeOlUCAe4PDUaF8CBdrI-5aVPng4E_vIpGd5p7Sh64w5ZjtRH-7qPKQiJrdZYjWA71L6OBoZlD_KnOcKphAI6JxioN32_rETGUEdnU" 
                                    alt=""
                                />
                                <div>
                                    <div>
                                        <h6><b>Marcel Baptista</b></h6>
                                        <span><b>R$ 3,50</b></span>
                                    </div>
                                    <p>cuscuz com calabrasa, suco de maracujá</p>
                                </div>
                                
                            </CardOrder>
                        </DayOrders>

                    </Orders>
                </Container>
            </>
        );
    }
}
 
export default Main;
