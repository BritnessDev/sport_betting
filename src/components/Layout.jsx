import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'

const Layout = ({children}) => {

  return (
    <div>
        <Header />
        <div className="flex">
            <Sidebar />
            <div 
                style={{
                    width: "calc(100vw - 278px)",
                }}
            >
                {children}
            </div>
        </div>
    </div>
  )
}

export default Layout
