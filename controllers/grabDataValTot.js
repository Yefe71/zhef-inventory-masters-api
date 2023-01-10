const grabDataVal = (req, res, db) => {
    const from = '2022-12-01';
    const to = '2022-12-08';
    db
    .select('product', 'valueinvat')
    .from('gas_purchase_data')
    .where('code', 'ADO')
    .andWhere(db.raw("to_char(datecreate, 'DD') >= '01' AND to_char(datecreate, 'DD') <= '07'"))

    
        .then(values => {
            if(values){
                res.json(values)
            } else {
                res.status(400).json('Value not found')
            }
        })
        .catch(err => res.status(400).json('Error getting value ${error}' ))    

}

export default grabDataVal