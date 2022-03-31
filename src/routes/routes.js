import { Router } from 'express';
import { Auth } from '../middlewares/auth.js';
import * as BilletController from '../controllers/BilletController.js';
import * as DocController from '../controllers/DocController.js';
import * as FoundAndLostController from '../controllers/FoundAndLostController.js';
import * as ReservationController from '../controllers/ReservationController.js';
import * as UnitController from '../controllers/UnitController.js';
import * as UserController from '../controllers/UserController.js';
import * as WallController from '../controllers/WallController.js';
import * as WarningController from '../controllers/WarningController.js';
import { uploadBillets, uploadDocs } from '../helpers/multerHelper.js';

const routes = Router();

// User  

routes.post('/login', UserController.Login);
routes.post('/register', UserController.Register);

// Warning Wall

routes.get('/walls', WallController.getAll);
routes.post('/walls/:id/like', Auth.private, WallController.Like);


// Documents

routes.get('/docs', Auth.private, DocController.getAll);
routes.post('/docs', Auth.private, uploadDocs.single('file'), DocController.addDoc);

// Billets

routes.get('/billets', Auth.private, BilletController.getAll);
routes.post('/billets', Auth.private, uploadBillets.single('file'), BilletController.addBillet);


// Warnings

routes.get('/warnings', Auth.private, WarningController.getMyWarnings);

/*
routes.post('/warnings', Auth.private, WarningController.AddWarning);



// Lost and Found

routes.get('/foundandlost', Auth.private, FoundAndLostController.getAll);
routes.post('/foundandlost', Auth.private, FoundAndLostController.AddLostAndFound);
routes.put('/foundandlost/:id', Auth.private, FoundAndLostController.UpdateLostAndFound);

// Unit

routes.get('/unit/:id', Auth.private, UnitController.getInfo);
routes.post('/unit/:id/addperson', Auth.private, UnitController.addPerson);
routes.post('/unit/:id/addvehicle', Auth.private, UnitController.addVehicle);
routes.post('/unit/:id/addpet', Auth.private, UnitController.addPet);
routes.post('/unit/:id/removeperson', Auth.private, UnitController.removePerson);
routes.post('/unit/:id/removevehicle', Auth.private, UnitController.removeVehicle);
routes.post('/unit/:id/removepet', Auth.private, UnitController.removePet);

// Reservations

routes.get('/reservations', Auth.private, ReservationController.getAll);
routes.post('/reservations', Auth.private, ReservationController.addReservation);
routes.get('/reservations/:id/disableddates', Auth.private, ReservationController.disabledDates);
routes.get('/reservations/:id/times', Auth.private, ReservationController.Times);
routes.get('/myreservations', Auth.private, ReservationController.getMyReservations);
routes.delete('/myreservations/:id', Auth.private, ReservationController.removeReservation);

*/

export default routes;