import React from 'react'
import "./Menu.css"
import Circle from './Images/Project_Image/Chikki circular mirror  Small.webp'
import MirrorFrame from './Images/Project_Image/Mirror Frame Spiral.webp'
import MirroRustics from './Images/Project_Image/Mirro Rustics.webp'
import MoonMirrors from './Images/Project_Image/Sun Moon Mirrors.webp'
import MirrorSparrow from './Images/Mirror Sparrow.webp'
import DualityMirror from './Images/Project_Image/Duality Mirror.webp'
import SquiggleMirror from './Images/Project_Image/Squiggle Mirror.webp'
import VicotrianMirror from './Images/Project_Image/Vicotrian Mirror.webp'
import MirrorBahunia from './Images/Project_Image/Mirror Bahunia.webp'
import MirrorPooja from './Images/Project_Image/Mirror Pooja.webp'
import MirrorGold from './Images/Project_Image/Mirror Gold Foil.webp'
import NextArrow from './Images/right-arrow.png'
import Cone from './Images/Project_Image/Cone.webp'
import Classic from './Images/Project_Image/Classic.webp'
import Maple from './Images/Project_Image/Maple.webp'
import Mirror from './Images/Project_Image/Mirror.webp'




export const Menu = () => {
  return (
    <div className='turyadesignone-container'>

        {/* First Row Container */}

        <div className="row turyaMirror-Firstrow-container">
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 turyaMirror-Firstcolumn">
                <div className="TuryaMirror-Heading">
                    <h1>MIRRORS</h1>
                </div>
                <div className="TuryaMirrors-first-one">
                    <img  src={Circle} alt="" />
                </div>
                <div className="TuryaMirrors-first-two">
                    <img  src={MirrorFrame} alt="" />
                </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 turyaMirror-Secondcolumn">
                <div className="TuryaMirrors-second-one">
                    <img  src={MirroRustics} alt="" />
                </div>
                <div className="TuryaMirrors-second-two">
                    <img  src={MoonMirrors} alt="" />
                </div>
                <div className="TuryaMirrors-second-three">
                     <img  src={MirrorSparrow} alt="" />
                </div>
            </div>
        </div>


        {/* Second Row Container */}


        <div className="row turyaMirror-Secondrow-container">
            <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 Secondrow-First-container">
                <div className="Firstone-inner-container">
                    <img src={DualityMirror} alt="" />
                </div>
                <div className="Firstone-inner-container">
                    <img src={SquiggleMirror} alt="" />
                </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 Secondrow-Second-container">
                <div className="secondone-inner-container">
                    <img className="secondone-inner-container" src={VicotrianMirror} alt="" />
                </div>
                <div className="secondone-inner-container">
                    <img className="secondone-inner-container" src={MirrorBahunia} alt="" />
                </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 Secondrow-Third-container">
                <div className="Thirdone-inner-container">
                    <img src={MirrorPooja} alt="" />
                </div>
                <div className="Thirdone-inner-container">
                    <img src={MirrorGold} alt="" />
                </div>
            </div>
        </div>

        {/* Third Row Container */}


        <div className="row thirdrow-mirror-container">
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 thirdrow-innerfirst-conatiner">
                <div className="thirdrow-container-firstone">
                  <img className='thirdrow-innerImage-one' src={Cone} alt="" />
                </div>
                <div className="thirdrow-container-secondone">
                  <img className='thirdrow-innerImage-one' src={Mirror} alt="" />
                </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 thirdrow-innersecond-conatiner">
            <div className="thirdrow-container-firstone">
                  <img className='thirdrow-innerImage-one' src={Classic} alt="" />
                </div>
                <div className="thirdrow-container-secondone">
                  <img className='thirdrow-innerImage-one' src={Maple} alt="" />
                </div>
            </div>
        </div>

        {/* Next Arrow Container */}


        <div className="NextArrow-container">
            <h1 className='Next-Heading'>NEXT</h1>
            <img className='Next-Arrow-img' src={NextArrow} alt="" />
        </div>

    </div>
  )
}
