export default function NewProjectForm({ onFormSave, onFormCancel }) {
  return (
    <div className="flex flex-col gap-8 w-3/5 mx-12 my-40">
      <div className="flex justify-end items-center">
        <button className="text-xl m-4 font-medium" onClick={onFormCancel}>
          Cancel
        </button>
        <button
          className="bg-black text-white text-xl px-8 rounded-lg h-14"
          onClick={onFormSave}
        >
          Save
        </button>
      </div>
      <div className="flex flex-col">
        <span className="text-xl font-bold uppercase text-neutral-500 mb-2">
          Title
        </span>
        <input
          type="text"
          className="h-12 bg-stone-300 border-b-2 border-stone-400 rounded p-2 font-medium text-2xl text-neutral-600"
        ></input>
      </div>
      <div className="flex flex-col">
        <span className="text-xl font-bold uppercase text-neutral-500 mb-2">
          Description
        </span>
        <textarea
          className="h-24 bg-stone-300 border-b-2 border-stone-400 rounded p-2 font-medium text-2xl text-neutral-600"
          rows={4}
          cols={40}
        />
      </div>
      <div className="flex flex-col">
        <span className="text-xl font-bold uppercase text-neutral-500 mb-2">
          Due Date
        </span>
        <input
          className="h-12 bg-stone-300 border-b-2 border-stone-400 rounded p-2 font-medium text-2xl text-neutral-600"
          type="date"
        />
      </div>
    </div>
  );
}
