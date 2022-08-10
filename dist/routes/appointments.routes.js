"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const appointmentsRouter = (0, express_1.Router)();
const appointments = [];
// http://localhost:3333/appointments
appointmentsRouter.post('/', (request, response) => {
    const { provider, date } = request.body;
    const appointment = {
        provider,
        date,
    };
    return response.json({ message: 'Hello Appointments' });
});
exports.default = appointmentsRouter;
