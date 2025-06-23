const logos = [
  { name: "Amazon", src: "./images/amazon.png" },
  { name: "Dribbble", src: "./images/Dribbble.png" },
  { name: "HubSpot", src: "./images/HubSpot.png" },
  { name: "Notion", src: "./images/Notion.png" },
  { name: "Netflix", src: "./images/Netflix.png" },
  { name: "Zoom", src: "./images/Zoom.png" },
];

export default function LogoSection() {
  return (
    <section className="w-full px-4 py-16 lg:px-8 bg-gray-50">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="grayscale hover:grayscale-0 transition-all duration-300"
            >
              <img
                src={logo.src || "/placeholder.svg"}
                alt={`${logo.name} logo`}
                width={120}
                height={40}
                className="h-10 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
