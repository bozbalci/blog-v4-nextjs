import ThemeToggleButton from "./theme-toggle-button";
import headerLinks from "data/header-links";
import { useRouter } from "next/router";
import classNames from "classnames";
import Link from "next/link";

export default function Header() {
  const router = useRouter();

  const headerSection = headerLinks[0];

  return (
    <header className="py-6 bg-gray-50 dark:bg-gray-900 text-black dark:text-white">
      <div className="w-9/10 mx-auto">
        <nav className="inline-block" aria-label="Primary">
          <div className="flex justify-start items-baseline">
            <div className="mr-4 sm:mr-6 bg-black text-white dark:bg-white dark:text-black">
              <Link href="/">
                <a>
                  <div
                    className="p-2 font-mono font-semibold text-xl"
                    lang="tr"
                  >
                    Berk Özbalcı
                  </div>
                </a>
              </Link>
            </div>
            <ul className="inline-flex justify-start items-center flex-wrap">
              {headerSection.links.map((link, linkIndex) => {
                const isCurrent =
                  !link.external && router.pathname === link.url;
                const linkClass = classNames(
                  "font-semibold text-md sm:text-lg",
                  { "hover:underline": !isCurrent },
                  { underline: isCurrent }
                );

                return (
                  <li
                    key={linkIndex}
                    className="inline-block py-1 mr-4 sm:mr-6"
                  >
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
        </nav>
      </div>
    </header>
  );
}
