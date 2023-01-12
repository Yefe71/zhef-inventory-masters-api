const grabDataValQua = (req, res, db) => {
    console.log(req.query.weekStart, req.query.weekEnd)
    db
    .select('product', 'quantity')
    .from('gas_purchase_data')
    .where(function() {
          this.where('code', 'ADO')
            .orWhere('code', 'ADO T')
            .orWhere('code', 'E10')
            .orWhere('code', 'KERO')
            .orWhere('code', 'XCS')
            .orWhere('code', 'XUB')
      })
    .andWhere(db.raw(`to_char(datecreate, 'DD') >= '${req.query.weekStart}' AND to_char(datecreate, 'DD') <= '${req.query.weekEnd}'`))

    
        .then(values => {
            if(values){
                res.json(values)
                
            } else {
                res.status(400).json('Value not found')
            }
        })
        .catch(err => res.status(400).json('Error getting value ${error}' ))    

}

export default grabDataValQua