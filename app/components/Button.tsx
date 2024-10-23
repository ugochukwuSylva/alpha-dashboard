type Props = {
  bgColor: string;
  children: React.ReactNode;
};

export default function Button({ children, bgColor }: Props) {
  return (
    <div
      className={`${bgColor} py-2 hover:opacity-80 px-6 mr-2 cursor-pointer flex items-center rounded-sm h-10 transition-all duration-200 ${
        bgColor === "bg-white"
          ? "text-stone-700 hover:bg-stone-500 hover:text-white border-2 border-stone-300"
          : "text-white"
      }`}
    >
      {children}
    </div>
  );
}
