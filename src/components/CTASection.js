export default function CTASection() {
  return (
    <section className="w-full px-4 py-16 lg:px-8 bg-gray-50">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-black leading-tight">
              Let's make things happen
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Contact us today to learn more about how our digital marketing
              services can help your business grow and succeed online.
            </p>
            <button className="bg-black text-white hover:bg-gray-800 px-8 py-3 text-lg rounded-lg transition-colors">
              Get your free proposal
            </button>
          </div>

          <div className="relative">
            <img
              src="./images/contact.png"
              alt="Contact illustration"
              width={400}
              height={300}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
