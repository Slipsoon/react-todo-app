export default function Button({ onClick, ...props }) {
  return (
    <div>
      <button
        onClick={onClick}
        className="text-neutral-400 text-2xl font-medium 
      bg-stone-700 px-6 py-3 rounded-lg 
      hover:bg-stone-600 hover:text-neutral-300"
      >
        {props.name}
      </button>
    </div>
  );
}
