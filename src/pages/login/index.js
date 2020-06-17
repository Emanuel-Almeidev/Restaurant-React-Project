import React, { Component } from 'react';
import { Container, Header, Form } from './styles';
import logo from '../../assets/logo-orange.svg'
import { Link } from 'react-router-dom'


class Login extends Component {
    
    state = { 
        email: '',
        password: ''
     }

     
    handleEmailChange = (e) => {
        this.setState({
            email: e.target.value
        })
    }
        
    handlePasswordChange = (e) => {
        this.setState({
            password: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        //Simulando um login
        this.props.history.push('/pedidos')
    }
    1

    render() { 
        return (
            <Container>
                <Header>
                    <img src={logo} alt=""/>
                    <h3>Seja bem-vindo!</h3>
                    <p>Nós sabemos a importância de estar sempre de barriga
                        cheia e o quanto isso pode ajudar no seu dia.</p>
                </Header>
                <Form onSubmit={this.handleSubmit}>
                    <input 
                        type="text"
                        placeholder="Email"
                        value={this.state.email}
                        onChange={this.handleEmailChange}
                    />
                    <input 
                        type="password"
                        placeholder="Senha"
                        value={this.state.password}
                        onChange={this.handlePasswordChange}
                    />
                    <Link to="/">RECUPERAR MINHA SENHA</Link>                    
                    <button type="submit">ENTRAR</button>
                </Form>
            </Container>
        );
    }
}
 
export default Login;