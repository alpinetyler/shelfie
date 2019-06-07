import React, {Component} from 'react'
import Product from '../Product/Product'
import axios from 'axios'

export default class Dashboard extends Component {
    constructor (props){
        super()

        this.state = {
            
        }
    }
    deleteRental = id => {
        axios.delete(`/api/product/${id}`)
            .then(res => this.setState({ product: res.data }))
            .catch(err => console.log(err))
    }


    render(){
        return(
            <div className="Dashboard">
              
                {this.props.products.map((product, id) => {
                    return(
                        <Product products={this.props.products[id]}/>   
                    )
                })}
                
            </div>
        )
    }
}