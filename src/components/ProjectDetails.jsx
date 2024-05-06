import { useRef } from "react";

export default function ProjectDetails({
  project,
  onProjectDetailsDelete,
  onProjectDetailsTaskAdd,
}) {
  const addTaskInput = useRef();

  function handleProjectDetailsTaskAdd() {
    project.projectTasks.push(addTaskInput.current.value);
    addTaskInput.current.value = "";

    onProjectDetailsTaskAdd(project);
  }

  function handleProjectDetailsTaskClear(task) {
    const valueIndex = project.projectTasks.indexOf(task);
    project.projectTasks.splice(valueIndex, 1);

    onProjectDetailsTaskAdd(project);
  }

  return (
    <div className="flex flex-col gap-8 w-3/5 mx-12 my-40">
      <div className="flex justify-between items-center">
        <h3 className="text-5xl font-bold text-zinc-700">
          {project.projectTitle}
        </h3>
        <button
          onClick={() => onProjectDetailsDelete(project)}
          className="text-xl m-4 font-medium"
        >
          Delete
        </button>
      </div>
      <div className="flex flex-col gap-8">
        <span className="text-2xl text-zinc-500 font-medium">
          {project.projectDate}
        </span>
        <span className="text-2xl font-medium">
          {project.projectDescription}
        </span>
        <div className="h-1 bg-zinc-400"></div>
        <h3 className="text-4xl font-bold text-zinc-700">Tasks</h3>
        <div className="flex items-center">
          <input
            ref={addTaskInput}
            className="h-12 bg-stone-300 border-stone-400 rounded p-2 font-medium text-2xl text-neutral-600 mr-6"
          />
          <button
            onClick={handleProjectDetailsTaskAdd}
            className="text-2xl font-medium hover:cursor-pointer"
          >
            Add Task
          </button>
        </div>
        {project.projectTasks.length > 0 ? (
          <div className="px-6 py-8 bg-neutral-200 rounded-md">
            <ul className="flex flex-col gap-6 font-medium text-2xl">
              {project.projectTasks.map((projectTask) => (
                <li key={projectTask} className="flex justify-between">
                  <span>{projectTask}</span>
                  <button
                    onClick={() => handleProjectDetailsTaskClear(projectTask)}
                    className="hover:text-red-600"
                  >
                    Clear
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <span className="text-2xl font-medium">
            This project does not have any tasks yet.
          </span>
        )}
      </div>
    </div>
  );
}
