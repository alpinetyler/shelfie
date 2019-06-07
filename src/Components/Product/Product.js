import React, {Component} from 'react'

export default class Product extends Component {
    
    render(){
        let {name, price, imageUrl} = this.props.products
        return(
            <div>
                <p>Name:{name}</p>
                <p>Price:{price}</p>
                <p>Image Url:{imageUrl}</p>
                
            </div>
        )
    }
}