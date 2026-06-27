export default function Social() {
  return (
    <section className="py-20 flex flex-col items-center bg-brand-light">
      <h2 className="text-3xl md:text-5xl font-serif text-brand-accent mb-2">Be active. Be social.</h2>
      <p className="text-xs text-brand-base mb-12">
        Follow <span className="font-bold text-brand-dark">@therefore_fashion</span> on Instagram
      </p>
      
      <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 md:gap-4 px-4 md:px-12 max-w-[1600px] mx-auto">
        <div className="aspect-square rounded-sm overflow-hidden group">
          <img src="/images/Socials/1.png" alt="Instagram post" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 transition-all ease-in-out" />
        </div>
        <div className="aspect-square rounded-sm overflow-hidden group">
          <img src="/images/Socials/2.png" alt="Instagram post" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 transition-all ease-in-out" />
        </div>
        <div className="aspect-square rounded-sm overflow-hidden group">
          <img src="/images/Socials/3.png" alt="Instagram post" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 transition-all ease-in-out" />
        </div>
        <div className="aspect-square rounded-sm overflow-hidden group">
          <img src="/images/Socials/5.png" alt="Instagram post" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 transition-all ease-in-out" />
        </div>
        <div className="aspect-square rounded-sm overflow-hidden group">
          <img src="/images/Socials/4.png" alt="Instagram post" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 transition-all ease-in-out" />
        </div>
      </div>
    </section>
  );
}
