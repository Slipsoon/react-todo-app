import Button from "./Button";

export default function Projects({ onCreateNewProject }) {
  return (
    <div className="flex flex-1 flex-col justify-center items-center gap-10">
      <img className="w-24" src="logo.png" />
      <h2 className="text-3xl font-bold text-stone-500">No Project Selected</h2>
      <span className="text-2xl text-stone-400 font-medium">
        Select a project or get started with a new one
      </span>
      <Button onClick={onCreateNewProject} name="Create new project" />
    </div>
  );
}
