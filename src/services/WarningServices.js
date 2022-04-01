import { Unit } from '../models/Unit.js';
import { Warning } from '../models/Warning.js';
import { formatedDate } from '../helpers/dateHelper.js';

export const getMyWarnings = async (unity, userId) => {

    let hasUnity = await Unit.findOne({ where: { id: unity, id_owner: userId } });

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

export const addWarning = async (userId, title, unity, file) => {

    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let formatDate = `${year}-${formatedDate(month)}-${formatedDate(day)}`

    let hasUnit = await Unit.findOne({ where: { id: unity, id_owner: userId } });

    if (hasUnit) {

        if (file) {

            const filename = `${file.filename}`;
    
            let warning = await Warning.create({ id_unit: unity, title, status: "In Review", datecreated: formatDate, photos: `warnings/${filename}` });
        
            return warning;
    
        } else {
    
            let warning = await Warning.create({ id_unit: unity, title, status: "In Review", datecreated: formatDate, photos: `` });
    
            return warning;
        }
    

    } else {

        return ({ error: "This unity isn't yours. "});
    }

}