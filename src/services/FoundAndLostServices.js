import { formatedDate } from '../helpers/dateHelper.js';
import { FoundAndLost } from '../models/FoundAndLost.js';

export const getAll = async () => {

    let lost = await FoundAndLost.findAll({ where: { status: "LOST" } });
    let recovered = await FoundAndLost.findAll({ where: { status: "RECOVERED" } });

    if (lost.length > 0 || recovered.length > 0) {

        let lostList = await Promise.all(lost.map(async (item) => {

            let date = item.dataValues.datecreated.split("-");
            let formatedDate = `${date[2]}/${date[1]}/${date[0]}`

            item.dataValues.datecreated = formatedDate;

            return item;

        }));

        let recoveredList = await Promise.all(recovered.map(async (item) => {

            let date = item.dataValues.datecreated.split("-");
            let formatedDate = `${date[2]}/${date[1]}/${date[0]}`

            item.dataValues.datecreated = formatedDate;

            return item;

        }));

        return ({ lost: lostList, recovered: recoveredList });

    } else {

        return ({ error: "No itens available." });

    }

}

export const AddFoundAndLost = async (file, description, local) => {

    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let formatDate = `${year}-${formatedDate(month)}-${formatedDate(day)}`

    if (file) {

        const filename = `${file.filename}`;

        let lostItem = await FoundAndLost.create({ status: "LOST", photo: `foundandlost/${filename}`, description, local, datecreated: formatDate });

        return lostItem;

    } else {

        let lostItem = await FoundAndLost.create({ status: "LOST", photo: ``, description, local, datecreated: formatDate });

        return lostItem;
    }

}

export const UpdateFoundAndLost = async (id, file, description, local, status) => {

    let hasLostItem = await FoundAndLost.findOne({ where: { id } });

    if (hasLostItem) {

        if (status !== "RECOVERED" || status !== "LOST") {

            if (file) {

                const filename = `${file.filename}`;

                hasLostItem.status = status;
                hasLostItem.photo = `foundandlost/${filename}`;
                hasLostItem.description = description;
                hasLostItem.local = local;

                await hasLostItem.save();

                return hasLostItem;

            } else {

                hasLostItem.status = status;
                hasLostItem.photo = ``;
                hasLostItem.description = description;
                hasLostItem.local = local;

                await hasLostItem.save();

                return hasLostItem;
            }

        } else {

            return ({ error: "Invalid parameters. Only RECOVERED or LOST." });

        }

    } else {

        return ({ error: "Inexistent item" });
    }

}