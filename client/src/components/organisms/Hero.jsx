const Hero = () => {
  return (
    <section
      className="min-h-screen hero"
      style={{
        backgroundImage:
          'url(https://www.apple.com/v/iphone-15-pro/c/images/meta/iphone-15-pro_overview__f8jz7aagka2q_og.png?202404072058)',
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="text-center hero-content text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">iPhone 15 Pro Max</h1>
          <p className="mb-5">Titanium. So strong. So light. So Pro.</p>
          <button className="rounded-full btn glass">Learn more</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
