import {getStorage, ref} from 'firebase/storage'
import {app} from '../index'

export const storage = getStorage(app);
