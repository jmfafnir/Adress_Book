import { Router } from 'express';
import { deleteContact, getContactByName, getContactByPhone, getContacts, postContact, putContact } from '../controllers/contactsController';


const router = Router();


router.get('/:name', getContactByName);
router.get('/', getContacts);
router.post('/', postContact);
router.put('/:id', putContact);
router.delete('/:id', deleteContact);



export default router