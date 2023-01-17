const grabDataOverall = (req, res, db) => {
    db
    .select('product', 'code', 'quantity', 'valueinvat')
    .from(`gas_purchase_data_dec_2022`)
    
        .then(values => {
            if(values){
                res.json(values)
                
            } else {
                res.status(400).json('Value not found')
            }
        })
        .catch(err => res.status(400).json('Error getting value ${error}' ))    

}

export default grabDataOverall