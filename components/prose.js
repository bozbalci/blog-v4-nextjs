import classNames from "classnames";

export default function Prose({ children, fullWidth, centered }) {
  const className = classNames(
    "prose dark:prose-light",
    "prose-md lg:prose-lg",
    {
      "max-w-none": fullWidth,
      "text-center": centered,
    }
  );

  return <div className={className}>{children}</div>;
}
