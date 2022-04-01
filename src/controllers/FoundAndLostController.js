import * as FoundAndLost from '../services/FoundAndLostServices.js';

export const getAll = async (req, res) => {

    let list = await FoundAndLost.getAll();

    res.json(list);

}

export const AddFoundAndLost = async (req, res) => {

    const {} = req.body;

}

export const UpdateFoundAndLost = async (req, res) => {

}