import React, { Component } from 'react';
import { Container, LineOrange, ResumeOrder, CreateOrder, ProgresseBar, SearchBox, ProductList, ProductCard, CardOrder } from './styles'
import { Link } from 'react-router-dom'
import { MdArrowBack } from 'react-icons/md'
import { FaSearch } from 'react-icons/fa'
import undraw_chef from '../../assets/undraw_chef.svg'
import Sidebar from '../../components/Sidebar'
import Header from '../../components/Header'
import { formatPrice } from  '../../util/formatPrice'



function step0(produtos, handleProduct, totalOrderFormatted, nextStep){

    return (
      <>
        <div>
            {/* <Link to="/pedidos">
                <FaBackward color="#FF8822" size={18} />
            </Link> */}
            <h3>Informações para o pedido</h3>
            <LineOrange/>
            <p>Preencha as informações abaixo para concluir esta venda.</p>
            <span>Passo 1 de 3</span> 
            <ProgresseBar progress={33}/>
            <h6>O que você está vendendo?</h6>
        </div>
        <div>
            <SearchBox>
                <FaSearch color="#FF8822" size={18} />
                <input 
                    type="text"
                    placeholder="Procure o produto aqui..."
                />
            </SearchBox>
        </div>
        <ProductList>
            {produtos.map(produto => (
                <ProductCard key={produto.name} onClick={() => handleProduct(produto)}>
                    <img src="https://i.pinimg.com/originals/00/15/56/001556c500e003afeba6cf4806811055.jpg"  alt=""/>
                    <h6>{produto.nome}</h6>
                    <span>{produto.priceFormatted}</span>
                </ProductCard>
            ))}                           
        </ProductList>
        <button onClick={() => nextStep()}>
            <span>Total: {totalOrderFormatted}</span>
            <span>Avançar&nbsp;&nbsp;&nbsp;&nbsp;<b>></b></span>        
        </button>

      </>
  );
}

function step1(clientes, handleClient, nextStep) {
  return (
    <>
        <div>
            {/* <Link to="/pedidos">
                <FaBackward color="#FF8822" size={18} />
            </Link> */}
            <h3>Informações para o pedido</h3>
            <LineOrange/>
            <p>Preencha as informações abaixo para concluir esta venda.</p>
            <span>Passo 2 de 3</span> 
            <ProgresseBar progress={66}/>
            <h6>Pra quem você está vendendo?</h6>
        </div>
        <div>
            <SearchBox>
                <FaSearch color="#FF8822" size={18} />
                <input 
                    type="text"
                    placeholder="Procure o cliente aqui..."
                />
            </SearchBox>
        </div>
        <ProductList>
            {clientes.map(cliente => (
                    <ProductCard key={cliente.name} onClick={() => handleClient(cliente)}>
                        <img src={cliente.image}  alt=""/>
                        <h6>{cliente.nome}</h6>
                    </ProductCard>
            ))}                        
        </ProductList>
        <button onClick={() => nextStep()}>
            <span>3 clientes selecionados</span>    
            <span>Avançar&nbsp;&nbsp;&nbsp;&nbsp;<b>></b></span>        
        </button>

      </>
  );
}

function step2() {
  return (
    <h1>asdfsa</h1>
  );
}


export class NewOrder extends Component {

    state = {
        produtos: [
            {nome:'cuscuz', obs: 'com ovo', price: 2.40, priceFormatted: 'R$ 2,40'},
            {nome:'batata', obs: 'doce', price: 4.00, priceFormatted: 'R$ 4,00'},
            {nome:'pera', obs: 'lá', price: 5.00, priceFormatted: 'R$ 5,00'},
            {nome:'morango', obs: 'engravida', price: 2.40, priceFormatted: 'R$ 2,40'},
            {nome:'Vinhagre', obs: '4', price: 3.50, priceFormatted: 'R$ 3,50'},
            {nome:'Café com leite', obs: 'engravida', price: 3.80, priceFormatted: 'R$ 3,80'},
        ],
        produtosPedido: [
            
        ],
        clientes: [
            { nome: 'mário', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS_za4CDimBoo8ClLAqlGpbQ71e76q_hmidqsKYG9nY3iEfCSDv&usqp=CAU' },
            { nome: 'robsom', image: 'https://media-exp1.licdn.com/dms/image/C4E03AQEww8R2qluoCQ/profile-displayphoto-shrink_200_200/0?e=1597276800&v=beta&t=otlVBjbvn9Xi4oHIsqqgzhntMdfAkaFxyy2-qqxX9yw' },
            { nome: 'mariana', image: 'https://comoequetala.com.br/images/com_vagasejobs/usuarios/foto/45428-600x600_32107fd2af88a7b25ecf6b33296173cf.jpg' },
        ],
        clientesPedido: [],
        step: 0 ,
        totalOrder: 0,
        priceFormatted: 'R$ 0,00',
    }
    
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        })
    }

    handleClient = (cliente) => {
        const { clientesPedido, totalOrder } = this.state;
        const clienteIndex = clientesPedido.findIndex(c => c.nome === cliente.nome )

        if (clienteIndex >= 0){
            this.setState({
                clientessPedido: clientesPedido.filter(c => c.nome !== cliente.nome),
            })
        }else{
            this.setState({
                clientesPedido: [...clientesPedido, cliente ],
            })
        }
    }
    handleProduct = (produto) => {
        const { produtosPedido, totalOrder } = this.state;
        const produtoIndex = produtosPedido.findIndex(p => p.nome === produto.nome )

        if (produtoIndex >= 0){
            this.setState({
                produtosPedido: produtosPedido.filter(p => p.nome !== produto.nome),
                totalOrder: (totalOrder - produto.price),
                priceFormatted: formatPrice(totalOrder - (produto.price))
            })
        }else{
            this.setState({
                produtosPedido: [...produtosPedido, produto ],
                totalOrder: (totalOrder + produto.price),
                priceFormatted: formatPrice(totalOrder + produto.price)
            })
        }
    }

    render() { 
        const { step, produtos, clientes, produtosPedido, priceFormatted, clientesPedido } = this.state;
        return ( 
            <>
                <Header/>
                <Sidebar/>
                <Container>
                    <ResumeOrder>
                        <div>
                            <Link to="/pedidos">
                                <MdArrowBack color="#FF8822" size={18} />
                            </Link>
                            <h3>Novo pedido</h3>
                            <LineOrange/>
                        </div>
                        <ProductList>
                            {produtosPedido.length > 0 ? (
                                <>
                                    <h4>Produtos</h4>
                                    {produtosPedido.map(produto => (
                                        <Link key={produto.nome}>
                                            <ProductCard key={produto.name}>
                                                <img src="https://i.pinimg.com/originals/00/15/56/001556c500e003afeba6cf4806811055.jpg"  alt=""/>
                                                <h6>{produto.nome}</h6>
                                                <span>{produto.priceFormatted}</span>
                                            </ProductCard>
                                                
                                        </Link>
                                    ))}
                                    {clientesPedido.length > 0 ? (
                                        <>
                                            <h4>Clientes</h4>
                                            {clientesPedido.map(cliente => (
                                                <Link key={cliente.nome}>
                                                    <ProductCard key={cliente.nome}>
                                                        <img src={cliente.image}  alt=""/>
                                                        <h6>{cliente.nome}</h6>
                                                    </ProductCard>
                                                        
                                                </Link>
                                            ))}
                                            <div>
                                                <h4>Total: </h4>
                                                <span>{ priceFormatted }</span>
                                            </div>
                                        </>
                                        
                                    ) : (<></>)}
                                </>
                            ) : (
                                
                                <div>
                                    <img src={undraw_chef} alt=""/>
                                    <p>Acompanhe aqui o resumo dessa venda.</p>
                                </div>
                               
                            )}
                        </ProductList>
                    </ResumeOrder>
                    <CreateOrder>   
                       {step === 0 ? step0(produtos, this.handleProduct, priceFormatted, this.nextStep): <></>}
                       {step === 1 ? step1(clientes, this.handleClient, this.nextStep): <></>}
                       {step === 2 ? step2(produtos): <></>}
                    </CreateOrder>
                </Container>
            </>
        );
    }
}
 
export default NewOrder;
