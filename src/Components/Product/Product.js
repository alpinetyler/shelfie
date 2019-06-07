import React, {Component} from 'react'

export default class Product extends Component {
    
    render(){
        let {name, price, imageurl} = this.props.products

        console.log(this.props.products)
        return(
            <div className="productDisplay">
                <p><img src={imageurl} alt="picture of product" className="imageDisplay"/></p>
                <p>Name: {name}</p>
                <p>Price: {price}</p> 
                <button className="deletebutton" onClick={this.props.delete}>Delete</button> 
            </div>
        )
    }
}