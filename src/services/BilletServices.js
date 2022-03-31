import { Billet } from '../models/Billet.js';
import { Unit } from '../models/Unit.js';


export const getAll = async (unity, user) => {

    let hasUnit = await Unit.findOne({ where: { id: unity } });

    if (hasUnit) {

        let hasUser = await Unit.findOne({ where: { id: unity, id_owner: user} });

        if (hasUser) {

            let list = await Billet.findAll({ where: { id_unit: unity } });

            if (list.length > 0) {
    
                return list;
    
            } else {
    
                return ({ error: "No billets available."})
            }

        } else {

            return ({ error: "This unity isn't your."});
        }

    } else {

        return ({ error: "This unity doesn't exist."})
    }

}

export const addBillet = async (file, unity, title) => {

    let hasUnit = await Unit.findOne({ where: { id: unity } }); 

    if (hasUnit) {

        const filename = `${file.filename}`;

        let createdFile = await Billet.create({ id_unit: unity, title, fileurl: `billets/${filename}` });
    
        return createdFile;

    } else {

        return ({ error: "Unity doesn't exist" });
    }

}