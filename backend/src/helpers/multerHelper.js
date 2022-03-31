import multer from 'multer';

const storageDocs = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/docs');
    }, 
    filename: (req, file, cb) => {
        let name = `${Date.now()}.pdf`;
        cb(null, name);
    }
});

const storageBillets = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/billets');
    }, 
    filename: (req, file, cb) => {
        let name = `${Date.now()}.pdf`;
        cb(null, name);
    }
});

export const uploadDocs = multer({
    storage: storageDocs,                
    fileFilter: (req, file, cb) => {          

        const allowed = [ 'application/pdf' ];
        cb(null, allowed.includes ( file.mimetype )); 
    },
    limits: { fieldSize: 100000000000 }         
});

export const uploadBillets = multer({
    storage: storageBillets,                
    fileFilter: (req, file, cb) => {          

        const allowed = [ 'application/pdf' ];
        cb(null, allowed.includes ( file.mimetype )); 
    },
    limits: { fieldSize: 100000000000 }         
});