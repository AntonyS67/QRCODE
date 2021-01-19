import React from 'react'

function Alert({message,classAlert}) {
    return (
        <div className={`alert alert-${classAlert} alert-dismissible fade show`} role="alert">
            {message}
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    )
}

export default Alert
