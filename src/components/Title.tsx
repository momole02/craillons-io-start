
interface TitleProps {
  label: string;
}
export default function Title({label}: TitleProps) {
  return (<h1 className="pb-[10px] border-b-2 border-b-4 border-b-slate-500 text-slate-500 font-bold text-xl">
    {label.toUpperCase()}
  </h1>)
}