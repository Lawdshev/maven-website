"use client";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
        playsInline
      >
        <source
          src="https://gw.alipayobjects.com/v/huamei_gcee1x/afts/video/jXRBRK_VAwoAAAAAAAAAAAAAK4eUAQBr"
          type="video/mp4"
        />
      </video>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-8xl sm:text-6xl lg:text-7xl font-bold text-foreground-dark mb-6">
          Artificial Intelligence
        </h1>
        <p className="text-[23px] text-foreground-dark/80 max-w-3xl mx-auto leading-relaxed">
          Learn how we&apos;re helping capture the opportunity of generative AI
        </p>
      </div>
    </section>
  );
}
