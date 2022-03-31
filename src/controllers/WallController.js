import * as WallController from '../services/WallServices.js';
import JWT from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export const getAll = async (req, res) => {

    let auth = req.headers.authorization.split(" ");
    let token = JWT.verify(auth[1], process.env.JWT_SECRET_KEY);
    let id = token.id;

    let list = await WallController.getAll(id);

    res.json(list);

}

export const Like = async (req, res) => {

    let { id } = req.params;
    let auth = req.headers.authorization.split(" ");
    let token = JWT.verify(auth[1], process.env.JWT_SECRET_KEY);
    let user = token.id;

    let like = await WallController.Like(id, user);

    res.json(like);


}