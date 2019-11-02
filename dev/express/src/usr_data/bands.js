const bands = {};

bands.create = async(req, res, db) => {
    const latest = await bands.getNextId(db);
    const newBand = req.body;

    if (!newBand.hasOwnProperty('ownerid')) {
        res.send({
            insert: {
                result: 'ERR',
                inserted: null,
                error: {
                    id: '0001x01',
                    msg: 'No ownerid specified for Band'
                }
            }
        });
    }
    if (!newBand.hasOwnProperty('name')) {
        res.send({
            insert: {
                result: 'ERR',
                inserted: null,
                error: {
                    id: '0001x02',
                    msg: 'No name specified for Band'
                }
            }
        });
    }
    newBand.id = latest;

    const coll = db.collection('usr_bands');
    coll.insertOne(newBand);
    res.send({
        insert: {
            result: 'OK',
            inserted: newBand,
            error: null
        }
    });
}

bands.delete = (req, res, db) => {

}

bands.list = (req, res, db) => {
    const coll = db.collection('usr_bands');

    coll.find({}).toArray(
        (err, result) => {
            if (err) throw err;

            res.send(result);
        }
    );
}

bands.getNextId = async(db) => {
    const coll = db.collection('usr_bands');
    const search = coll.find({}).sort({ id: -1 }).limit(1);
    const result = await search.toArray();
    if (result.length > 0) {
        const latestBand = result[0];
        const nextId = parseInt(latestBand.id, 10) + 1;
        return nextId;
    } else {
        return 1;
    }
}

bands.read = (req, res, db) => {
    const bId = req.params.bandId;
    const coll = db.collection('usr_bands');

    const objBand = coll.findOne({ id: parseInt(bId, 10) },
        (err, result) => {
            if (err) throw err;
            res.send(result);
        }
    );
}

bands.update = (req, res, db) => {
    res.send({ requestBody: req.body })
}









module.exports = bands;