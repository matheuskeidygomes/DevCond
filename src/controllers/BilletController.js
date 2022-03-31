import * as BilletServices from '../services/BilletServices.js';
import JWT from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export const getAll = async (req, res) => {

    const { unity } = req.query;
    let auth = req.headers.authorization.split(" ");
    let token = JWT.verify(auth[1], process.env.JWT_SECRET_KEY);
    let user = token.id;

    if (unity) {

        let list = await BilletServices.getAll(unity, user);

        res.json(list);

    } else {

        res.json({ error: "Please, insert the unity id."});
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
