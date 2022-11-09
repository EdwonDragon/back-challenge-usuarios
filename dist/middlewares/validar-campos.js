"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validarCapos = void 0;
const express_validator_1 = require("express-validator");
const validarCapos = (req, res, next) => {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return res.status(400).json(Object.assign({ estado: false }, errors));
    }
    next();
};
exports.validarCapos = validarCapos;
//# sourceMappingURL=validar-campos.js.map