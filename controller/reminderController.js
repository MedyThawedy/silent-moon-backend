import { getDb } from '../util/db.js'
import { saveAppointmentDate, pushAppointmentToUser } from '../services/reminderService.js';

export const saveAppointment = async (req, res) => {
    const appointmentDate = req.body;
    const findAllMusic = await saveAppointmentDate(appointmentDate)
    res.status(200).json(findAllMusic);
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