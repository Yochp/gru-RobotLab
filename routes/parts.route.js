const router = require('express').Router();
const dataM = require('../db').partsMongo;

function createItem(req) {
    return {
        id: req.body.id,
        engine: req.body.engine,
        name: req.body.name,
        cpu: req.body.cpu,
        type: req.body.type
    };
}


router.route('/parts')
    .get((req, res, next) => {
        dataM.find({}, (err, data) => {
            if (err) return next(err);
            res.json(data);
        });
    });


router.route('/parts/:id')
    .get((req, res, next) => {
        const idReq = parseInt(req.params.id);
        dataM.find({id: idReq}, (err, data) => {
            if (err) return next(err);
            res.json(data);
        });
    })


    .put((req, res, next) => {
        const idReq = parseInt(req.params.id);
        if (idReq && !isNaN(idReq)) {
            dataM.findOneAndUpdate({id: idReq}, req.body)
                .then(
                    () => dataM.findOne({id: idReq}).then((partsUpdate) => {
                        res.json(partsUpdate)
                    })
                )
        } else {
            const err = Error('fail to update the item');
            next(err);
        }
    })

    .post((req, res, next) => {
        const idReq = parseInt(req.params.id);
        const item = createItem(req);
        if (idReq && !isNaN(idReq)) {
            let data = new dataM(item);
            data.save();
        } else {
            const err = Error('fail to insert new item');
            next(err);
        }
    })

    .delete((req, res, next) => {
        const idReq = parseInt(req.params.id);
        if (idReq && !isNaN(idReq)) {
            dataM.findOneAndRemove({id: idReq})
                .then(
                    () => dataM.findOne({id: idReq}).then((partsdeleted) => {
                        res.send(partsdeleted)
                    })
                )
        } else {
            const err = Error('fail to delete the item');
            next(err);
        }
    });

module.exports = router;