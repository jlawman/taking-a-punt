export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-6xl px-8 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Brand */}
          <div>
            <h3 className="text-sm font-bold tracking-widest uppercase text-gray-900">
              Taking A Punt
            </h3>
            <p className="mt-4 text-sm text-gray-500">
              Interviewing interesting people.
            </p>
            <p className="mt-1 text-sm text-gray-500">
              Sometimes on a punt.
            </p>
          </div>

          {/* Links */}
          <div className="md:text-right">
            <h4 className="text-sm font-semibold text-gray-900">Explore</h4>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href="https://www.foundersfunders.tech/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-500 hover:text-gray-900"
                >
                  Founders &amp; Funders
                </a>
              </li>
              <li>
                <a
                  href="https://www.oxtechweek.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-500 hover:text-gray-900"
                >
                  OxTechWeek
                </a>
              </li>
              <li>
                <a
                  href="https://www.oxmap.tech/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-500 hover:text-gray-900"
                >
                  OxMap
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-200 pt-8">
          <p className="text-center text-xs text-gray-400">
            © {new Date().getFullYear()} Taking A Punt. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
