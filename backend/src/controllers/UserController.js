import * as UserServices from '../services/UserServices.js';

export const Login = async (req, res) => {

    const { email, password } = req.body;

    if (email && password) {

        let response = await UserServices.Login(email, password);

        if(response.error) {

            res.json({ error: response.error });

        } else {

            res.json({response})
        }

    } else {

        res.json({ error: 'E-mail e/ou senha não enviados!' });
    }

};

export const Register = async (req, res) => {

    const { name, email, password, cpf } = req.body;

    if (name && email && password && cpf) {

        let response = await UserServices.Register(name, email, password, cpf);

        if(response.error) {
            
            res.json({ error: response.error })
        
        } else {

            res.json({ response });
        } 

    } else {

        res.json({ error: 'E-mail e/ou senha não enviados!' });
    }

};