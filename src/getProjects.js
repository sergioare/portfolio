import {collection,doc, getDoc} from 'firebase/firestore'

export const getProjects = async ()=>{

    const projects = collection(db,"Projects"  );
    const data = await projects.getDoc(projects) 
}