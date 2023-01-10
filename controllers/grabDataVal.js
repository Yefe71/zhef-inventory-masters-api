const grabDataVal = (req, res, db) => {

    db
    .select('valueinvat')
    .from('gas_purchase_data')
    .whereRaw(`EXTRACT(DAY FROM datecreate) = ${req.query.weekDay}`)
    
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