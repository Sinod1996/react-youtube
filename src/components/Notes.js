import React from "react";

export const Notes = ({notes}) => {
    return (
        <ul className="list-group">
            {notes.map(note => {
                return (
                        <li className= "list-group-item note"
                            key = {note.id}
                        >
                            <div>
                                <strong>{note.title}</strong>
                                <span>{new Date().toDateString()}</span>
                            </div>
                            <button
                                type="button"
                                className="btn btn-outline-danger btn-sm"
                            >
                                &times;
                            </button>
                        </li>
                    )
            })}

        </ul>
    )
}