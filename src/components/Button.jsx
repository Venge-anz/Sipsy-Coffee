export const Button = ({ nombre, type = "button", onClick }) => {
  return (
    <>
      <button
        type={type}
        onClick={onClick}
        className="rounded-3xl bg-gray-800 text-gray-400 cursor-pointer p-2 pl-7 pr-7 w-50 transition duration-200 ease-in-out  hover:scale-105"
      >
        {nombre}
      </button>
    </>
  );
};
