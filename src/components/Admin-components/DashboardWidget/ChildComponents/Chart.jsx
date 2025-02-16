
const ChartSection = ({ title, buttons }) => (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white">{title}</h2>
        <div className="flex gap-2">
          {buttons.map((button, index) => (
            <button
              key={index}
              className={`px-3 py-1 rounded transition-all duration-300 ${
                button.active
                  ? "bg-black dark:bg-white text-white dark:text-black"
                  : "text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
            >
              {button.label}
            </button>
          ))}
        </div>
      </div>
      {/* Chart content placeholder */}
      <div className="h-64 bg-gray-50 dark:bg-gray-700 rounded-lg"></div>
    </div>
  );

export default ChartSection;