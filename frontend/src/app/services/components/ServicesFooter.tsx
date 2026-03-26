import Link from 'next/link';

export default function ServicesFooter() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200/15">
      <div className="py-16 px-8 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="text-lg font-bold text-slate-900">Flexiti Studio</div>
          <p className="text-sm text-slate-500 text-center md:text-left">© 2024 Flexiti Studio. Architecting Digital Excellence.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          <Link className="text-sm text-slate-500 hover:text-blue-500 transition-colors" href="#">Privacy Policy</Link>
          <Link className="text-sm text-slate-500 hover:text-blue-500 transition-colors" href="#">Terms of Service</Link>
          <Link className="text-sm text-slate-500 hover:text-blue-500 transition-colors" href="#">Contact Us</Link>
          <Link className="text-sm text-slate-500 hover:text-blue-500 transition-colors" href="#">Careers</Link>
        </div>
      </div>
    </footer>
  );
}
