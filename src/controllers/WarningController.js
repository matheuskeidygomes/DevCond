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

    const { title, unity } = req.body;
    const file = req.file;

    let auth = req.headers.authorization.split(" ");
    let token = JWT.verify(auth[1], process.env.JWT_SECRET_KEY);
    let userId = token.id;

    if(title) {

        if (unity) {

            let warning = await WarningServices.addWarning(userId, title, unity, file);

            res.json(warning);

        } else {

            res.json({ error: "Unity ID is necessary. "})
        }

    } else {
        
        return res.json({ error: "Warning title is necessary."})
    }

}