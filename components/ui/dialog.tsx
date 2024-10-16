"use client"

import React, { createContext, useContext, useState } from 'react'
import { createPortal } from 'react-dom'
import { X } from "lucide-react"

const DialogContext = createContext<{
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}>({
  isOpen: false,
  setIsOpen: () => {},
})

export const Dialog: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <DialogContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </DialogContext.Provider>
  )
}

export const DialogTrigger: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { setIsOpen } = useContext(DialogContext)

  return React.cloneElement(children as React.ReactElement, {
    onClick: () => setIsOpen(true),
  })
}

export const DialogContent: React.FC<{ 
  children: React.ReactNode
  className?: string 
}> = ({ children, className = '' }) => {
  const { isOpen, setIsOpen } = useContext(DialogContext)

  if (!isOpen) return null

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-black/80" onClick={() => setIsOpen(false)} />
      <div className={`relative bg-white p-6 rounded-lg shadow-lg ${className}`}>
        {children}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </button>
      </div>
    </div>,
    document.body
  )
}

export const DialogHeader: React.FC<{ 
  children: React.ReactNode
  className?: string 
}> = ({ children, className = '' }) => (
  <div className={`flex flex-col space-y-1.5 text-center sm:text-left ${className}`}>
    {children}
  </div>
)

export const DialogFooter: React.FC<{ 
  children: React.ReactNode
  className?: string 
}> = ({ children, className = '' }) => (
  <div className={`flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 ${className}`}>
    {children}
  </div>
)

export const DialogTitle: React.FC<{ 
  children: React.ReactNode
  className?: string 
}> = ({ children, className = '' }) => (
  <h2 className={`text-lg font-semibold leading-none tracking-tight ${className}`}>
    {children}
  </h2>
)

export const DialogDescription: React.FC<{ 
  children: React.ReactNode
  className?: string 
}> = ({ children, className = '' }) => (
  <p className={`text-sm text-muted-foreground ${className}`}>
    {children}
  </p>
)