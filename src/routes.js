import React from 'react';
import {Route, Switch} from 'react-router-dom'

import Login from './pages/login'
import Main from './pages/main'
import NewOrder from './pages/newOrder'
import clientOrders from './pages/clientOrders'

export default function Routes(){
    return (
            <Switch>

                <Route exact path="/login" component={Login} />
                <Route exact path="/pedidos" component={Main} />
                <Route exact path="/pedidos/novo_pedido" component={NewOrder} />
                <Route exact path="/pedidos/cliente/:id" component={clientOrders} />

            </Switch>
    )
}