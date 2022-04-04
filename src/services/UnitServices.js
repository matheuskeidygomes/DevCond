import { Unit } from '../models/Unit.js';
import { UnitPeople } from '../models/UnitPeople.js';
import { UnitVehicle } from '../models/UnitVehicle.js';
import { UnitPet } from '../models/UnitPet.js';
import { User } from '../models/User.js';

export const getInfo = async (id) => {

    let hasUnit = await Unit.findByPk(id);

    if (hasUnit) {

        let people = await UnitPeople.findAll({ where: { id_unit: id } });
        let pets = await UnitPet.findAll({ where: { id_unit: id } });
        let vehicles = await UnitVehicle.findAll({ where: { id_unit: id } });

        let peoples = await Promise.all(people.map(async (item) => {

            let date = item.dataValues.birthdate.split("-");
            let formatedDate = `${date[2]}/${date[1]}/${date[0]}`

            item.dataValues.birthdate = formatedDate;

            return item;

        }));

        return ({ peoples, pets, vehicles });

    } else {

        return ({ error: "Inexistent unity." });
    }
}

export const addUnity = async (name, idOwner) => {

    let hasUnit = await Unit.findOne({ where: { name } });
    let hasUser = await User.findByPk(idOwner);

    if (!hasUnit) {

        if (hasUser) {

            let newUnity = await Unit.create({ name, id_owner: idOwner });

            return newUnity;

        } else {

            return ({ error: "Inexistent user. Before insert a new unity, must be done the user registration." });
        }

    } else {

        return ({ error: "This unity already exist." });
    }

}

export const addPerson = async (id, name, birthdate) => {

    let hasUnit = await Unit.findByPk(id);

    if (hasUnit) {

        let hasPerson = await UnitPeople.findOne({ where: { name: name, id_unit: id } });

        if (!hasPerson) {

            let newPerson = await UnitPeople.create({ id_unit: id, name, birthdate });

            return newPerson;

        } else {

            return ({ error: "This person already exist in this unity." })
        }

    } else {

        return ({ error: "This unit doesn't exist." })
    }

}

export const addVehicle = async (id, title, color, plate) => {

    let hasUnit = await Unit.findByPk(id);

    if (hasUnit) {

        let hasPlate = await UnitVehicle.findOne({ where: { plate } });

        if (!hasPlate) {

            let newVehicle = await UnitPeople.create({ id_unit: id, title, color, plate });

            return newVehicle;

        } else {

            return ({ error: "This vehicle plate already exist. " })
        }

    } else {

        return ({ error: "This unit doesn't exist." })
    }

}

export const addPet = async (id, name, race) => {

    let hasUnit = await Unit.findByPk(id);

    if (hasUnit) {

        let newPet = await UnitPet.create({ id_unit: id, name, race });

        return newPet;

    } else {

        return ({ error: "This unit doesn't exist." })
    }

}

export const removePerson = async () => {

}

export const removeVehicle = async () => {

}

export const removePet = async () => {

}