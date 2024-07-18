import React from 'react'
import { Rings } from 'react-loader-spinner'

const Pageloader = () => {
  return (
    <div>
        <Rings
        visible={true}
        height="80"
        width="80"
        color= "#4fa94d"
        ariaLabel='rings-loading'
        wrapperStyle={{}}
        wrapperClass=''
        />    
    </div>
  )
}

export default Pageloader