"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const usuarios_1 = require("../controllers/usuarios");
const validar_campos_1 = require("../middlewares/validar-campos");
const router = (0, express_1.Router)();
router.get('/', usuarios_1.getUsuarios);
router.get('/:id', usuarios_1.getUsuario);
router.post('/', [
    (0, express_validator_1.check)('nombre', 'El nombre es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('apellidoPaterno', 'El apellido paterno es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('apellidoMaterno', 'El apellido materno es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('fechaNacimiento', 'La fecha es obligatoria').not().isEmpty(),
    (0, express_validator_1.check)('telefono', 'El telefono es obligatorio y debe de tener 10 digitos ').not().isEmpty().isLength({ min: 10, max: 10 }).isNumeric(),
    (0, express_validator_1.check)('email', 'El correo no es válido').isEmail(),
    validar_campos_1.validarCapos
], usuarios_1.postUsuario);
router.put('/:id', usuarios_1.putUsuario);
router.delete('/:id', usuarios_1.deleteUsuario);
exports.default = router;
//# sourceMappingURL=usuario.js.map