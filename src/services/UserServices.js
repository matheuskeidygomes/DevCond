import { User } from '../models/User.js';
import { Unit } from '../models/Unit.js';
import JWT from 'jsonwebtoken';
import dotenv from 'dotenv';
import bcrypt from 'bcrypt';

dotenv.config();

export const Register = async (name, email, password, cpf) => {

    let hasUser = await User.findOne({ where: { email } });

    if (!hasUser) {

        let hash = bcrypt.hashSync(password,10);

        await User.create({ name, email, password: hash, cpf });

        return ({ error: "All done! But we saw that you don't have any units to your name. Therefore, we ask that you wait until your registration is approved by the person in charge." });

    } else {

        return { error: 'E-mail already exist!' };
    }

}


export const Login = async (email, password) => {

    let user = await User.findOne({ where: { email } });
    let validPassword = bcrypt.compareSync(password, user.password);

    if (user && validPassword) {

        let hasUnit = await Unit.findAll({ where: { id_owner: user.id } });

        if (hasUnit.length > 0) {

            const token = JWT.sign(
                { id: user.id, email: user.email, unit: hasUnit },
                process.env.JWT_SECRET_KEY,
                { expiresIn: '2h' }
            );
    
            return { id: user.id, name: user.name, email: user.email, cpf: user.cpf, token, units: hasUnit };

        } else {

            return ({ error: "Please wait until the person in charge approves your registration."});
        }

    } else {

        return { error: 'Email and/or password incorrect! ' };
    }

}
