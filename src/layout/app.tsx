import React from 'react'

interface IAppProps {
  children: React.ReactNode;
}

const AppLayout:React.FC<IAppProps> = ({children}) => {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-800">
      {children}
    </div>
  )
}

export default AppLayout