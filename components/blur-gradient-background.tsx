interface Circle {
  color: string;
  size: string;
  position: {
    top: string;
    left: string;
  };
}

const BlurGradientBackground = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const circles: Circle[] = [
    {
      color: "bg-pink-300 dark:bg-pink-500/50",
      size: "w-56 h-56",
      position: { top: "-5%", left: "-5%" },
    },
    {
      color: "bg-blue-400 dark:bg-blue-600/50",
      size: "w-36 h-36",
      position: { top: "15%", left: "76%" },
    },
    {
      color: "bg-green-500 dark:green-600/50",
      size: "w-28 h-28",
      position: { top: "70%", left: "25%" },
    },
    {
      color: "bg-yellow-600",
      size: "w-24 h-24",
      position: { top: "80%", left: "91%" },
    },
  ];

  return (
    <div className="relative bg-transparent h-screen">
      {/* Background Circles */}
      <div className="absolute top-0 inset-0 overflow-hidden ">
        {circles.map((circle, idx) => (
          <div
            key={idx}
            className={`absolute rounded-full ${circle.color} ${circle.size} blur-3xl animate-slow-pulse`}
            style={{
              top: circle.position.top,
              left: circle.position.left,
            }}
          ></div>
        ))}
      </div>

      {/* Scrollable Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default BlurGradientBackground;
