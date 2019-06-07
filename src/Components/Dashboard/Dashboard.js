import React, {Component} from 'react'
import Product from '../Product/Product'
import axios from 'axios'

export default class Dashboard extends Component {
    constructor (props){
        super()

        this.state = {
            
        }
    }
    
    

    render(){
        return(
            <div className="Dashboard">
              
                {this.props.products.map((product, id) => {
                    return(
                        <Product products={this.props.products[id]} delete={this.props.delete}/>   
                    )
                })}
                
            </div>
        )
    }
}