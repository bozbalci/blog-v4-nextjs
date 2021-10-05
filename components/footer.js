import footerLinks from "data/footer-links";
import Link from "next/link";
import { useRouter } from "next/router";
import ThemeToggleButton from "./theme-toggle-button";
import classNames from "classnames";

export default function Footer() {
  const router = useRouter();

  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 sm:py-12 bg-gray-200 dark:bg-secondary-900 text-gray-900 dark:text-secondary-100">
      <nav className="w-9/10 mx-auto" aria-label="Footer">
        <div className="lg:flex justify-between">
          <div className="sm:w-128 w-full grid grid-cols-2 sm:grid-cols-2 gap-8 sm:gap-12">
            {footerLinks.map((section, sectionIndex) => (
              <div key={sectionIndex}>
                {section.title ? (
                  <h2 className="tracking-widest uppercase text-primary-900 dark:text-secondary-300 text-xs mb-2">
                    {section.title}
                  </h2>
                ) : null}
                <ul className="flex flex-col">
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
                          <a
                            href={link.url}
                            className={linkClass}
                            rel="nofollow"
                          >
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
          <div className="mt-8 sm:mt-12 lg:m-0">
            <ThemeToggleButton />
          </div>
        </div>
        <p className="mt-8 sm:mt-12 text-xs">
          © 2019 - {currentYear} Berk Özbalcı
        </p>
      </nav>
    </footer>
  );
}
