const genres = {};

genres.create = async(req, res, db) => {
    const latest = await genres.getNextId(db);
    const newGenre = req.body;
    if (newGenre.hasOwnProperty('name')) {
        newGenre.id = latest;

        const coll = db.collection('ref_genres');
        coll.insertOne(newGenre);
        res.send({
            insert: {
                result: 'OK',
                inserted: newGenre,
                error: null
            }
        });
    } else {
        res.send({
            insert: {
                result: 'ERR',
                inserted: null,
                error: {
                    id: '0000x01',
                    msg: 'No name specified for genre'
                }
            }
        });
    };
}

genres.delete = (req, res, db) => {

}

genres.list = (req, res, db) => {
    const coll = db.collection('ref_genres');

    coll.find({}).toArray(
        (err, result) => {
            if (err) throw err;

            res.send(result);
        }
    );
}

genres.getNextId = async(db) => {
    const coll = db.collection('ref_genres');
    const search = coll.find({}).sort({ id: -1 }).limit(1);
    const result = await search.toArray();
    if (result.length > 0) {
        const latestGenre = result[0];
        const nextId = parseInt(latestGenre.id, 10) + 1;
        return nextId;
    } else {
        return 1;
    }
}

genres.read = (req, res, db) => {
    const gId = req.params.genreId;
    const coll = db.collection('ref_genres');

    const objGenre = coll.findOne({ id: parseInt(gId, 10) },
        (err, result) => {
            if (err) throw err;
            res.send(result);
        }
    );
}

genres.update = (req, res, db) => {
    res.send({ requestBody: req.body })
}



module.exports = genres;