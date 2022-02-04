import React from 'react'

export default function Alert(props) {

    
    return (
        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show p-2`} role="alert">
        <strong>Success: </strong> {props.alert.msg}.
        </div>
    )
}
