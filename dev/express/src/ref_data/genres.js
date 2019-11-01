const genres = {};

genres.create = (req, res, db) => {
    console.log(req);
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

genres.read = (req, res, db) => {
    const gId = req.params.genreId;
    const coll = db.collection('ref_genres');

    const objGenre = coll.findOne({ id: gId },
        (err, result) => {
            if (err) throw err;
            res.send(result);
        }
    );
}

genres.update = (req, res, db) => {
    console.log(req);
}



module.exports = genres;