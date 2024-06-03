/* eslint-disable @typescript-eslint/no-unused-vars */
import { Drawer, Icon, MenuItem, Select, SelectChangeEvent, Slider } from "@mui/material"
import pencil from "../assets/pencil.svg"
import { useState } from "react"
import Title from "./Title"
import ColorPicker from "react-pick-color"
import { gToolList, Tools } from "../factory/tools/tool-list"


interface NavbarProps {
  selectedColor: string;
  setSelectedColor: (color: string) => void;
  canvasWidth: number;
  setCanvasWidth: (w: number) => void;
  canvasHeight: number;
  setCanvasHeight: (h: number) => void;
  currentTool: string;
  setCurrentTool: (t: string) => void;
  toolOpacity: number;
  setToolOpacity: (v: number) => void;
  toolSize: number;
  setToolSize: (v: number) => void;
  starNumPoints: number;
  setStarNumPoints: (v: number) => void;
  starInnerRadius: number;
  setStarInnerRadius: (v: number) => void;
  starOuterRadius: number;
  setStarOuterRadius: (v: number) => void;
}


export default function Navbar({
  selectedColor, 
  setSelectedColor,
  canvasWidth,
  setCanvasWidth,
  canvasHeight,
  setCanvasHeight,
  currentTool,
  setCurrentTool,
  toolOpacity,
  setToolOpacity,
  toolSize,
  setToolSize,
  starNumPoints,
  setStarNumPoints,
  starInnerRadius,
  setStarInnerRadius,
  starOuterRadius,
  setStarOuterRadius,
}: NavbarProps){

  const [viewTools, showTools] = useState(false)

  return (
    <>
      <nav className="p-5 w-full bg-[#ededed] flex shadow-md">
        <img src={pencil} width={32}/>
        <span className="text-3xl text-slate-500 font-bold px-5">
          Craillons
        </span>
        <div className="flex w-full justify-end text-slate-500 items-center">
          <Icon className="cursor-pointer" onClick={() => showTools(true)}>
            menu
          </Icon>
        </div>
      </nav>
      <Drawer
        open={viewTools} 
        anchor={"right"}
        onClose={() => showTools(false)}>
        <div className="px-10">
        <Title label={"Dimensions"}></Title>
        <div className="flex flex-col ">
          <div className="flex py-5">
            <span className="pr-5">Largeur: </span>
            <Slider
              value={canvasWidth}
              onChange={
                (_event:Event, value: number | number[], _activeThumb: number) => {
                  setCanvasWidth(value as number)
                }
              }
              marks
              min={200}
              max={1500}
              valueLabelDisplay="auto"
            />
          </div>
          <div className="flex pb-5">
            <span className="pr-5">Hauteur </span>
            <Slider
              value={canvasHeight}
              onChange={
                (_event:Event, value: number | number[], _activeThumb: number): void => {
                  setCanvasHeight(value as number)
                }
              }
              marks
              min={200}
              max={800}
              valueLabelDisplay="auto"
            />
          </div>
        </div>
        <Title label={"Forme"}></Title>
        <Select
          className="my-5"
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={currentTool}
          label="Age"
          onChange={(event: SelectChangeEvent) => {
            setCurrentTool(event.target.value);
          } }
        >
          {gToolList.map((tool) => <MenuItem 
            value={tool.id}>{tool.label}</MenuItem>)}
        </Select>
        <div className="flex pb-5">
          <span className="pr-5">Opacité</span>
          <Slider
            value={toolOpacity}
            onChange={
              (_event:Event, value: number | number[], _activeThumb: number): void => {
                setToolOpacity(value as number)
              }
            }
            marks
            min={0}
            step={0.1}
            max={1}
            valueLabelDisplay="auto"
          />
        </div>

        <div className="flex pb-5">
          <span className="pr-5">Taille</span>
          <Slider
            value={toolSize}
            onChange={
              (_event:Event, value: number | number[], _activeThumb: number): void => {
                setToolSize(value as number)
              }
            }
            marks
            min={5}
            max={150}
            valueLabelDisplay="auto"
          />
        </div>
        {(currentTool == Tools.star) && <div className="flex pb-5">
          <span className="pr-5">NumPoints:</span>
          <Slider
            value={starNumPoints}
            onChange={
              (_event:Event, value: number | number[], _activeThumb: number): void => {
                setStarNumPoints(value as number)
              }
            }
            marks
            min={3}
            max={15}
            valueLabelDisplay="auto"
          />
        </div>}
        {(currentTool == Tools.star) && <div className="flex pb-5">
          <span className="pr-5">Rad:</span>
          <Slider
            value={starInnerRadius}
            onChange={
              (_event:Event, value: number | number[], _activeThumb: number): void => {
                setStarInnerRadius(value as number)
              }
            }
            marks
            min={1}
            max={100}
            valueLabelDisplay="auto"
          />
          <Slider
            value={starOuterRadius}
            onChange={
              (_event:Event, value: number | number[], _activeThumb: number): void => {
                setStarOuterRadius(value as number)
              }
            }
            marks
            min={1}
            max={100}
            valueLabelDisplay="auto"
          />
        </div>}
        <Title label={"couleur"}></Title>
        <ColorPicker 
            className="my-10" 
            onChange={(color) => setSelectedColor(color.hex)} 
            color={selectedColor}/>
        </div>
      </Drawer>
    </>
  )
}