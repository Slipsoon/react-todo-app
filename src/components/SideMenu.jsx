import Button from "./Button";

export default function SideMenu({ onNewProjectClick }) {
  return (
    <div className="h-screen w-1/4 rounded-tr-3xl mt-14 bg-black px-14 py-24">
      <h2 className="text-3xl text-white font-bold uppercase">Your Projects</h2>
      <div className="py-14">
        <Button onClick={onNewProjectClick} name="+ Add Project" />
      </div>
      <ul className="text-white font-medium text-2xl">
        <li className="bg-stone-800 p-2 mb-4 hover:cursor-pointer">Test 1</li>
        <li className="bg-stone-800 p-2 mb-4 hover:cursor-pointer">Test 2</li>
      </ul>
    </div>
  );
}
