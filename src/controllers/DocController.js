import * as DocServices from '../services/DocServices.js';

export const addDoc = async (req, res) => {

    let title = req.body.title;
    let file = req.file;

    if(title) {

        if(file) {

            let response = await DocServices.addDoc(file, title);

            res.json(response);    

        } else {

            res.json({ error: "Invalid file."})
        }

    } else {

        res.json({ error: "Please, insert document title."});
    }

}

export const getAll = async (req, res) => {

    let list = await DocServices.getAll();

    res.json(list);

}