interface ColorDisplayProps{
  color: string;
}

export default function ColorDisplay({color}: ColorDisplayProps)
{
  return (<div className="m-10 border-[1px] border-slate-300 shadow-sm w-min shadow-md rounded" style={{
    backgroundColor: color,
    height: "50px",
    width: "50px",
  }}></div>)
}