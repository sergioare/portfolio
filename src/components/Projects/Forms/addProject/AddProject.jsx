import { useState } from "react"
import './AddProject.scss'
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../../../../firebase";

const AddProject = (props) => {
  
  const [images, setImages] = useState([])
  const [values, setValues]= useState({
    title: "",
    field:"",
    description: "",
    images:""
  });
  
    const [urls, setUrls] = useState([])

    const handlerChangeImage= (event)=>{
      for(let i=0; 1<event.target.files.length; i++){
        const newImage= event.target.files[i]
        newImage["id"] = Math.random()
        setImages(prevState=> [...prevState, newImage])
      }
    }
    
    const handleUploadImage = ()=>{
      const promises=[]

      images.map((image)=>{

        const storageRef = ref(storage,`${values.title}/${image.name}`)

        const uploadTask = uploadBytesResumable(storageRef, image);
        promises.push(uploadTask)
        uploadTask.on('stage_changed',
        (snapshot)=>{},
        (error) =>{
          console.log(error)
        },
        async ()=>{
          await getDownloadURL(uploadTask.snapshot.ref)
          .then((downloadURL)=>{
            console.log('File available at', downloadURL)
            setUrls(prevState=>[...prevState, downloadURL])
          })
        }
        )
      })
      Promise.all(promises)
      .then(()=> alert("All images uploaded"))
      .catch(error=> console.log(error))
    }
    
    console.log("image", images);

    const handlerChange = (event) => {
      const { name, value } = event.target;
      setValues({
        ...values,
        [name]: value
      });
      }

      const handleSubmit= e=>{
        e.preventDefault()
        props.addOrEdit(values, values.title)
        props.addUrlsImages(urls, values.title)
        console.log(values)
      }

      const deleteProjects = ()=>{
      const accept= confirm('Are you sure to delete this project?')
      if(accept) props.deleteProject(values.title)
      
      }
       

  return (
    <div className="add-project">
          <form onSubmit={handleSubmit}>
            <h1>Modify your Projects</h1>

            <div className="div-input">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              value={values.title}
              onChange={handlerChange}
              className="input"
             
            />
          </div>

          <div className="div-input">
            <label htmlFor="field">Field/Industry</label>
            <input
              type="text"
              name="field"
              value={values.field}
              onChange={handlerChange}
              className="input"
            />
          </div>

          <div className="div-input">
            <label htmlFor="images">Project Images</label>
            <input
              type="file"
              name="images"
              value={values.images}
              onChange={handlerChangeImage}
              className="input-img"
              accept="image/png , image/jpeg, image/webp"
              multiple   
            />
            <button onClick={handleUploadImage}>Upload</button>
            {/* <img src={url || ''} alt='firebase-img'/> */}
          </div>

          <div className="input-textarea">
            <label htmlFor="description">Description</label>
            <input
              type="textarea"
              name="description"
              value={values.description}
              onChange={handlerChange}
              className="textarea"
              placeholder="Please write a brief description..."
            
            />
          </div>

          <div className="buttons">
            <button type="submit" className="special-btns">Submit</button>
          </div>
          </form>
            <button onClick={()=>deleteProjects()} className="special-btn">Delete</button>
        </div>
  )
}

export default AddProject	;

