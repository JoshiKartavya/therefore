export default function Header() {
  return (
    <header className="absolute top-0 left-0 w-full z-50 pt-4 pb-2 md:pt-6 md:pb-4 px-6 md:px-12 flex items-center justify-between">
      {/* Logo */}
      <div className="flex-1">
        <a href="/" className="inline-block">
          <img src="/images/logo.png" alt="Therefore Logo" className="h-12 w-auto" />
        </a>
      </div>

      {/* Navigation */}
      <nav className="hidden md:flex flex-1 justify-center gap-8">
        <a href="#" className="text-[11px] font-medium tracking-[0.15em] uppercase text-brand-dark hover:text-black transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[1px] after:bg-brand-dark">
          Shop All
        </a>
        <a href="#" className="text-[11px] font-medium tracking-[0.15em] uppercase text-brand-base hover:text-brand-dark transition-colors">
          Collections
        </a>
        <a href="#" className="text-[11px] font-medium tracking-[0.15em] uppercase text-brand-base hover:text-brand-dark transition-colors">
          Accessories
        </a>
        <a href="#" className="text-[11px] font-medium tracking-[0.15em] uppercase text-brand-base hover:text-brand-dark transition-colors">
          Blogs
        </a>
        <a href="#" className="text-[11px] font-medium tracking-[0.15em] uppercase text-brand-base hover:text-brand-dark transition-colors">
          About Us
        </a>
      </nav>

      {/* Icons */}
      <div className="flex-1 flex justify-end items-center gap-6">
        <button className="text-brand-dark hover:text-black hover:scale-110 transform transition-all duration-300 cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
        </button>
        <button className="text-brand-dark hover:text-black hover:scale-110 transform transition-all duration-300 cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
        </button>
        <button className="text-brand-dark hover:text-black hover:scale-110 transform transition-all duration-300 relative cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
          <span className="absolute -top-1 -right-2 bg-brand-accent text-brand-dark text-[9px] font-bold h-4 w-4 rounded-full flex items-center justify-center">0</span>
        </button>
      </div>
    </header>
  );
}
