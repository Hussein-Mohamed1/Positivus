export default function HeroSection() {
  return (
    <section className="w-full px-4 py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-6xl font-bold text-black leading-tight">
              Navigating the digital landscape for success
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our digital marketing agency helps businesses grow and succeed
              online through a range of services including SEO, PPC, social
              media marketing, and content creation.
            </p>
            <button className="bg-black text-white hover:bg-gray-800 px-8 py-3 text-lg rounded-lg transition-colors">
              Book a consultation
            </button>
          </div>

          <div className="relative">
            <img
              src="./images/image1.png"
              alt="Digital marketing illustration with megaphone"
              width={500}
              height={400}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
