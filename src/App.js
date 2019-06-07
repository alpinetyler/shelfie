import React, {Component} from 'react';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard'
import Form from './Components/Form/Form'
import Header from './Components/Header/Header'

class App extends Component{
  constructor(props){
    super()

    this.state = {
        products: [
            {
                name: 'shoes',
                price: 13,
                imageUrl: 'https://cdn.shopify.com/s/files/1/0217/3274/products/pau3053_103_h_large.jpg?v=1548799069'
        
            },
            {
                name: 'gloves',
                price: 25,
                imageUrl: 'https://m.media-amazon.com/images/I/71dvOpAS7yL._SR500,500_.jpg'
            },
            {
                name: 'hat',
                price: 35,
                imageUrl: 'https://s.yimg.com/aah/yhst-83114501141346/mens-brown-fedora-hat-100-wool-untouchable-brim-hats-8345-54.jpg'
            },
            {
                name: 'boot',
                price: 45,
                imageUrl: 'url'
            }]
    }
}
    render(){
        return (
          <div className="App">
            <Dashboard products={this.state.products} />
            <Form />
            <Header />
          </div>
  );
}
}

 

export default App;
