import React from 'react'


export default function BtnHeader({ text, name, id, style, classNameInput = "", btnBorderStyle = "none" }) {
    return (
        <span className="d-flex" style={{ ...style?.span, height: "25px" }}>
            <p style={{ ...style?.p , fontSize:"12px" }} className={`  d-flex align-items-end`} >{text}</p>
            <input type="text" className={`${classNameInput}`} style={{ ...style?.input, borderStyle: `${btnBorderStyle}`, background: 'transparent' }} name={name} id={id} />
        </span>
    )
}
//