import * as WarningServices from '../services/WarningServices.js'; 
import JWT from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export const getMyWarnings = async (req, res) => {

    let unity = req.query.unity;
    let auth = req.headers.authorization.split(" ");
    let token = JWT.verify(auth[1], process.env.JWT_SECRET_KEY);
    let id = token.id;

    if(unity) {

        let list = await WarningServices.getMyWarnings(unity, id);

        res.json(list);

    } else {

        res.json({ error: "Unity ID is necessary." });
    }

}

export const addWarning = async (req, res) => {

    const { unity, title } = req.body;
    const file = req.file;

    if(unity, title) {

    } else {

    }

}