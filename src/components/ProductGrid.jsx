export default function ProductGrid() {
  const products = {
    featured: {
      id: 1,
      name: "Pen Pants – Cream",
      price: "₹3,999",
      desc: "Lightweight structure",
      badge: "NEW",
      image: "/images/2.png",
    },
    topRight1: {
      id: 2,
      name: "Shine Shorts – Black",
      price: "₹2,599",
      image: "/images/14.png",
    },
    topRight2: {
      id: 3,
      name: "Track Pant Navy",
      price: "₹4700",
      image: "/images/12.png",
    },
    bottomRight: {
      id: 4,
      name: "Shine Shorts Lime",
      price: "₹1599",
      image: "/images/19.png",
    }
  };

  return (
    <section className="py-24 px-4 md:px-12 max-w-[1600px] mx-auto">
      <div className="flex justify-between items-end mb-10 border-b border-brand-base/20 pb-4">
        <h2 className="text-3xl md:text-4xl font-serif text-brand-dark">Trending Now</h2>
        <a href="#" className="text-[10px] tracking-[0.2em] font-medium uppercase text-brand-base hover:text-black transition-colors">VIEW ALL</a>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8">
        
        {/* Left TALL column */}
        <div className="group cursor-pointer flex flex-col h-full">
          <div className="relative rounded-md overflow-hidden bg-gray-100 flex-grow aspect-[3/4] lg:aspect-auto">
            <img 
              src={products.featured.image} 
              alt={products.featured.name}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {products.featured.badge && (
              <span className="absolute top-4 left-4 bg-brand-accent text-brand-dark text-[10px] font-bold tracking-wider uppercase px-3 py-1 rounded-sm">
                {products.featured.badge}
              </span>
            )}
          </div>
          <div className="mt-4 flex justify-between items-start">
            <div>
              <h3 className="text-sm font-medium text-brand-dark">{products.featured.name}</h3>
              <p className="text-xs text-brand-base mt-1">{products.featured.desc}</p>
            </div>
            <span className="text-sm font-medium text-brand-dark">{products.featured.price}</span>
          </div>
        </div>

        {/* Right column */}
        <div className="flex flex-col gap-4 md:gap-8">
          
          {/* Top row of right column */}
          <div className="grid grid-cols-2 gap-4 md:gap-8">
            <div className="group cursor-pointer">
              <div className="relative rounded-md overflow-hidden bg-gray-100 aspect-[4/5]">
                <img src={products.topRight1.image} alt={products.topRight1.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="mt-4 flex justify-between items-start">
                <h3 className="text-sm font-medium text-brand-dark">{products.topRight1.name}</h3>
                <span className="text-sm font-medium text-brand-dark">{products.topRight1.price}</span>
              </div>
            </div>
            <div className="group cursor-pointer">
              <div className="relative rounded-md overflow-hidden bg-gray-100 aspect-[4/5]">
                <img src={products.topRight2.image} alt={products.topRight2.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="mt-4 flex justify-between items-start">
                <h3 className="text-sm font-medium text-brand-dark">{products.topRight2.name}</h3>
                <span className="text-sm font-medium text-brand-dark">{products.topRight2.price}</span>
              </div>
            </div>
          </div>

          {/* Bottom row of right column */}
          <div className="group cursor-pointer flex-grow flex flex-col">
            <div className="relative rounded-md overflow-hidden bg-gray-100 aspect-[21/9] md:flex-grow">
              <img src={products.bottomRight.image} alt={products.bottomRight.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="mt-4 flex justify-between items-start">
              <h3 className="text-sm font-medium text-brand-dark">{products.bottomRight.name}</h3>
              <span className="text-sm font-medium text-brand-dark">{products.bottomRight.price}</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
