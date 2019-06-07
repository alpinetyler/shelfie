import React, {Component} from 'react';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard'
import Form from './Components/Form/Form'
import Header from './Components/Header/Header'
import axios from 'axios';

class App extends Component{
  constructor(props){
    super()

    this.state = {
        products: []
    }
}
  componentDidMount = () => {
    axios.get('/api/inventory').then((res) => {
      this.setState({
        products: res.data
      })
    }).catch(err => console.log('error getting products:', err))
  }

  createProduct = newProduct => {
    axios.post('/api/product', newProduct)
        .then(res => {
            this.setState({
                products: res.data
            })
        }).catch(err => console.log(err))
}

deleteProduct = id => {
  axios.delete(`/api/product/${id}`)
      .then(res => this.setState({product: res.data }))
      .catch(err => console.log(err))
}


    render(){
        return (
          <div className="App">
             <Header />
             <section className="dashBoardWrapper">
            <Dashboard products={this.state.products}  getProducts={this.componentDidMount} delete={this.deleteProduct}/>
            <Form getProducts={this.componentDidMount} createProduct={this.createProduct} />
            </section>
           
          </div>
  );
}
}

 

export default App;
