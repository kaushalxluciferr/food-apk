import React from 'react'
import './Appdownload.css'
import { assets } from '../../assests/assets'
function Appdownload() {
  return (
    <div className='app-download' id='app-download'>
      <p>Download for Better Experience</p>
      <div className="app-download-platforms">
        <img src={assets.play_store} alt="" />
        <img src={assets.app_store} alt="" />
      </div>
    </div>
  )
}

export default Appdownload
