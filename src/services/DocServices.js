import { Doc } from '../models/Doc.js';

export const addDoc = async (file, title) => {

    const filename = `${file.filename}`;

    let createdFile = await Doc.create({ title, fileurl: `docs/${filename}` });

    return createdFile;

}

export const getAll = async () => {

    return await Doc.findAll();

}