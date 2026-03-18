export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-6xl px-8 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <h3 className="text-sm font-bold tracking-widest uppercase text-gray-900">
              Taking A Punt
            </h3>
            <p className="mt-4 text-sm text-gray-500">
              A podcast from Oxford interviewing interesting people.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900">Links</h4>
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
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900">Connect</h4>
            <p className="mt-4 text-sm text-gray-500">
              Stay tuned for Season 1
            </p>
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
