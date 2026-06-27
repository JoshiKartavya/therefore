export default function Hero() {
  return (
    <section className="w-full mt-0">
      <div className="relative h-[80vh] min-h-[600px] w-full flex items-end bg-brand-light overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/Background.png" 
            alt="Hero Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 p-8 md:p-12 max-w-3xl">
          <p className="text-[10px] tracking-[0.2em] uppercase text-brand-accent mb-4 font-semibold">
            INTENTION / FORM
          </p>
          <h1 className="text-4xl md:text-6xl font-serif text-white leading-tight mb-8">
            You live fully.<br/>
            You dress with intention.
          </h1>
          <button className="bg-white text-brand-dark px-10 py-3 text-sm font-semibold tracking-wider uppercase hover:bg-brand-accent hover:text-white transform transition-all duration-300 hover:scale-105 hover:-translate-y-1 rounded-sm shadow-sm hover:shadow-md">
            SHOP NOW
          </button>
        </div>
      </div>
    </section>
  );
}
