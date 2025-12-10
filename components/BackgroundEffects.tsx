export default function BackgroundEffects() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-0" aria-hidden="true">
      <div 
        className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl parallax-slow animate-float" 
        data-speed="0.3"
      />
      <div 
        className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-purple-500/20 blur-3xl parallax-slow animate-float" 
        data-speed="0.3"
        style={{ animationDelay: "1.5s" }}
      />
    </div>
  );
}

