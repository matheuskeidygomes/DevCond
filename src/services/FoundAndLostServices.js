import { FoundAndLost } from '../models/FoundAndLost.js';

export const getAll = async (req, res) => {

    let list = await FoundAndLost.findAll({ where: { status: "LOST" } });

    if (list.length > 0) {

        return await Promise.all(list.map(async (item) => {
    
            let date = item.dataValues.datecreated.split("-");
            let formatedDate = `${date[2]}/${date[1]}/${date[0]}`

            item.dataValues.datecreated = formatedDate;

            return item;

        }));

    } else {

        return ({ error: "No lost itens available." });

    }    

}

export const AddFoundAndLost = (req, res) => {

}

export const UpdateFoundAndLost = (req, res) => {

}