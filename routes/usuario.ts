import { Router } from 'express';
import { check } from 'express-validator';

import { getUsuario, getUsuarios, postUsuario, putUsuario, deleteUsuario } from '../controllers/usuarios';
import { validarCapos } from '../middlewares/validar-campos';


const router = Router();


router.get('/', getUsuarios);
router.get('/:id', getUsuario);

router.post('/',
    [
        check('nombre', 'El nombre es obligatorio').not().isEmpty(),
        check('apellidoPaterno', 'El apellido paterno es obligatorio').not().isEmpty(),
        check('apellidoMaterno', 'El apellido materno es obligatorio').not().isEmpty(),
        check('fechaNacimiento', 'La fecha es obligatoria').not().isEmpty(),
        check('telefono', 'El telefono es obligatorio y debe de tener 10 digitos ').not().isEmpty().isLength({ min: 10, max: 10 }).isNumeric(),
        check('email', 'El correo no es válido').isEmail(),
        validarCapos]
    , postUsuario);

router.put('/:id', putUsuario);
router.delete('/:id', deleteUsuario);



export default router;