import {getStorage, ref} from 'firebase/storage'
import {app} from '../db/database.js'

export const storage = getStorage(app);
