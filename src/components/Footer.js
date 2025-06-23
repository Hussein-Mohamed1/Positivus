export default function Footer() {
  return (
    <div className="w-full px-4 pt-8 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <footer className="bg-gray-900 text-white rounded-t-3xl p-8 lg:p-12">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-12 gap-8">
            <div className="flex items-center space-x-2">
              <img
                src="./images/Logo2.png"
                alt="Company Logo"
                className="h-8 w-auto object-contain"
              />
            </div>

            <div className="flex flex-wrap items-center gap-6 lg:gap-8">
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors underline"
              >
                About us
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors underline"
              >
                Services
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors underline"
              >
                Use Cases
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors underline"
              >
                Pricing
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors underline"
              >
                Blog
              </a>
            </div>

            <div className="flex space-x-3">
              <a
                href="#"
                className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-black hover:bg-gray-200 transition-colors"
              >
                <span className="text-sm font-bold">in</span>
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-black hover:bg-gray-200 transition-colors"
              >
                <span className="text-sm font-bold">f</span>
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-black hover:bg-gray-200 transition-colors"
              >
                <span className="text-sm font-bold">t</span>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="space-y-4">
              <div className="inline-block bg-lime-400 text-black px-3 py-1 rounded-lg text-sm font-medium">
                Contact us:
              </div>
              <div className="space-y-2 text-gray-300">
                <p>Email: info@positivus.com</p>
                <p>Phone: 555-567-8901</p>
                <p>
                  Address: 1234 Main St
                  <br />
                  Moonstone City, Stardust State 12345
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row  gap-2 lg:justify-end">
              <input
                type="email"
                placeholder="Email"
                className="bg-transparent border border-gray-600 text-white placeholder-gray-400 px-3 py-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-lime-400 flex-1 lg:max-w-xs text-sm h-10"
              />
              <button className="bg-lime-400 text-black hover:bg-lime-500 px-4 py-1 rounded-lg font-medium transition-colors whitespace-nowrap text-sm h-10">
                Subscribe to news
              </button>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm">
                © 2023 Positivus. All Rights Reserved.
              </p>
              <a
                href="#"
                className="text-gray-400 hover:text-white text-sm transition-colors underline"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
