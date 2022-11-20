import { getDb } from '../util/db.js'
import { saveAppointmentDate, pushAppointmentToUser, getAllAppointment } from '../services/reminderService.js';

export const saveAppointment = async (req, res) => {
    const appointmentDate = req.body;
    try {
        const appointment = await saveAppointmentDate(appointmentDate)
        res.status(200).json({ message: 'Appointment saved! ' });
    } catch (err) {
        res.status(500).json({ error: err })
    }

}

export const pushToUserReminderList = async (req, res) => {
    const reminderid = req.body.reminder_id
    //?????????
    const userid = req.body.user_id
    try {
        const result = await pushAppointmentToUser(reminderid, userid)
        console.log(result)
        res.status(200).json(result)
    } catch (err) {
        res.status(500).json({ error: err })
    }
}

//getAllAppointment
export const getAppointments = async (req, res) => {

    try {
        const result = await getAllAppointment()
        console.log(result)
        res.status(200).json(result)
    } catch (err) {
        res.status(500).json({ error: err })
    }
}
