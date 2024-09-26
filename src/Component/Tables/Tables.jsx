import React from 'react'
import "./Accessorries.css"

// TRAY IMAGES

import SplashTray from './Accessories_Images/Trays/Splash Tray.webp'
import Handpainted from './Accessories_Images/Trays/Handpainted Tray.webp'
import FallLeaves from './Accessories_Images/Trays/Fall Leaves Tray.webp'
import InlayTray from './Accessories_Images/Trays/Inlay Tray.webp'
import PeacockTray from './Accessories_Images/Trays/Peacock Tray.webp'
import CheeseBoard from './Accessories_Images/Trays/The Cheese Board Tray.webp'
import Theclassic from './Accessories_Images/Trays/The classic .webp'
import ContemporaryTray from './Accessories_Images/Trays/The Contemporary Tray.webp'
import CutieTray from './Accessories_Images/Trays/The Cutie Tray.webp'
import TRITray from './Accessories_Images/Trays/TRI Tray.webp'

// HOOKS IMAGES

import BasicDressWallHook from './Accessories_Images/Hooks/Basic Dress Wall Hook.webp'
import CutoutEdgeHook from './Accessories_Images/Hooks/Cutout Edge Hook.webp'
import DendriteHook from './Accessories_Images/Hooks/Dendrite Hook.webp'
import MetalRobeHook from './Accessories_Images/Hooks/Metal Robe Hook.webp'
import HookLedge from './Accessories_Images/Hooks/Hook Ledge.webp'
import MotifLedge from './Accessories_Images/Hooks/Motif Ledge.webp'
import OrnateLedge from './Accessories_Images/Hooks/Ornate Ledge.webp'
import ScrewRobeHook from './Accessories_Images/Hooks/Screw Robe Hook.webp'
import SlantedHook from './Accessories_Images/Hooks/Slanted Hook.webp'
import ClassicLedge from './Accessories_Images/Hooks/The Classic Ledge.webp'
import TheOLedge from './Accessories_Images/Hooks/The O Ledge.webp'
import PlumeriaHook from './Accessories_Images/Hooks/Plumeria Hook.webp'

// HOOKS IMAGES

import NatureCopperCoasters from './Accessories_Images/Nature Copper Coasters.webp'
import FlowerVase from './Accessories_Images/Flower Vase.webp'
import KeyHolder from './Accessories_Images/Key Holder.webp'
import MagazineStand from './Accessories_Images/Magazine Stand.webp'
import PencilHolder from './Accessories_Images/Pencil Holder.webp'
import PlanterStand from './Accessories_Images/Planter Stand.webp'
import Ringbowl from './Accessories_Images/Ring bowl.webp'
import Swirlsbowl from './Accessories_Images/Swirls bowl.webp'
import TheBookWorms from './Accessories_Images/The BookWorms.webp'
import TheCrow from './Accessories_Images/The Crow.webp'
import TraibleBowel from './Accessories_Images/The Traible Bowel.webp'

// NEXT ARROW IMAGES

import NextArrow from './Accessories_Images/right-arrow.png'


export const Accessories = () => {
  return (
    <div className='turyadesign-Accessories-container'>

        {/* First Row Container - TRAYS SECTIONS */}

        <div className="row turyaAccessories-Tray-Firstrow-container">
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 turyaAccessories-Tray-Firstcolumn">
                <div className="TuryaAccessories-Heading">
                    <h1>ACCESSORIES</h1>
                </div>
                <div className="TuryaAccessories-Tray-first-one">
                    <img  src={SplashTray} alt=""/>
                </div>
                <div className="TuryaAccessories-Tray-first-two">
                    <img  src={Handpainted} alt=""/>
                </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 turyaAccessories-Tray-Secondcolumn">
                <div className="TuryaAccessories-Tray-second-one">
                    <img  src={FallLeaves} alt="" />
                </div>
                <div className="TuryaAccessories-Tray-second-two">
                    <img  src={InlayTray} alt="" />
                </div>
                <div className="TuryaAccessories-Tray-second-three">
                     <img  src={PeacockTray} alt="" />
                </div>
            </div>
        </div>

        <div className="row turyaAccessories-Tray-Firstrow-container">
            
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 turyaAccessories-Tray-Secondcolumn">
                <div className="TuryaAccessories-Tray-second-one">
                    <img  src={CheeseBoard} alt=""/>
                </div>
                <div className="TuryaAccessories-Tray-second-two">
                    <img  src={Theclassic} alt=""/>
                </div>
                
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 turyaAccessories-Tray-Firstcolumn">
                <div className="TuryaAccessories-Tray-first-oneplus">
                    <img  src={ContemporaryTray} alt=""/>
                </div>
                <div className="TuryaAccessories-Tray-first-two">
                    <img  src={CutieTray} alt=""/>
                </div>
                <div className="TuryaAccessories-Tray-first-three">
                    <img  src={TRITray} alt=""/>
                </div>
                
            </div>
        </div>


        {/* Second Row Container - TRAYS SECTIONS  */}


        <div className="row turyaAccessories-Secondrow-container">
            <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 TuryaAccessories-Secondrow-First-container">
                <div className="TuryaAccessories-Firstone-inner-container">
                    <img src={BasicDressWallHook} alt="" />
                </div>
                <div className="TuryaAccessories-Firstone-inner-container">
                    <img src={CutoutEdgeHook} alt="" />
                </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 TuryaAccessories-Secondrow-Second-container">
                <div className="TuryaAccessories-secondone-inner-container">
                    <img src={DendriteHook} alt="" />
                </div>
                <div className="TuryaAccessories-secondone-inner-container">
                    <img  src={MetalRobeHook} alt="" />
                </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 TuryaAccessories-Secondrow-Third-container">
                <div className="TuryaAccessories-Thirdone-inner-container">
                    <img src={HookLedge} alt="" />
                </div>
                <div className="TuryaAccessories-Thirdone-inner-container">
                    <img src={MotifLedge} alt="" />
                </div>
            </div>
        </div>

        <div className="row turyaAccessories-Secondrow-container">
            <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 TuryaAccessories-Secondrow-First-container">
                <div className="TuryaAccessories-Firstone-inner-container">
                    <img src={OrnateLedge} alt="" />
                </div>
                <div className="TuryaAccessories-Firstone-inner-container">
                    <img src={ScrewRobeHook} alt="" />
                </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 TuryaAccessories-Secondrow-Second-container">
                <div className="TuryaAccessories-secondone-inner-container">
                    <img src={SlantedHook} alt="" />
                </div>
                <div className="TuryaAccessories-secondone-inner-container">
                    <img  src={ClassicLedge} alt="" />
                </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 TuryaAccessories-Secondrow-Third-container">
                <div className="TuryaAccessories-Thirdone-inner-container">
                    <img src={TheOLedge} alt="" />
                </div>
                <div className="TuryaAccessories-Thirdone-inner-container">
                    <img src={PlumeriaHook  } alt="" />
                </div>
            </div>
        </div>

        {/* Next Arrow Container */}


        <div className="TuryaAccessories-NextArrow-container">
            <h1 className='TuryaAccessories-Next-Heading'>NEXT</h1>
            <img className='TuryaAccessories-Next-Arrow-img' src={NextArrow} alt="" />
        </div>

        

    </div>
  )
}
