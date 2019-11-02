const users = {};

users.create = async(req, res, db) => {
    const latest = await users.getNextId(db);
    const newUser = req.body;

    if (!newUser.hasOwnProperty('email')) {
        res.send({
            insert: {
                result: 'ERR',
                inserted: null,
                error: {
                    id: '0001x01',
                    msg: 'No email specified for User'
                }
            }
        });
    }
    if (!newUser.hasOwnProperty('passwordHash')) {
        res.send({
            insert: {
                result: 'ERR',
                inserted: null,
                error: {
                    id: '0001x02',
                    msg: 'No passwordHash specified for User'
                }
            }
        });
    }
    newUser.id = latest;

    if (!newUser.hasOwnProperty('username')) {
        newUser.username = newUser.email;
    }

    const coll = db.collection('usr_users');
    coll.insertOne(newUser);
    res.send({
        insert: {
            result: 'OK',
            inserted: newUser,
            error: null
        }
    });
}

users.delete = (req, res, db) => {

}

users.list = (req, res, db) => {
    const coll = db.collection('usr_users');

    coll.find({}).toArray(
        (err, result) => {
            if (err) throw err;

            res.send(result);
        }
    );
}

users.getNextId = async(db) => {
    const coll = db.collection('usr_users');
    const search = coll.find({}).sort({ id: -1 }).limit(1);
    const result = await search.toArray();
    if (result.length > 0) {
        const latestUser = result[0];
        const nextId = parseInt(latestUser.id, 10) + 1;
        return nextId;
    } else {
        return 1;
    }
}

users.read = (req, res, db) => {
    const uId = req.params.userId;
    const coll = db.collection('usr_users');

    const objUser = coll.findOne({ id: parseInt(uId, 10) },
        (err, result) => {
            if (err) throw err;
            res.send(result);
        }
    );
}

users.update = (req, res, db) => {
    res.send({ requestBody: req.body })
}









module.exports = users;