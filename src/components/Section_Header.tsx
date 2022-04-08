export const Section_Header = ({
  text_content,
  text_color,
}: {
  text_content: string;
  text_color: string;
}) => {
  return (
    <h1
      className={`py-5 w-full text-center text-5xl font-medium flex items-center flex-col text-${text_color}`}
    >
      {text_content}
      <div className="border-2 border-red-500 rounded-full w-10 h-0 mt-5"></div>
    </h1>
  );
};
