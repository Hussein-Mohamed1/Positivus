import { ArrowRight } from "lucide-react";
export default function ServiceCard({ title, description, variant, icon }) {
  const getCardStyles = () => {
    switch (variant) {
      case "green":
        return "bg-lime-400 text-black border-lime-400";
      case "dark":
        return "bg-gray-900 text-white border-gray-900";
      default:
        return "bg-gray-100 text-black border-gray-200";
    }
  };

  const getButtonStyles = () => {
    switch (variant) {
      case "green":
        return "text-black hover:bg-black hover:text-lime-400";
      case "dark":
        return "text-white hover:bg-white hover:text-gray-900";
      default:
        return "text-black hover:bg-black hover:text-white";
    }
  };

  return (
    <div
      className={`rounded-3xl border-2 p-8 transition-all duration-300 hover:shadow-lg ${getCardStyles()}`}
    >
      <div className="flex flex-col h-full">
        <div className="flex-1">
          <div className="flex items-start justify-between mb-6">
            <h3 className="text-2xl font-bold leading-tight flex-1 pr-4">
              {title}
            </h3>
            <img
              src={icon || "/placeholder.svg"}
              alt={`${title} illustration`}
              width={128}
              height={128}
              className="w-32 h-32 object-contain flex-shrink-0"
            />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <button
            className={`flex items-center space-x-2 text-sm font-medium transition-colors ${getButtonStyles()}`}
          >
            <span>{description}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
