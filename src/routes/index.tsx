import { createFileRoute, Link } from '@tanstack/react-router'
import { useState } from 'react'
import {
  BookOpen, ChevronDown, Star, Play, Mic, FileText,
  Instagram, Target, TrendingUp, Award, Users, CheckCircle,
  ArrowRight, Send, MessageSquare, BarChart2, GraduationCap,
  Briefcase, Brain, Shield, ChevronRight,
} from 'lucide-react'
import { blogPosts } from '@/data/blog-posts'

export const Route = createFileRoute('/')({
  component: HomePage,
})

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z" />
  </svg>
)

function encode(data: Record<string, string>) {
  return Object.entries(data)
    .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`)
    .join('&')
}

// ─── Testimonials ──────────────────────────────────────────────────────────────

const testimonials = [
  {
    name: 'Maria Ionescu',
    age: 22,
    role: 'Studentă la Medicină – UMF Cluj-Napoca',
    stars: 5,
    text: 'Înainte de YCP eram complet pierdută în privința admiterii la medicină. Credeam că este imposibil pentru cineva din orașul meu mic. Consilierul meu a creat un plan de pregătire structurat pe 8 luni, m-a ajutat să îmi gestionez anxietatea și să rămân focusată. Am intrat pe locul 3 din 520 de candidați la UMF Cluj. Fără YCP, probabil nu aș fi încercat niciodată.',
    achievement: 'Locul 3 din 520 de candidați',
  },
  {
    name: 'Alexandru Popa',
    age: 28,
    role: 'Software Developer – Companie Internațională',
    stars: 5,
    text: 'Lucram ca tehnician auto și simțeam că nu am viitor. YCP m-a ajutat să recunosc că am aptitudini pentru IT și să creez un plan de reconversie realist. Acum, 14 luni mai târziu, sunt developer junior la o companie cu clienți din Europa de Vest, cu un salariu de trei ori mai mare decât cel anterior. Cel mai important pas pe care l-am făcut vreodată.',
    achievement: 'Salariu triplu după reconversie',
  },
  {
    name: 'Elena Dumitrescu',
    age: 25,
    role: 'Financial Analyst – Big 4 România',
    stars: 4,
    text: 'Absolvisem Facultatea de Economie dar nu știam unde să mă plasez pe piața muncii. YCP mi-a arătat că profilul meu se potrivea perfect pentru o carieră în consultanță financiară. M-au ajutat cu CV-ul, cu pregătirea pentru interviuri și cu networking-ul strategic. Am obținut oferta de la primul Big 4 la care am aplicat, ceva ce nu credeam posibil.',
    achievement: 'Angajată la Big 4 la primul interviu',
  },
  {
    name: 'Adrian Constantin',
    age: 19,
    role: 'Student la Automatică – Politehnica București',
    stars: 5,
    text: 'Părinții mei voiau să mă înscriu la drept, dar eu simțeam că locul meu era în inginerie. YCP m-a ajutat să îmi argumentez alegerea și să mă pregătesc pentru admiterea la Automatică și Calculatoare. Procesul a durat 6 luni și a inclus matematică avansată, fizică și pregătire psihologică pentru examen. Am intrat la prima mea opțiune.',
    achievement: 'Admis la prima opțiune – Automatică UPB',
  },
  {
    name: 'Ioana Marinescu',
    age: 31,
    role: 'Team Lead – Multinațională București',
    stars: 5,
    text: 'Mă blocam la nivel de senior specialist de 4 ani și nu știam cum să fac pasul spre management. Prin programul de coaching YCP, am descoperit că îmi lipseau nu competențele tehnice, ci cele de leadership. Am lucrat intensiv pe comunicare, delegare și gestionarea conflictelor. În 3 luni am primit o promovare cu 40% mărire salarială.',
    achievement: 'Promovare + 40% creștere salarială',
  },
  {
    name: 'Anca Avram',
    age: 29,
    role: 'QA Engineer – Big 4 România',
    stars: 5,
    text: 'De 5 ani îmi doream o reconversie profesională. Lucram în audit financiar şi îmi doream mai mult, fiind pasionată de programare şi învăţând deja de câţiva ani. Fără YCP, nu aș fi reuşit niciodată să îmi găsesc un job în IT într-un timp atât de scurt, mai ales la o firmă de renume.',
    achievement: 'Angajată la Big 4 după reconversie profesională',
  },
]

// ─── Services ─────────────────────────────────────────────────────────────────

const services = [
  {
    icon: GraduationCap,
    title: 'Pregătire Admitere Universitate',
    desc: 'Strategie completă pentru admiterea la facultatea dorită: plan de studiu, materiale, simulări și suport psihologic.',
    color: 'bg-blue-50 dark:bg-blue-950/30 text-blue-700 dark:text-blue-400',
  },
  {
    icon: Target,
    title: 'Consiliere în Carieră',
    desc: 'Sesiuni 1:1 cu un consilier expert care te ajută să identifici direcția potrivită și să creezi un traseu profesional clar.',
    color: 'bg-indigo-50 dark:bg-indigo-950/30 text-indigo-700 dark:text-indigo-400',
  },
  {
    icon: Briefcase,
    title: 'Pregătire CV & Interviu',
    desc: 'CV optimizat pentru ATS și recrutori, pregătire pentru interviuri prin simulări reale și feedback detaliat.',
    color: 'bg-sky-50 dark:bg-sky-950/30 text-sky-700 dark:text-sky-400',
  },
  {
    icon: TrendingUp,
    title: 'Reconversie Profesională',
    desc: 'Plan structurat de tranziție spre o nouă carieră, identificarea competențelor transferabile și a lacunelor de umplut.',
    color: 'bg-cyan-50 dark:bg-cyan-950/30 text-cyan-700 dark:text-cyan-400',
  },
  {
    icon: Brain,
    title: 'Dezvoltare Personală',
    desc: 'Programe de creștere personală care lucrează pe mindset, încredere în sine, gestionarea stresului și reziliență.',
    color: 'bg-violet-50 dark:bg-violet-950/30 text-violet-700 dark:text-violet-400',
  },
  {
    icon: Shield,
    title: 'Ghidare Constantă în Carieră',
    desc: 'Suport pe termen lung pentru profesioniști ambițioși: negociere salarială, avansare în carieră, tranziții la nivel de leadership.',
    color: 'bg-blue-50 dark:bg-blue-950/30 text-blue-700 dark:text-blue-400',
  },
]

// ─── VideoCard ─────────────────────────────────────────────────────────────────

function VideoCard({ title, duration, category, videoId }: { title: string; duration: string; category: string; videoId: string }) {
  return (
    <div className="rounded-2xl overflow-hidden shadow-md bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700">
      
      {/* YouTube Embed */}
      <div className="relative aspect-video bg-black">
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      {/* Info */}
      <div className="p-4">
        <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
          <span>{category}</span>
          <span>{duration}</span>
        </div>

        <h4 className="font-semibold text-slate-900 dark:text-white text-sm leading-tight">
          {title}
        </h4>
      </div>
    </div>
  )
}

// ─── StarRating ────────────────────────────────────────────────────────────────

function StarRating({ value, onChange }: { value: number; onChange: (v: number) => void }) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((i) => (
        <button
          key={i}
          type="button"
          onClick={() => onChange(i)}
          className="text-2xl transition-transform hover:scale-110"
          aria-label={`${i} stele`}
        >
          <Star
            className={`w-8 h-8 ${i <= value ? 'text-amber-400 fill-amber-400' : 'text-slate-300 dark:text-slate-600'}`}
          />
        </button>
      ))}
    </div>
  )
}

// ─── HomePage ─────────────────────────────────────────────────────────────────

function HomePage() {
  // Contact form
  const [contact, setContact] = useState({ name: '', email: '', phone: '', career: '', message: '' })
  const [contactSent, setContactSent] = useState(false)
  const [contactLoading, setContactLoading] = useState(false)

  // Questionnaire form
  const [survey, setSurvey] = useState({ surveyName: '', rating: 0, liked: '', improve: '', recommend: '' })
  const [surveySent, setSurveySent] = useState(false)
  const [surveyLoading, setSurveyLoading] = useState(false)

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setContactLoading(true)
    await fetch('/__forms.html', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...contact }),
    })
    setContactSent(true)
    setContactLoading(false)
  }

  const handleSurveySubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSurveyLoading(true)
    await fetch('/__forms.html', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': 'chestionar',
        name: survey.surveyName,
        rating: survey.rating.toString(),
        liked: survey.liked,
        improve: survey.improve,
        recommend: survey.recommend,
      }),
    })
    setSurveySent(true)
    setSurveyLoading(false)
  }

  const inputClass =
    'w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition text-sm'

  return (
    <main>
      {/* ─── HERO ────────────────────────────────────────────────────────── */}
      <section
        id="acasa"
        className="parallax-section parallax-hero min-h-screen flex flex-col items-center justify-center text-center px-4 relative"
      >
        <div className="hero-particles" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/20 rounded-full px-4 py-2 mb-8 text-blue-200 text-sm font-medium">
            <BookOpen className="w-4 h-4" />
            Consiliere de Carieră – Disponibil în Toată România
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-black text-white mb-3 tracking-tight leading-none">
            YCP
          </h1>
          <p className="text-2xl sm:text-3xl md:text-4xl font-light text-blue-200 mb-6 tracking-wide">
            Your Career Path
          </p>
          <p className="text-lg sm:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Transformăm confuzia în claritate. Descoperă-ți drumul profesional cu ajutorul
            consilierilor noștri experți și al unui plan personalizat creat special pentru tine.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl shadow-lg shadow-blue-900/40 transition-all hover:-translate-y-0.5"
            >
              Consultație Gratuită
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#despre"
              className="inline-flex items-center gap-2 px-7 py-4 bg-white/10 backdrop-blur hover:bg-white/20 text-white font-semibold rounded-xl border border-white/20 transition-all"
            >
              Află mai multe
            </a>
          </div>
          <div className="flex items-center justify-center gap-6 mt-12 text-slate-300 text-sm">
            <div className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-blue-400" /> 100% Online</div>
            <div className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-blue-400" /> Personalizat</div>
            <div className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-blue-400" /> Confidențial</div>
          </div>
        </div>
        <a href="#despre" className="absolute bottom-8 left-1/2 -translate-x-1/2 scroll-indicator text-blue-300" aria-label="Derulează în jos">
          <ChevronDown className="w-8 h-8" />
        </a>
      </section>

      {/* ─── STATS ────────────────────────────────────────────────────────── */}
      <section className="bg-blue-700 dark:bg-blue-900 py-12">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
          {[
            { value: '500+', label: 'Clienți Ghidați' },
            { value: '94%', label: 'Rată de Succes' },
            { value: '3 ani', label: 'Experiență' },
            { value: '41', label: 'Județe Acoperite' },
          ].map(({ value, label }) => (
            <div key={label}>
              <p className="text-3xl md:text-4xl font-black mb-1">{value}</p>
              <p className="text-blue-200 text-sm">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── DESPRE ───────────────────────────────────────────────────────── */}
      <section id="despre" className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <div>
              <p className="text-blue-600 dark:text-blue-400 font-semibold text-sm uppercase tracking-wider mb-3">
                Despre YCP
              </p>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-5 leading-tight">
                Misiunea Noastră: Claritate în Carieră
              </h2>
              <div className="section-divider !mx-0 !mb-6" />
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                YCP - Your Career Path s-a născut din convingerea că fiecare persoană merită să aibă
                acces la o îndrumare profesională de calitate, indiferent de orașul în care locuiește
                sau de bugetul de care dispune. Activăm exclusiv online, pentru a fi accesibili tuturor
                românilor, indiferent de locație.
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                Echipa noastră de consilieri a ajutat sute de studenți să intre la facultatea dorită,
                de profesioniști să facă tranziții de carieră de succes și de oameni în căutarea
                sensului să își descopere vocația. Nu avem o rețetă universală – avem metodologii
                adaptate fiecărui om în parte.
              </p>
              <div className="space-y-3">
                {[
                  'Program complet online, disponibil în toată România',
                  'Consiliere personalizată 1:1 cu experți certificați',
                  'Plan de acțiune clar, cu pași măsurabili',
                  'Suport continuu pe toată durata programului',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                    <p className="text-slate-700 dark:text-slate-200 text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Target, title: 'Direcție Clară', desc: 'Identificăm împreună cel mai potrivit traseu profesional pentru tine.' },
                { icon: Users, title: 'Comunitate', desc: 'Faci parte dintr-o comunitate de profesioniști care se susțin reciproc.' },
                { icon: Award, title: 'Rezultate Dovedite', desc: 'Ratele noastre de succes vorbesc de la sine: 94% dintre clienți își ating obiectivele.' },
                { icon: TrendingUp, title: 'Creștere Continuă', desc: 'Îți oferim instrumente pentru o evoluție sustenabilă pe termen lung.' },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5 text-blue-700 dark:text-blue-400" />
                  </div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-sm mb-1">{title}</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── SERVICII / CONTENT TREE ──────────────────────────────────────── */}
      <section id="servicii" className="py-20 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-blue-600 dark:text-blue-400 font-semibold text-sm uppercase tracking-wider mb-3">
              Servicii
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-4">
              Serviciile Noastre
            </h2>
            <div className="section-divider" />
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Fiecare serviciu YCP este construit în jurul nevoilor tale specifice. Descoperă pachetul
              care se potrivește cel mai bine obiectivelor tale actuale.
            </p>
          </div>

          {/* Root node */}
          <div className="flex flex-col items-center">
            <div className="bg-blue-700 text-white rounded-2xl px-8 py-4 text-center shadow-lg shadow-blue-900/20 mb-0">
              <div className="flex items-center gap-2 justify-center">
                <BookOpen className="w-5 h-5" />
                <span className="font-bold text-lg">YCP – Your Career Path</span>
              </div>
              <p className="text-blue-200 text-xs mt-1">Platforma ta de dezvoltare profesională</p>
            </div>

            {/* Connector line */}
            <div className="w-0.5 h-8 bg-blue-400" />

            {/* Branch grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
              {services.map(({ icon: Icon, title, desc, color }) => (
                <div
                  key={title}
                  className="rounded-2xl p-6 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-sm card-hover relative"
                >
                  <div className={`w-11 h-11 rounded-xl ${color} flex items-center justify-center mb-4`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-slate-900 dark:text-white mb-2">{title}</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{desc}</p>
                  <a href="#contact" className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 text-xs font-semibold mt-4 hover:underline">
                    Află mai multe <ChevronRight className="w-3 h-3" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── FORMATE CONȚINUT ─────────────────────────────────────────────── */}
      <section id="formate" className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-blue-600 dark:text-blue-400 font-semibold text-sm uppercase tracking-wider mb-3">
              Conținut
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-4">
              Resurse pentru Creșterea Ta
            </h2>
            <div className="section-divider" />
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Accesezi materiale educaționale în format text, audio și video – toate create de
              specialiști YCP pentru a-ți susține parcursul profesional.
            </p>
          </div>

          {/* VIDEO */}
          <div className="mb-14">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-xl bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center">
                <Play className="w-4 h-4 text-blue-700 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Webinarii & Video-consultații</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              <VideoCard
                title="Cum să alegi cariera potrivită în 2026"
                duration="38:24"
                category="Consiliere"
                videoId="zhpcgpqWc1Q"
              />

              <VideoCard
                title="Pregătirea pentru admitere: strategii dovedite de succes"
                duration="44:10"
                category="Admitere"
                videoId="TjPFZaMe2yw"
              />

              <VideoCard
                title="Reconversie profesională: de la 0 la angajare în 12 luni"
                duration="52:07"
                category="Reconversie"
                videoId="MIjH8MCbONI"
              />
            </div>
          </div>

          {/* TEXT ARTICLES PREVIEW */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-xl bg-sky-100 dark:bg-sky-900/40 flex items-center justify-center">
                <FileText className="w-4 h-4 text-sky-700 dark:text-sky-400" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Ghiduri & Articole</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {[
                { title: 'Ghidul Complet de Admitere 2026', pages: '42 pag.', tag: 'Admitere' },
                { title: 'Dicționarul Carierei: 100 de Termeni pe care Trebuie să îi Știi', pages: '27 pag.', tag: 'Vocabular' },
                { title: 'Interviul de Angajare: 50 de Întrebări și Răspunsuri', pages: '67 pag.', tag: 'Interviu' },
              ].map(({ title, pages, tag }) => (
                <div key={title} className="flex gap-4 p-5 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 card-hover">
                  <div className="w-11 h-14 rounded-lg bg-blue-700 flex items-center justify-center flex-shrink-0 shadow">
                    <BookOpen className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <span className="text-xs bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 px-2 py-0.5 rounded-full font-medium">{tag}</span>
                    <h4 className="font-semibold text-slate-900 dark:text-white text-sm mt-1.5 leading-tight">{title}</h4>
                    <p className="text-slate-400 dark:text-slate-500 text-xs mt-1">{pages}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALE ─────────────────────────────────────────────────── */}
      <section id="testimoniale" className="py-20 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-blue-600 dark:text-blue-400 font-semibold text-sm uppercase tracking-wider mb-3">
              Testimoniale
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-4">
              Povești Reale de Succes
            </h2>
            <div className="section-divider" />
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Rezultatele noastre se măsoară în vieți schimbate, visuri atinse și cariere construite
              cu fundamente solide.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-700 card-hover flex flex-col"
              >
                <div className="flex gap-0.5 mb-3">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className={`w-4 h-4 ${i <= t.stars ? 'text-amber-400 fill-amber-400' : 'text-slate-200'}`} />
                  ))}
                </div>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-5 flex-1 italic">
                  „{t.text}"
                </p>
                <div className="border-t border-slate-100 dark:border-slate-700 pt-4 mt-auto">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-700 flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900 dark:text-white text-sm">{t.name}, {t.age} ani</p>
                      <p className="text-slate-500 dark:text-slate-400 text-xs">{t.role}</p>
                    </div>
                  </div>
                  <div className="mt-3 px-3 py-1.5 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                    <p className="text-blue-700 dark:text-blue-300 text-xs font-semibold flex items-center gap-1.5">
                      <Award className="w-3 h-3" /> {t.achievement}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BLOG PREVIEW ─────────────────────────────────────────────────── */}
      <section id="blog-preview" className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <p className="text-blue-600 dark:text-blue-400 font-semibold text-sm uppercase tracking-wider mb-2">Blog</p>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white">
                Ultimele Articole
              </h2>
            </div>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold text-sm hover:underline"
            >
              Toate articolele <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                to="/blog/$slug"
                params={{ slug: post.slug }}
                className="group bg-slate-50 dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-700 card-hover block"
              >
                {/* <div className="aspect-video bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <FileText className="w-10 h-10 text-blue-400/60" />
                  </div>
                  <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs px-2.5 py-1 rounded-full font-medium">
                    {post.category}
                  </span>
                </div> */}

                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />

                  <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs px-2.5 py-1 rounded-full font-medium">
                    {post.category}
                  </span>
                </div>

                <div className="p-5">
                  <div className="flex items-center gap-3 text-xs text-slate-400 mb-2">
                    <span>{post.date}</span>
                    <span>·</span>
                    <span>{post.readTime} lectură</span>
                  </div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-base leading-tight mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SOCIAL MEDIA ─────────────────────────────────────────────────── */}
      <section className="py-16 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white mb-3">
            Urmărește-ne pe Rețele Sociale
          </h2>
          <p className="text-slate-500 dark:text-slate-400 mb-8 text-sm">
            Sfaturi zilnice de carieră, povești inspiraționale și conținut exclusiv disponibil pe Instagram și TikTok.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://www.instagram.com/ycp.careerpath/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white font-bold rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
            >
              <Instagram className="w-5 h-5" />
              Instagram @ycp.careerpath
            </a>
            <a
              href="https://www.tiktok.com/@ycp.careerpath"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-4 bg-slate-900 dark:bg-slate-700 text-white font-bold rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
            >
              <TikTokIcon />
              TikTok @ycp.careerpath
            </a>
          </div>
        </div>
      </section>

      {/* ─── PREȚURI ──────────────────────────────────────────────────────── */}
      <section id="preturi" className="py-20 bg-blue-700 dark:bg-blue-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-blue-200 font-semibold text-sm uppercase tracking-wider mb-3">Prețuri</p>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Investiția în Viitorul Tău
          </h2>
          <div className="w-12 h-1 bg-blue-400 rounded mx-auto mb-6" />
          <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            La YCP nu avem prețuri fixe, deoarece fiecare parcurs este unic. Prețul programului tău
            depinde de obiectivele tale, durata dorită și nivelul de suport solicitat.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
            {[
              {
                title: 'Sesiune de Orientare',
                desc: 'O sesiune inițială de evaluare și orientare, ideală pentru cei care nu știu de unde să înceapă.',
                features: ['Evaluare profilului de carieră', 'Identificarea obiectivelor', 'Recomandări personalizate'],
              },
              {
                title: 'Program de Carieră',
                desc: 'Pachet complet de consiliere pentru atingerea unui obiectiv specific de carieră sau admitere.',
                features: ['Sesiuni săptămânale 1:1', 'Plan de acțiune detaliat', 'Resurse și materiale', 'Suport continuu'],
                featured: true,
              },
              {
                title: 'Dezvoltare Abilități de Conducere',
                desc: 'Program intensiv pentru profesioniști care vizează avansarea rapidă sau o tranziție majoră.',
                features: ['Sesiuni intensive', 'Networking facilitat', 'Mentorat personalizat', 'Suport nelimitat'],
              },
            ].map(({ title, desc, features, featured }) => (
              <div
                key={title}
                className={`rounded-2xl p-6 text-left ${
                  featured
                    ? 'bg-white text-slate-900 shadow-xl shadow-blue-900/30 scale-105'
                    : 'bg-blue-800/60 dark:bg-blue-950/60 text-white border border-blue-600/30'
                }`}
              >
                {featured && (
                  <span className="inline-block bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">
                    Cel mai popular
                  </span>
                )}
                <h3 className={`font-bold text-lg mb-2 ${featured ? 'text-slate-900' : 'text-white'}`}>{title}</h3>
                <p className={`text-sm leading-relaxed mb-4 ${featured ? 'text-slate-600' : 'text-blue-200'}`}>{desc}</p>
                <ul className="space-y-2 mb-6">
                  {features.map((f) => (
                    <li key={f} className={`flex items-center gap-2 text-sm ${featured ? 'text-slate-700' : 'text-blue-100'}`}>
                      <CheckCircle className={`w-4 h-4 flex-shrink-0 ${featured ? 'text-blue-600' : 'text-blue-400'}`} />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={`block text-center py-2.5 px-4 rounded-xl font-semibold text-sm transition-colors ${
                    featured
                      ? 'bg-blue-700 text-white hover:bg-blue-600'
                      : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
                  }`}
                >
                  Solicită ofertă
                </a>
              </div>
            ))}
          </div>
          <p className="text-blue-200 text-sm">
            Toate prețurile sunt stabilite printr-o consultație inițială gratuită.
            Contactează-ne pentru o ofertă personalizată.
          </p>
        </div>
      </section>

      {/* ─── CONTACT ──────────────────────────────────────────────────────── */}
      <section id="contact" className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-blue-600 dark:text-blue-400 font-semibold text-sm uppercase tracking-wider mb-3">Contact</p>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-4">
              Hai să Vorbim despre Viitorul Tău
            </h2>
            <div className="section-divider" />
            <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
              Prima consultație este gratuită. Completează formularul și te contactăm în maxim 24 de ore.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div>
              <h3 className="font-bold text-slate-900 dark:text-white text-lg mb-5 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-blue-600" />
                Trimite-ne un Mesaj
              </h3>
              {contactSent ? (
                <div className="rounded-2xl bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 p-8 text-center">
                  <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-3" />
                  <h4 className="font-bold text-green-800 dark:text-green-300 text-lg mb-2">Mesaj trimis cu succes!</h4>
                  <p className="text-green-700 dark:text-green-400 text-sm">
                    Îți mulțumim pentru mesaj. Te contactăm în cel mult 24 de ore.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <input type="hidden" name="form-name" value="contact" />
                  <input
                    type="text"
                    name="name"
                    placeholder="Nume complet (ex: Ion Popescu)"
                    required
                    value={contact.name}
                    onChange={(e) => setContact({ ...contact, name: e.target.value })}
                    className={inputClass}
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Adresă email (ex: ionpopescu@exemplu.com)"
                    required
                    value={contact.email}
                    onChange={(e) => setContact({ ...contact, email: e.target.value })}
                    className={inputClass}
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Număr de telefon (opțional)"
                    value={contact.phone}
                    onChange={(e) => setContact({ ...contact, phone: e.target.value })}
                    className={inputClass}
                  />
                  <select
                    name="career"
                    required
                    value={contact.career}
                    onChange={(e) => setContact({ ...contact, career: e.target.value })}
                    className={inputClass}
                  >
                    <option value="">Selectează domeniul de interes</option>
                    <option>Admitere Universitate</option>
                    <option>Tehnologie & IT</option>
                    <option>Medicină & Sănătate</option>
                    <option>Drept</option>
                    <option>Economie & Finanțe</option>
                    <option>Inginerie</option>
                    <option>Artă & Arhitectură</option>
                    <option>Educație</option>
                    <option>Reconversie Profesională</option>
                    <option>Altul</option>
                  </select>
                  <textarea
                    name="message"
                    placeholder="Descrie pe scurt situația ta și obiectivele tale..."
                    required
                    rows={4}
                    value={contact.message}
                    onChange={(e) => setContact({ ...contact, message: e.target.value })}
                    className={inputClass}
                  />
                  <button
                    type="submit"
                    disabled={contactLoading}
                    className="w-full py-3.5 bg-blue-700 hover:bg-blue-600 disabled:bg-blue-400 text-white font-bold rounded-xl shadow transition-colors flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    {contactLoading ? 'Se trimite...' : 'Trimite Mesajul'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
      
      {/* ─── QUESTIONNAIRE ──────────────────────────────────────── */}
      <section id="chestionar" className="py-20 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-blue-600 dark:text-blue-400 font-semibold text-sm uppercase tracking-wider mb-3">
              Feedback
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-4">
              Spune-ne Părerea Ta
            </h2>
            <div className="section-divider" />
            <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
              Dacă ai lucrat cu noi, feedback-ul tău ne ajută să devenim mai buni.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-100 dark:border-slate-700 shadow-sm">
              {surveySent ? (
                <div className="text-center py-6">
                  <CheckCircle className="w-10 h-10 text-green-500 mx-auto mb-2" />
                  <p className="font-bold text-green-700 dark:text-green-400">
                    Îți mulțumim pentru feedback!
                  </p>
                  <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">
                    Răspunsurile tale ne ajută să ne îmbunătățim continuu.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSurveySubmit} className="space-y-4">
                  <input type="hidden" name="form-name" value="chestionar" />

                  <input
                    type="text"
                    name="surveyName"
                    placeholder="Numele tău (opțional)"
                    value={survey.surveyName}
                    onChange={(e) =>
                      setSurvey({ ...survey, surveyName: e.target.value })
                    }
                    className={inputClass}
                  />

                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Cât de mulțumit ești de serviciile YCP?
                    </label>
                    <StarRating
                      value={survey.rating}
                      onChange={(v) =>
                        setSurvey({ ...survey, rating: v })
                      }
                    />
                  </div>

                  <textarea
                    name="liked"
                    placeholder="Ce ți-a plăcut cel mai mult?"
                    rows={2}
                    value={survey.liked}
                    onChange={(e) =>
                      setSurvey({ ...survey, liked: e.target.value })
                    }
                    className={inputClass}
                  />

                  <textarea
                    name="improve"
                    placeholder="Ce am putea îmbunătăți?"
                    rows={2}
                    value={survey.improve}
                    onChange={(e) =>
                      setSurvey({ ...survey, improve: e.target.value })
                    }
                    className={inputClass}
                  />

                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Ai recomanda YCP unui prieten?
                    </label>
                    <div className="flex gap-3">
                      {['Da, cu siguranță!', 'Probabil da', 'Nu știu'].map((opt) => (
                        <label key={opt} className="flex items-center gap-1.5 cursor-pointer">
                          <input
                            type="radio"
                            name="recommend"
                            value={opt}
                            checked={survey.recommend === opt}
                            onChange={(e) =>
                              setSurvey({ ...survey, recommend: e.target.value })
                            }
                          />
                          <span className="text-sm text-slate-700 dark:text-slate-300">
                            {opt}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={surveyLoading || survey.rating === 0}
                    className="w-full py-3 bg-blue-700 hover:bg-blue-600 disabled:opacity-50 text-white font-bold rounded-xl transition-colors flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    {surveyLoading ? 'Se trimite...' : 'Trimite Feedback'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
