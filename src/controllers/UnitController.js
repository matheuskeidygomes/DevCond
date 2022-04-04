import * as UnitServices from '../services/UnitServices.js';

export const getInfo = async (req, res) => {

    let id = req.params.id;

    console.log(id);

    let infos = await UnitServices.getInfo(id);

    res.json(infos);

}

export const addUnit = async (req, res) => {

    const { name, idOwner } = req.body;

    if (idOwner) {

        if (name) {

            let response = await UnitServices.addUnity(name, idOwner);

            res.json(response);

        } else {

            res.json({ error: "Please, insert the property numeration. Example: APT 101." });
        }

    } else {

        res.json({ error: "Please, insert the owner ID, from the property." })
    }

}

export const addPerson = async (req, res) => {

    let id = req.params.id;
    const { name, birthdate } = req.body;

    if (name) {

        if (birthdate) {

            let response = await UnitServices.addPerson(id, name, birthdate);

            res.json(response);

        } else {

            res.json({ error: "Please insert the birthdate." });
        }

    } else {

        res.json({ error: "Please, insert the name." });
    }

}

export const addVehicle = async (req, res) => {

    let id = req.params.id;
    const { title, color, plate } = req.body;

    if (title) {

        if (color) {

            if (plate) {

                let response = await UnitServices.addVehicle(id, title, color, plate);

                res.json(response);

            } else {

                res.json({ error: "Please, insert the vehicle plate." });
            }

        } else {

            res.json({ error: "Please insert the vehicle color." });
        }

    } else {

        res.json({ error: "Please, insert the vehicle title." });
    }

}

export const addPet = async (req, res) => {

    let id = req.params.id;
    const { name, race } = req.body;

    if (name) {

        if (race) {

            let response = await UnitServices.addPet(id, name, race);

            res.json(response);

        } else {

            res.json({ error: "Please insert the pet race" });
        }

    } else {

        res.json({ error: "Please, insert the pet name." });
    }
    
}

export const removePerson = async (req, res) => {

}

export const removeVehicle = async (req, res) => {

}

export const removePet = async (req, res) => {

}