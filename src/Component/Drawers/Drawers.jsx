import React from 'react'
import "./Drawers.css"
import cherryblossom from './Drawers_Images/cherry blossom.webp'
import Dualitychest from './Drawers_Images/Duality chest of drawers.webp'
import Earthchest from './Drawers_Images/Earth chest of drawers.webp'
import FallMonet from './Drawers_Images/Fall Monet chest of drawers .webp'
import GeometricPattern from './Drawers_Images/Geometric Pattern.webp'
import mandalacabinet from './Drawers_Images/mandala cabinet.webp'
import RedRose from './Drawers_Images/Red Rose.webp'
import RusticCabinet from './Drawers_Images/Rustic Cabinet.webp'
import Scandinavian from './Drawers_Images/Scandinavian.webp'
import Terrachest from './Drawers_Images/Terra chest of drawers.webp'
import Thevintage from './Drawers_Images/The vintage .webp'
import NextArrow from './Images/right-arrow.png'


export const Drawers = () => {
  return (
    <div className='turyadesign-Drawers-container'>

        {/* First Row Container */}

        <div className="row turyaDrawers-Firstrow-container">
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 turyaDrawers-Firstcolumn">
                <div className="TuryaDrawers-Heading">
                    <h1>DRAWERS</h1>
                </div>
                <div className="TuryaDrawers-first-one">
                    <img  src={cherryblossom} alt="" />
                </div>
                <div className="TuryaDrawers-first-two">
                    <img  src={Earthchest} alt="" />
                </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 turyaDrawers-Secondcolumn">
                <div className="TuryaDrawers-second-one">
                    <img  src={Dualitychest} alt="" />
                </div>
                <div className="TuryaDrawers-second-two">
                    <img  src={FallMonet} alt="" />
                </div>
                <div className="TuryaDrawers-second-three">
                     <img  src={GeometricPattern} alt="" />
                </div>
            </div>
        </div>


        {/* Second Row Container */}


        <div className="row turyaDrawers-Secondrow-container">
            <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 TuryaDrawers-Secondrow-First-container">
                <div className="TuryaDrawers-Firstone-inner-container">
                    <img src={mandalacabinet} alt="" />
                </div>
                <div className="TuryaDrawers-Firstone-inner-container">
                    <img src={RedRose} alt="" />
                </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 TuryaDrawers-Secondrow-Second-container">
                <div className="TuryaDrawers-secondone-inner-container">
                    <img src={RusticCabinet} alt="" />
                </div>
                <div className="TuryaDrawers-secondone-inner-container">
                    <img  src={Scandinavian} alt="" />
                </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 TuryaDrawers-Secondrow-Third-container">
                <div className="TuryaDrawers-Thirdone-inner-container">
                    <img src={Terrachest} alt="" />
                </div>
                <div className="TuryaDrawers-Thirdone-inner-container">
                    <img src={Thevintage} alt="" />
                </div>
            </div>
        </div>

        {/* Next Arrow Container */}


        <div className="TuryaDrawers-NextArrow-container">
            <h1 className='TuryaDrawers-Next-Heading'>NEXT</h1>
            <img className='TuryaDrawers-Next-Arrow-img' src={NextArrow} alt="" />
        </div>

        

    </div>
  )
}
