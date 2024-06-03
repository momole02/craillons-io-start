/* eslint-disable @typescript-eslint/no-unused-vars */

import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import ColorDisplay from './components/ColorDisplay';
import { Layer, Stage } from 'react-konva';
import { gToolList } from './factory/tools/tool-list';


function App() {

  const [selectedColor, setSelectedColor] = useState("#fff");
  const [canvasWidth, setCanvasWidth] = useState(600);
  const [canvasHeight, setCanvasHeight] = useState(600);
  const [toolOpacity, setToolOpacity] = useState(1);
  const [toolSize, setToolSize] = useState(16);
  const [currentTool, setCurrentTool] = useState(gToolList[0].id);
  const [starNumPoints, setStarNumPoints] = useState(5);
  const [starInnerRadius, setStarInnerRadius] = useState(5)
  const [starOuterRadius, setStarOuterRadius] = useState(5)



  return (
    <div>
      <Navbar 
        selectedColor={selectedColor} 
        setSelectedColor={setSelectedColor} 
        canvasWidth={canvasWidth} 
        canvasHeight={canvasHeight} 
        setCanvasWidth={setCanvasWidth} 
        setCanvasHeight={setCanvasHeight}
        currentTool={currentTool}
        setCurrentTool={setCurrentTool}
        toolOpacity={toolOpacity}
        setToolOpacity={setToolOpacity}
        toolSize={toolSize}
        setToolSize={setToolSize}
        starNumPoints={starNumPoints}
        setStarNumPoints={setStarNumPoints}
        starInnerRadius={starInnerRadius}
        setStarInnerRadius={setStarInnerRadius}
        starOuterRadius={starOuterRadius}
        setStarOuterRadius={setStarOuterRadius}
        />

      <div className="flex justify-center">
          <ColorDisplay color={selectedColor}/>
      </div>

      <div className="flex justify-center ">
        <Stage 
          className={" cursor-crosshair w-min bg-[#ededed] border-[1px] border-slate-300 shadow-md"}
          width={canvasWidth} 
          height={canvasHeight}
          >
        <Layer>
        </Layer>
      </Stage>
    </div>
    </div>
  )
}

export default App
