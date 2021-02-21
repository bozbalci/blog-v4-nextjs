export default function SideBox({ children }) {
  return (
    <div className="border border-black dark:border-white dark:shadow-white shadow-black p-6 space-y-6">
      {children}
    </div>
  );
}
