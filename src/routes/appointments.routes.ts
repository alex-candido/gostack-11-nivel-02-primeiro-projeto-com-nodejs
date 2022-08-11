import { parseISO } from 'date-fns';
import { Router } from 'express';

import AppointmentsRepository from '../repositories/AppointmentsRepository';
import CreateAppointmentService from '../services/CreateAppointmentService';

const appointmentsRouter = Router();
const appointmentsRepository = new AppointmentsRepository();

// Rota: Receber a requisição, chamar outro arquivo, devolver uma resposta

// SoC: Separations of concerns (Separação de preocupações)
appointmentsRouter.get('/', (request, response) => {
  const appointments = appointmentsRepository.all();

  return response.json(appointments);
});

appointmentsRouter.post('/', (request, response) => {
  const { provider, date } = request.body;

  const parsedDate = parseISO(date);

  const CreateAppointment = new CreateAppointmentService(
    appointmentsRepository,
  );

  const appointment = CreateAppointment.execute({ date: parsedDate, provider });

  return response.json(appointment);
});

export default appointmentsRouter;
