import React, {Component} from 'react'
import Product from '../Product/Product'

export default class Dashboard extends Component {
    constructor (props){
        super()

        this.state = {
            
        }
    }
    render(){
        return(
            <div>
                <h1>Dashboard</h1>
                {this.props.products.map((product, id) => {
                    return(
                        <Product products={this.props.products[id]}/> 
                        
                    )
                })}
                
            </div>
        )
    }
}