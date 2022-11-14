import express from 'express'
import { saveAppointment, pushToUserReminderList } from '../controller/reminderController.js'

export const router = new express.Router()

// Relation to Reminder
router.post('/api/saveappointment', saveAppointment)

// Relation to User  pushToUserYogaFavoriteList
router.put('/api/reminduser', pushToUserReminderList)