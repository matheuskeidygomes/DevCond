import * as BilletServices from '../services/BilletServices.js';

export const getAll = async (req, res) => {

    const { unity, user } = req.query;

    if (unity && user) {

        let list = await BilletServices.getAll(unity, user);

        res.json(list);

    } else {

        res.json({ error: "Please, insert the unity id and user id."});
    }

}

export const addBillet = async (req, res) => {

    let file = req.file;
    const { unity, title } = req.body;

    if (unity && title) {

        if (file) {

            let response = await BilletServices.addBillet(file, unity, title);

            res.json(response);

        } else {
            
            res.json({ error: "Invalid file."});
        }

    } else {

        res.json({ error: "Please, insert the unity id   and title."});
    }

}
