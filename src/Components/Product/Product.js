import React, {Component} from 'react'

export default class Product extends Component {
    
    render(){
        let {name, price, imageUrl} = this.props.products

        console.log(name, price, imageUrl)
        return(
            <div className="productDisplay">
                <p><img src={imageUrl} width="300" alt="image"/></p>
                <p>Name:{name}</p>{"\n"}
                <p>Price:{price}</p>  
            </div>
        )
    }
}