import ThemeToggleButton from "./theme-toggle-button";
import headerLinks from "data/header-links";
import { useRouter } from "next/router";
import classNames from "classnames";
import Link from "next/link";

export default function Header() {
  const router = useRouter();

  return (
    <header className="py-6 bg-gray-50 dark:bg-primary-950 text-black dark:text-primary-100">
      <nav className="w-9/10 mx-auto flex justify-between" aria-label="Primary">
        <div className="">
          {headerLinks.map((section, sectionIndex) => (
            <div key={sectionIndex}>
              <ul className="flex justify-start space-x-4">
                {section.links.map((link, linkIndex) => {
                  const isCurrent =
                    !link.external && router.pathname === link.url;
                  const linkClass = classNames(
                    "font-serif text-xl sm:text-2xl",
                    { "hover:underline": !isCurrent },
                    { underline: isCurrent }
                  );

                  return (
                    <li key={linkIndex} className="inline-block py-1">
                      {link.external ? (
                        <a href={link.url} className={linkClass} rel="nofollow">
                          {link.title}
                        </a>
                      ) : (
                        <Link href={link.url}>
                          <a
                            className={linkClass}
                            {...(isCurrent ? { "aria-current": "page" } : {})}
                          >
                            {link.title}
                          </a>
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
        <ThemeToggleButton />
      </nav>
    </header>
  );
}
