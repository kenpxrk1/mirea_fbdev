import { useState } from "react"

export default function Todo({name, completed, id, toggleTaskCompleted, deleteTask, editTask}){

    const[isEditing, setIsEditing] = useState(false)

    const [newName, setNewName] = useState(name);

    function handleChange(e) {
        setNewName(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        editTask(id, newName);
        setNewName(newName);
        setIsEditing(false);
    }

    const editingTemplate = (
        <form className="stack-small" onSubmit={handleSubmit}>
        <div className="form-group">
        <label className="todo-label" htmlFor={id}>
        Новое имя для: {name}
        </label>
        <input id={id} className="todo-text" type="text" value={newName} onChange={handleChange}/>
        </div>
        <div className="btn-group">
        <button type="button" className="btn todo-cancel" onClick={()=>setIsEditing(false)}>
        Закрыть
        <span className="visually-hidden">renaming {name}</span>
        </button>
        <button type="submit" className="btn btn__primary todo-edit">
        Сохранить
        <span className="visually-hidden">new name for {name}</span>
        </button>
        </div>
        </form>
        );
        const viewTemplate = (
        <div className="stack-small">
        <div className="c-cb">
        <input
        id={id}
        type="checkbox"
        defaultChecked={completed}
        onChange={() => toggleTaskCompleted(id)}
        />
        <label className="todo-label" htmlFor={id}>
        {name}
        </label>
        </div>
        <div className="btn-group">
        <button type="button" className="btn" onClick={()=>setIsEditing(true)}> 
        Редактировать <span
        className="visually-hidden">{name}</span>
        </button>
        <button
        type="button"
        className="btn btn__danger"
        onClick={() => deleteTask(id)}
        >
        Удалить <span className="visually-hidden">{name}</span>
        </button>
        </div>
        </div>
        );

    return(
<li className="todo">{isEditing ? editingTemplate :
viewTemplate}</li>
    )
}