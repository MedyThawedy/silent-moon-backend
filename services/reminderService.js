import { getDb } from '../util/db.js'
import { ObjectId } from "mongodb"

export const saveAppointmentDate = async (appointmentDate) => {
    const db = await getDb();
    const result = await db.collection('reminder').insertOne(appointmentDate)
    return result;
}


//https://www.w3resource.com/mongodb/mongodb-array-update-operator-$push.php
// Find User with the userid and insert reminder_id in the user collection
export const pushAppointmentToUser = async (reminderid, userid) => {
    const db = await getDb()
    const result = await db.collection('user').updateOne({ _id: new ObjectId(userid) }, { $push: { reminder_id: [new ObjectId(reminderid)] } })
    return result
}

export const getAllAppointment = async () => {
    const db = await getDb();
    const result = await db.collection('reminder').find().toArray()
    return result;
}



