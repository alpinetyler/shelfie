module.exports = {
    read: (req, res) => {
        const dbInstance = req.app.get('db');

        dbInstance.get_inventory()
            .then((products) => res.status(200).send(products))
            .catch(err => console.log(err))  
    },

    create: (req,res) => {
        const dbInstance = req.app.get('db');
        const {name, price, imageUrl} = req.body

        dbInstance.create_product([name, price, imageUrl])
            .then((product) => res.status(200).send(product))
            .catch(err => console.log(err))

    }, 

    delete: (req, res) => {
        const dbInstance = req.app.get('db');
        let { id } = req.params//get this from param on url
        
        dbInstance.delete_product(id)
            .then((product) => res.status(200).send(product))
            .catch(err => console.log(err))

    }
}//


