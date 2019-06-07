import React, {Component} from 'react'
import axios from 'axios'

export default class Form extends Component {
    constructor(props){
        super()

        this.state = {
            imageUrl: '',
            name: '',
            price: ''
        }
    }

    handleChange = e => {
        let { value, name } = e.target

        this.setState({
            [name]: value
        })
    }



    clearForm = () => {
        this.setState({
            imageUrl: '',
            name: '',
            price: ''
        })
    }

    handleClick = () => {
        let newProduct = this.state
        this.props.createProduct(newProduct)
        this.setState({
            imageUrl: '',
            name: '',
            price: ''

        })
    }

    render(){
        return(
            <div className="formWrapper">
                <p>Image URL:<input
                    type="text"
                    name="imageUrl"
                    placeholder="Image URL"
                    onChange={this.handleChange}
                    value={this.state.imageUrl} /></p>
                <p>Product Name:<input
                    type="text"
                    name="name"
                    placeholder="Product Name"
                    onChange={this.handleChange}
                    value={this.state.name} /></p>
                <p>Price:<input
                    type="text"
                    name="price"
                    placeholder="Price"
                    onChange={this.handleChange}
                    value={this.state.price} /></p>
                    <button className="cancelButton" onClick={this.clearForm}>Cancel</button>
                    <button className="addInventorybutton" onClick={this.handleClick}>Add Inventory</button>
            </div>
        )
    }
}