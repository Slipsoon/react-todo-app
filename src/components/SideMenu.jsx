import Button from "./Button";

export default function SideMenu({ onNewProjectClick }) {
  return (
    <div className="h-screen w-1/4 rounded-tr-3xl mt-14 bg-black px-14 py-24">
      <h2 className="text-3xl text-white font-bold uppercase">Your Projects</h2>
      <div className="py-14">
        <Button onClick={onNewProjectClick} name="+ Add Project" />
      </div>
    </div>
  );
}
