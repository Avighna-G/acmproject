import React from 'react'

function TestModal({open, onClose, children}) {
  return (
    <div onClick={onClose}
         className={`fixed inset-0 justify-center items-center 
         transition-colors ${open ? "visible bg-black" : "invisible"}`}
    >
        {children}
    </div>
  )
}

export default TestModal