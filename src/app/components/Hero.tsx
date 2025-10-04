"use client";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background with gradient and orbs */}
      <div className="absolute inset-0 bg-background dark:bg-background-dark">
        {/* Gradient background */}
        <div></div>

        {/* Animated orbs */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-1/3 w-40 h-40 bg-blue-400/15 rounded-full blur-xl animate-pulse delay-2000"></div>

        {/* Grid pattern overlay - light mode */}
        <div
          className="absolute inset-0 opacity-10 bg-grid-gray dark:hidden"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3e%3cg fill='none' fill-rule='evenodd'%3e%3cg fill='%23000000' fill-opacity='0.1'%3e%3ccircle cx='30' cy='30' r='1'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e")`,
          }}
        ></div>

        {/* Grid pattern overlay - dark mode */}
        <div
          className="absolute inset-0 opacity-10 bg-grid-white hidden dark:block"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3e%3cg fill='none' fill-rule='evenodd'%3e%3cg fill='%23ffffff' fill-opacity='0.1'%3e%3ccircle cx='30' cy='30' r='1'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e")`,
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-8xl sm:text-6xl lg:text-7xl font-bold text-foreground dark:text-foreground-dark mb-6">
          Artificial Intelligence
        </h1>
        <p className="text-[23px] text-foreground/80 dark:text-foreground-dark/80 max-w-3xl mx-auto leading-relaxed">
          Learn how we're helping capture the opportunity of generative AI
        </p>
      </div>
    </section>
  );
}
