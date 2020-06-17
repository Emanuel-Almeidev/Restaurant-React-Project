import React, { Component } from 'react';
import { Aside, Button, Menu } from './styles'
import { Link } from 'react-router-dom'



import logo from '../../assets/logo-white.svg'
import iconPedidosWhite from '../../assets/icon-pedidos-white.svg'
import iconPedidosOrange from '../../assets/icon-pedidos-orange.svg'
import iconClientesWhite from '../../assets/icon-clientes-white.svg'
import iconClientesOrange from '../../assets/icon-clientes-orange.svg'

class Sidebar extends Component{

    state = {
        buttons: [
            {path: 'pedidos', label: 'PEDIDOS', iconWhite: iconPedidosWhite, iconOrange: iconPedidosOrange},
            {path: 'abertos', label: 'EM ABERTOS', iconWhite: iconPedidosWhite, iconOrange: iconPedidosOrange},
            {path: 'encerrados', label: 'ENCERRADOS', iconWhite: iconPedidosWhite, iconOrange: iconPedidosOrange},
            {path: 'clientes', label: 'CLIENTES', iconWhite: iconClientesWhite, iconOrange: iconClientesOrange},
        ],
        activeButtonIndex: 0,
    }

    componentDidMount(){
        const { buttons } = this.state;
        const path = window.location.pathname.split('/')

        
        this.setState({
            activeButtonIndex: buttons.findIndex(button => button.path === path[1])
        })
        
    }   

    handleClick = (index) => {
        this.setState({
            activeButtonIndex: index,
        })

    }
       
    render(){
        const { buttons, activeButtonIndex } = this.state;
        return(
            <Aside>
                <img src={logo} alt=""/>
                <Menu active={activeButtonIndex}>
                    {buttons.map((button, index) => (
                        <Link to={`/${button.path}`} key={ button.label }>
                            <Button
                                type="button"
                                onClick={() => this.handleClick(index)}
                            >
                                <img src={index === activeButtonIndex ? button.iconOrange : button.iconWhite } alt=""/>
                                <span>{button.label}</span>
                            </Button>
                        </Link>
                        
                        
                    ))}
                </Menu>
            </Aside>
        )
    }
}

export default Sidebar;