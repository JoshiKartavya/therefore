export default function BrandStrip() {
  return (
    <section className="bg-brand-secondary py-20 md:py-32 mt-24">
      <div className="max-w-[1400px] mx-auto px-4 md:px-12">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24">
          
          <div className="w-full md:w-1/2">
            <div className="relative aspect-square rounded-sm overflow-hidden bg-brand-light group">
              <img 
                src="/images/15.png" 
                alt="Brand Philosophy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>

          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <h3 className="text-3xl md:text-5xl font-serif text-brand-accent mb-8 leading-tight">
              Well Made &there4; Well Worn
            </h3>
            <p className="text-lg md:text-xl text-brand-base mb-10 leading-relaxed max-w-lg font-light">
              "Our philosophy is grounded, but our designs have presence. Every piece is built with details that reveal themselves over time &mdash; nothing decorative without reason, nothing predictable without purpose."
            </p>
            <a href="#" className="text-[11px] tracking-[0.2em] font-bold uppercase text-brand-dark hover:text-brand-dark hover:bg-[#BCCB5E] w-max px-8 py-6 rounded-full  text-[#2F2E24] transition-all duration-300 hover:translate-x-2 flex items-center gap-2 group">
              DISCOVER OUR STORY <span className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
