import { useState } from "react"

const AddProject = (props) => {

    const [values, setValues]= useState({
      title: "",
      field:"",
      description: "",
      images:[]
    });
    
    
    const handlerChange = (event) => {
      const { name, value } = event.target;
      setValues({
        ...values,
        [name]: value
      });
    }

      const handleSubmit= e=>{
        e.preventDefault()
        props.addOrEdit(values)
        console.log(values)
      }

      const deleteProjects = ()=>props.deleteProject()
      
       

  return (
    <div className="add-project">
          <form onSubmit={handleSubmit}>
            <h1>Add New Project</h1>

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
              onChange={handlerChange}
              className="input-img"
              multiple   
            />
          </div>

          <div className="div-input">
            <label htmlFor="description">Description</label>
            <input
              type="textarea"
              name="description"
              value={values.description}
              onChange={handlerChange}
              className="input"
              placeholder="Please write a brief description..."
            />
          </div>

          <button type="submit" className="special-btn">Submit</button>
         
          </form>
          <button onClick={()=>deleteProjects()}>Delete</button>
        </div>
  )
}

export default AddProject	;

