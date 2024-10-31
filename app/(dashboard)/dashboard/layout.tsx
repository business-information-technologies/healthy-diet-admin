import React from 'react'

function Layout({children}:{children:React.ReactElement}) {
  return (
    <>
    <h1 className="text-3xl">DASHBOARD</h1>
    {children}
    </>
  )
}

export default Layout