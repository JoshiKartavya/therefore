export default function Footer() {
  return (
    <footer className="bg-brand-secondary text-brand-base pt-20 pb-8 px-4 md:px-12">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-8 border-b border-brand-base/20 pb-16">
        
        {/* Left Side - Newsletter */}
        <div className="flex flex-col pr-0 md:pr-12">
          <div className="mb-6">
            <img src="/images/logo.png" alt="Therefore Logo" className="h-12 w-auto" />
          </div>
          <p className="text-sm font-light mb-8 max-w-sm">
            Sign up to get first dibs on new arrivals, sales, exclusive content, events and more.
          </p>
          <form className="flex w-full max-w-md border border-[#e5e1da] rounded-full py-3 px-6 items-center" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Email Address" 
              className="bg-transparent border-none outline-none flex-grow text-sm text-brand-base placeholder-[#8c919c]"
            />
            <button className="text-[10px] font-bold tracking-[0.15em] uppercase text-[#333] hover:text-black transition-colors pl-4">
              SUBMIT
            </button>
          </form>
        </div>

        {/* Right Side - Links */}
        <div className="flex justify-between md:justify-end gap-16 md:gap-32">
          <div className="flex flex-col">
            <h3 className="text-[10px] font-bold tracking-widest uppercase text-brand-dark mb-6">HELP</h3>
            <ul className="space-y-4 text-sm font-light">
              <li><a href="#" className="hover:text-brand-dark transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-brand-dark transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-brand-dark transition-colors">FAQ's</a></li>
            </ul>
          </div>

          <div className="flex flex-col">
            <h3 className="text-[10px] font-bold tracking-widest uppercase text-brand-dark mb-6">ABOUT</h3>
            <ul className="space-y-4 text-sm font-light">
              <li><a href="#" className="hover:text-brand-dark transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-brand-dark transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-brand-dark transition-colors">Terms & Conditions</a></li>
            </ul>
          </div>
        </div>

      </div>
      
      {/* Bottom Bar */}
      <div className="max-w-[1400px] mx-auto mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs font-light text-brand-base/70 uppercase">&copy; {new Date().getFullYear()} THEREFORE. ALL RIGHTS RESERVED.</p>
        <div className="flex gap-4 items-center">
           {/* Placeholder for payment icons */}
           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-brand-base"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>
           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-brand-base"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z"/><path d="m9 12 2 2 4-4"/></svg>
        </div>
      </div>
    </footer>
  );
}
