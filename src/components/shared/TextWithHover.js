const TextWithHover = ({ displayText, active }) => {
  return (
    <div
      className={`${
        active ? "text - white" : "text-gray-400"
      }  font-semibold hover:text-white text-lg`}
    >
      {displayText}
    </div>
  );
};
export default TextWithHover;
