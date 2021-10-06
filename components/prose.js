import classNames from "classnames";

export default function Prose({ children, fullWidth }) {
  const className = classNames(
    "prose dark:prose-light",
    "prose-md lg:prose-lg",
    {
      "max-w-none": fullWidth,
    }
  );

  return <div className={className}>{children}</div>;
}
