export default function Breakpoint() {
  return (
    <div className="absolute top-0 left-0 h-10 w-10 text-lg bg-red-500 text-white flex items-center justify-center uppercase bg-opacity-40">
      <span className="inline sm:hidden">xs</span>
      <span className="hidden sm:inline md:hidden">sm</span>
      <span className="hidden md:inline lg:hidden">md</span>
      <span className="hidden lg:inline xl:hidden">lg</span>
      <span className="hidden xl:inline 2xl:hidden">xl</span>
      <span className="hidden 2xl:inline 3xl:hidden">2xl</span>
    </div>
  );
}
