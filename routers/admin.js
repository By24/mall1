    
import express from 'express';
import Admin from '../controller/AdminController';
const router = express.Router();

router.post('/register', Admin.register )
router.get('/login', Admin.login )

export default router