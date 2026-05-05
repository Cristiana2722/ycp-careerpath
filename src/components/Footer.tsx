import { BookOpen, Instagram, Mail, Phone, MapPin } from 'lucide-react'

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z" />
  </svg>
)

export default function Footer() {
  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-blue-700 flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-bold text-white text-sm tracking-widest">YCP</p>
                <p className="text-[10px] text-slate-400 tracking-wide">Your Career Path</p>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
              YCP - Your Career Path este platforma ta de dezvoltare personală și profesională,
              disponibilă în toată România. Îți oferim instrumentele și ghidarea de care ai nevoie
              pentru a-ți atinge obiectivele.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2 text-slate-400">
                <Mail className="w-4 h-4 mt-0.5 text-blue-400 flex-shrink-0" />
                <span>yourcareerpath@gmail.com</span>
              </li>
              <li className="flex items-start gap-2 text-slate-400">
                <Phone className="w-4 h-4 mt-0.5 text-blue-400 flex-shrink-0" />
                <span>+40 777 777 777</span>
              </li>
              <li className="flex items-start gap-2 text-slate-400">
                <MapPin className="w-4 h-4 mt-0.5 text-blue-400 flex-shrink-0" />
                <span>Disponibil în toată România<br />(exclusiv online)</span>
              </li>
            </ul>
                        <div className="flex gap-3 mt-5">
              <a
                href="https://www.instagram.com/ycp.careerpath/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-slate-800 hover:bg-pink-600 transition-colors text-slate-300 hover:text-white"
                aria-label="Instagram YCP"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.tiktok.com/@ycp.careerpath"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-slate-800 hover:bg-slate-600 transition-colors text-slate-300 hover:text-white"
                aria-label="TikTok YCP"
              >
                <TikTokIcon />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} YCP - Your Career Path. Toate drepturile rezervate.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-slate-300 transition-colors">Politica de Confidențialitate</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Termeni și Condiții</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
