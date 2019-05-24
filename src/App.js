import React from 'react';
import './App.css';
import Layout from './hoc/Layout/Layout';
import { Route, Switch } from 'react-router-dom';
import PizzaBuilder from './containers/PizzaBuilder/PizzaBuilder';
import Orders from './containers/Orders/Orders';

function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path='/orders' component={Orders} />
          <Route path='/' component={PizzaBuilder} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
