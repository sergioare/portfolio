import './Projects.scss'
import design from '../../assets/design.svg'
import server from '../../assets/server.svg'
import Swal from 'sweetalert2';
import { useEffect, useState } from 'react';
import { AddProject } from './Forms';
import { db } from '../../firebase';
import { collection, addDoc, getDocs, doc, setDoc, deleteDoc } from "firebase/firestore";


const Projects =  () => {
    const [isAdmin, setIsAdmin] = useState(false)
    const apiKey= import.meta.env.API_KEY
    const idAdmin = import.meta.env.ID_USER_ADMIN
    const firebaseData= sessionStorage.getItem(`firebase:authUser:${apiKey}:[DEFAULT]`)
    const showAlert=()=>{
        Swal.fire({
            title:'Please try login or authenticate',
            icon: 'error',
            footer: 'Come back when you get it',
            timer: 2000,            
        })}
    useEffect(()=>{
        if(firebaseData){
            const userUid = JSON.parse(firebaseData).uid
            setIsAdmin(userUid === idAdmin)
        }
    },[firebaseData])

        
    // const codeAdv =  doc(db, 'Projects', 'CodeAdvisor') crea referencias


    const addOrEdit =  async (data)=>{
        console.log(data)
        try {

            await setDoc(doc(db, 'Projects', 'Movies'),data) // hacerlo dinamico
            
          } catch (e) {
            console.error("Error adding document: ", e);
          }
    }

    const deleteProject = async ()=>{
        try {
            await deleteDoc(doc(db, "Projects", "Movies")) // hacerlo dinamico
        } catch (error) {
            console.log(error)
        }
    }
      

    return (
        <div className='projects'>
            <div className="top-side">
                <div className='top'>
                    <div className='special-btn'>🔗 Portfolio</div>
                    {isAdmin 
                        ?<div className='special-btn edit' >Edit</div>
                        :<div className='special-btn edit' onClick={()=>showAlert()}>Edit</div>
                    }
                </div>
                <div className="bottom">
                    <div className='works'>Works And Projects</div>
                    <div className='exp-btn'>
                        <div className="btn"><span><img src={design} alt='design'/></span>Front-end</div>
                        <div className="btn"><span><img src={server} alt='design'/></span>Back-end</div>
                        <div className="btn"><span>$</span>Commercial</div>
                    </div>
                </div>
            </div>
            <div className="bottom-side">

                  <AddProject 
                    addOrEdit={addOrEdit}
                    deleteProject={deleteProject}
                  
                  />
            </div>
            
        </div>
    );
};

export default Projects;