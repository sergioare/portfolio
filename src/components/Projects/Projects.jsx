import './Projects.scss'
import design from '../../assets/design.svg'
import server from '../../assets/server.svg'
import Swal from 'sweetalert2';
import { useEffect, useState } from 'react';
import { AddProject } from './Forms';
import { analytics, db } from '../../firebase';
import { collection, addDoc, getDoc, getDocs, doc, setDoc, deleteDoc,onSnapshot,query, updateDoc, arrayUnion } from "firebase/firestore";
import { storage } from '../../firebase';
import {  ref, getDownloadURL } from "firebase/storage";
import Modals from '../../modal/Modals';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { logEvent } from 'firebase/analytics';

const Projects =  () => {
    const [isAdmin, setIsAdmin] = useState(false)
    const [projects, setProjects]= useState([])
    const [urls, setUrls] = useState([])


    const apiKey= import.meta.env.API_KEY
    const idAdmin = import.meta.env.ID_USER_ADMIN
    const firebaseData= sessionStorage.getItem(`firebase:authUser:${apiKey}:[DEFAULT]`)
    const showAlert=()=>{
        Swal.fire({
            title:'Please try Login or Authenticate',
            icon: 'error',
            footer: 'Come back when you get it',
            timer: 2000,            
        })}
       
    // const codeAdv =  doc(db, 'Projects', 'CodeAdvisor') crea referencias

    const addOrEdit =  async (data, projectName)=>{
        console.log(data)
        try {

            await setDoc(doc(db, 'Projects', `${projectName}`),data) // hacerlo dinamico
            
          } catch (e) {
            console.error("Error adding document: ", e);
          }
    }
    const addUrlsImages = async (data, projectName)=>{
        try{
            const projectRef = doc(db, 'Projects', `${projectName}`)
             await updateDoc(projectRef,{
                URLs: arrayUnion(data)
             })
        } catch (e) {
            console.error("Error adding document: ", e);
          }
    }

    const deleteProject = async (projectName)=>{
        try {
            await deleteDoc(doc(db, "Projects", `${projectName}`)) // hacerlo dinamico
        } catch (error) {
            console.log(error)
        }
    }
      
    const getProjects = async ()=>{
        const q = query(collection(db, "Projects"));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const projectDocs=[]
            querySnapshot.forEach((doc) => {
                projectDocs.push({...doc.data(), id:doc.id})
            });
            setProjects(projectDocs)
            console.log(projectDocs)
        });
    }
    
    const projectRef = ref(storage,`${projects.title}` )
    async ()=>{
        await getDownloadURL(projectRef)
        .then((urls) => {
            setUrls(prevState=>[...prevState, urls])
    })}
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 1
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

        useEffect(()=>{ 
       
           logEvent(analytics,"Portfolio_visited")
           getProjects()
        },[])

        useEffect(()=>{
            if(firebaseData){
                const userUid = JSON.parse(firebaseData).uid
                setIsAdmin(userUid === idAdmin)
            }
        },[firebaseData])

    return (
        <div className='projects'>
            <div className="top-side">
                <div className='top'>
                    <div className='special-btn'>🔗 Portfolio</div>
                    {isAdmin 
                        ?<div className='btn' >
                             <Modals name="Edit Projects"
                             classNameProp='special-btn edit '>
                                <AddProject 
                                    addOrEdit={addOrEdit}
                                    deleteProject={deleteProject}
                                    addUrlsImages={addUrlsImages}
                                
                                />
                             </Modals>
                        </div>
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

                <div className='cards'>
                {projects.map((project, index)=>{
                    return(

                        <div className="cardExp" key={index}>

                            <Carousel className='carousel'
                                responsive={responsive}
                                infinite={true}
                                autoPlaySpeed={2000}
                                customTransition="all .3"
                                autoPlay={true}
                                swipeable={true}
                                >

                               {project.images.map((url, index)=>{
                                return (
                                    <div className='images-div' key={index}>
                                        <img src={url} alt={index} className='images' />
                                    </div>
                                )
                               })}
                            </Carousel>


                            <div className='info'>
                                <div className="text">
                                    <div className="title">{project.title}</div>
                                    <hr/>
                                    <div className="position">{project.field}</div>
    
                                </div>
                            </div>
                            <div className="description">{project.description}</div>
                        </div>
                    )
                })}
                </div>  
                 
            </div>
            
        </div>
    );
};

export default Projects;