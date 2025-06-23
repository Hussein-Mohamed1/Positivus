import ServiceCard from "./ServiceCard";

const services = [
  {
    title: "Search engine optimization",
    description: "Learn more",
    variant: "light",
    icon: "./images/Services1.png",
  },
  {
    title: "Pay-per-click advertising",
    description: "Learn more",
    variant: "green",
    icon: "./images/Services2.png",
  },
  {
    title: "Social Media Marketing",
    description: "Learn more",
    variant: "dark",
    icon: "./images/Services3.png",
  },
  {
    title: "Email Marketing",
    description: "Learn more",
    variant: "light",
    icon: "./images/Services4.png",
  },
  {
    title: "Content Creation",
    description: "Learn more",
    variant: "green",
    icon: "./images/Services5.png",
  },
  {
    title: "Analytics and Tracking",
    description: "Learn more",
    variant: "dark",
    icon: "./images/Services6.png",
  },
];

export default function ServicesSection() {
  return (
    <section className="w-full px-4 py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <div className="inline-block bg-lime-400 text-black px-2 py-1 rounded text-xl font-medium mb-4">
            Services
          </div>
          <p className="text-lg text-gray-600 max-w-2xl">
            At our digital marketing agency, we offer a range of services to
            help businesses grow and succeed online. These services include:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
