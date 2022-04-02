import * as FoundAndLost from '../services/FoundAndLostServices.js';

export const getAll = async (req, res) => {

    let list = await FoundAndLost.getAll();

    res.json(list);

}

export const AddFoundAndLost = async (req, res) => {

    let file = req.file;
    const { description, local } = req.body;

    if (description && local) {

        let lostItem = await FoundAndLost.AddFoundAndLost(file, description, local);

        res.json(lostItem);

    } else {
        res.json({ error: "Please, fill in the required fields."});
    }

}

export const UpdateFoundAndLost = async (req, res) => {

    let file = req.file;
    const { description, local, status } = req.body;
    const { id } = req.params;

    if (description && local && status) {

        let lostItem = await FoundAndLost.UpdateFoundAndLost(id, file, description, local, status);

        res.json(lostItem);

    } else {
        res.json({ error: "Please, fill in the required fields."});
    }

}