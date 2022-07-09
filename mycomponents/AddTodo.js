import React, { useState } from 'react';

export const AddTodo = ({addTodo}) => {

    let addtodostyle = {
        width: "40%"
    }

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit = (e)=>{
        e.preventDefault();
        if(!title || !desc)
            {
                alert("Title or desc cannot be blank");
            }
        addTodo(title,desc);
        setTitle("");
        setDesc("");
    }

  return (
    <div className="container my-3" style={addtodostyle}>
        <h3>Add a Todo</h3>
        <form onSubmit={submit}>
            <div className="mb-3">
            <label htmlFor="title" className="form-label">
                Todo Title
            </label>
            <input type="text" autoComplete='off' value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="title" aria-describedby="emailHelp" />
            </div>

            <div className="mb-3">
            <label htmlFor="desc" className="form-label">Todo Description</label>
            <input type="text" autoComplete='off' value={desc} onChange={(e)=>{setDesc(e.target.value)}} className="form-control" id="desc" />
            </div>

            <button type="submit" className="btn btn-success btn-sm">Add Todo</button>

        </form>
    </div>
  );
};
