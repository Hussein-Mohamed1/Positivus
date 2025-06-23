export default function Header() {
  return (
    <header className="w-full px-4 py-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <nav className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              src="./images/Logo.png"
              alt="Company Logo"
              className="h-8 w-auto object-contain"
            />
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#"
              className="text-gray-700 hover:text-black transition-colors"
            >
              About us
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-black transition-colors"
            >
              Services
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-black transition-colors"
            >
              Use Cases
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-black transition-colors"
            >
              Pricing
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-black transition-colors"
            >
              Blog
            </a>
          </div>

          <button className="bg-white text-black border border-black hover:bg-gray-50 px-4 py-2 rounded-lg transition-colors">
            Request a quote
          </button>
        </nav>
      </div>
    </header>
  );
}
