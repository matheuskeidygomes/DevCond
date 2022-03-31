import { Unit } from '../models/Unit.js';
import { Warning } from '../models/Warning.js';

export const getMyWarnings = async (unity, userId) => {

    let hasUnity = await Unit.findOne({ where: { id_owner: userId } });

    if (hasUnity) {

        let warnings = await Warning.findAll({ where: { id_unit: unity } });

        if (warnings.length > 0) {

            return await Promise.all(warnings.map(async (item) => {
    
                let date = item.dataValues.datecreated.split("-");
                let formatedDate = `${date[2]}/${date[1]}/${date[0]}`

                item.dataValues.datecreated = formatedDate;

                return item;
    
            }));

        } else {

            return ({ error: "There is no warning available."});
        }

    } else {

        return ({ error: "This unity isn't yours." });
    }

}

export const addWarning = async () => {

}