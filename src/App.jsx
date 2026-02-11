import React, { useState } from 'react';
import { BookOpen, Search, Menu, X, ArrowRight, Feather, Coffee, User } from 'lucide-react';
import { motion } from 'framer-motion';

// Dati fittizi per gli articoli
const BLOG_POSTS = [
  {
    id: 1,
    title: "L'arte di lasciare tracce",
    excerpt: "Come le nostre interazioni quotidiane con gli oggetti modificano la loro forma e il loro significato nel tempo. Un'analisi sulla patina dell'uso.",
    category: "Filosofia",
    date: "12 Feb 2026",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    title: "Minimalismo Digitale: Una guida pratica",
    excerpt: "Ridurre il rumore digitale non significa solo cancellare app, ma ridefinire il nostro rapporto con la tecnologia per ritrovare la concentrazione.",
    category: "Tecnologia",
    date: "10 Feb 2026",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1499750310159-5b9887039e54?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    title: "Il ritorno della carta",
    excerpt: "Perché, nell'era degli schermi 4K, sentiamo ancora il bisogno tattile di sfogliare una pagina e sentire l'odore dell'inchiostro.",
    category: "Design",
    date: "05 Feb 2026",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 4,
    title: "Caffè e Codice: Rituali mattutini",
    excerpt: "Esploriamo come i piccoli rituali mattutini influenzano la produttività creativa e la qualità del nostro lavoro.",
    category: "Lifestyle",
    date: "01 Feb 2026",
    readTime: "4 min",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800"
  }
];

const CATEGORIES = ["Tutte", "Filosofia", "Design", "Tecnologia", "Lifestyle", "Fotografia"];

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("Tutte");

  // Filtra i post in base alla categoria
  const filteredPosts = activeCategory === "Tutte" 
    ? BLOG_POSTS 
    : BLOG_POSTS.filter(post => post.category === activeCategory);

  return (
    <div className="min-h-screen flex flex-col bg-[#fdfbf7] text-stone-800 font-sans">
      
      {/* --- HEADER --- */}
      <header className="sticky top-0 z-50 bg-[#fdfbf7]/90 backdrop-blur-md border-b border-stone-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center gap-2 cursor-pointer group">
              <div className="p-2 bg-stone-800 text-white rounded-lg group-hover:bg-amber-600 transition-colors duration-300">
                <Feather size={24} />
              </div>
              <span className="text-2xl font-serif font-bold tracking-tight group-hover:text-amber-700 transition-colors">
                Tracce d'Uso
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8 items-center">
              {['Home', 'Chi Sono', 'Archivio', 'Contatti'].map((item) => (
                <a 
                  key={item} 
                  href="#" 
                  className="text-stone-600 hover:text-amber-700 font-medium transition-colors hover-underline-animation"
                >
                  {item}
                </a>
              ))}
              <button className="p-2 text-stone-500 hover:text-amber-700 transition-colors">
                <Search size={20} />
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-stone-600 hover:bg-stone-100 rounded-md"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white border-b border-stone-200"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {['Home', 'Chi Sono', 'Archivio', 'Contatti'].map((item) => (
                <a 
                  key={item} 
                  href="#" 
                  className="block px-3 py-2 text-lg font-medium text-stone-700 hover:bg-stone-50 hover:text-amber-700 rounded-md"
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </header>

      {/* --- HERO SECTION --- */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-stone-100 border-b border-stone-200 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
           {/* Pattern decorativo di sfondo (opzionale) */}
           <svg width="100%" height="100%">
             <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
               <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
             </pattern>
             <rect width="100%" height="100%" fill="url(#grid)" />
           </svg>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-amber-700 font-semibold tracking-wider uppercase text-sm mb-4 block">
              Benvenuti nel blog
            </span>
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-stone-900 mb-6 leading-tight">
              Esplorando le impronte <br/> che lasciamo nel mondo.
            </h1>
            <p className="text-xl text-stone-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Un diario digitale dedicato al design, alla cultura materiale e alle piccole storie quotidiane che definiscono la nostra esistenza.
            </p>
            <div className="flex justify-center gap-4">
              <button className="px-8 py-3 bg-stone-900 text-white font-medium rounded-full hover:bg-amber-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 duration-200">
                Inizia a leggere
              </button>
              <button className="px-8 py-3 bg-white border border-stone-300 text-stone-700 font-medium rounded-full hover:bg-stone-50 transition-colors">
                Iscriviti alla newsletter
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- MAIN CONTENT --- */}
      <main className="flex-grow max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Colonna Sinistra: Articoli */}
          <div className="lg:w-2/3">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-serif font-bold text-stone-800">Ultimi Articoli</h2>
              <div className="h-px bg-stone-300 flex-grow ml-6 hidden sm:block"></div>
            </div>

            <div className="space-y-12">
              {filteredPosts.map((post) => (
                <motion.article 
                  key={post.id}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col md:flex-row gap-6 group cursor-pointer"
                >
                  <div className="md:w-1/3 overflow-hidden rounded-xl">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-56 md:h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="md:w-2/3 flex flex-col justify-center">
                    <div className="flex items-center gap-3 text-sm text-stone-500 mb-2">
                      <span className="text-amber-700 font-semibold uppercase tracking-wider text-xs">{post.category}</span>
                      <span>•</span>
                      <span>{post.date}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1"><BookOpen size={14}/> {post.readTime}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-stone-900 mb-3 group-hover:text-amber-700 transition-colors font-serif">
                      {post.title}
                    </h3>
                    <p className="text-stone-600 mb-4 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="mt-auto">
                      <span className="inline-flex items-center text-stone-900 font-medium group-hover:translate-x-1 transition-transform duration-300">
                        Leggi tutto <ArrowRight size={16} className="ml-2" />
                      </span>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <div className="text-center py-20 text-stone-500">
                Nessun articolo trovato in questa categoria.
              </div>
            )}
            
            <div className="mt-16 text-center">
               <button className="px-6 py-2 border border-stone-300 rounded-full text-stone-600 hover:bg-stone-100 transition-colors">
                 Carica altri articoli
               </button>
            </div>
          </div>

          {/* Colonna Destra: Sidebar */}
          <aside className="lg:w-1/3 space-y-10">
            
            {/* Widget Categorie */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100">
              <h4 className="text-lg font-bold font-serif mb-4 flex items-center gap-2">
                <span className="w-1 h-6 bg-amber-600 rounded-full"></span> Categorie
              </h4>
              <div className="flex flex-wrap gap-2">
                {CATEGORIES.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-3 py-1.5 text-sm rounded-full transition-all duration-200 ${
                      activeCategory === cat 
                        ? 'bg-stone-800 text-white' 
                        : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Widget Autore */}
            <div className="bg-stone-900 text-stone-100 p-8 rounded-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 -mr-4 -mt-4 opacity-10">
                <User size={120} />
              </div>
              <h4 className="text-xl font-serif font-bold mb-4">L'Autore</h4>
              <p className="text-stone-300 mb-6 text-sm leading-relaxed">
                Mi chiamo Marco. Scrivo di come gli oggetti ci parlano e di come noi rispondiamo. Appassionato di tipografia, caffè nero e codice pulito.
              </p>
              <a href="#" className="text-amber-400 text-sm font-medium hover:text-amber-300 flex items-center gap-1">
                Scopri di più su di me <ArrowRight size={14}/>
              </a>
            </div>

            {/* Widget Newsletter */}
            <div className="bg-amber-50 p-6 rounded-2xl border border-amber-100">
              <div className="flex items-center gap-2 mb-3 text-amber-800">
                <Coffee size={20} />
                <h4 className="font-bold font-serif">Pausa Caffè?</h4>
              </div>
              <p className="text-sm text-stone-600 mb-4">
                Ricevi una mail ogni domenica mattina con i migliori articoli della settimana. Niente spam, promesso.
              </p>
              <form className="flex flex-col gap-2">
                <input 
                  type="email" 
                  placeholder="La tua email..." 
                  className="px-4 py-2 rounded-lg border border-stone-200 focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white"
                />
                <button className="px-4 py-2 bg-amber-600 text-white rounded-lg font-medium hover:bg-amber-700 transition-colors">
                  Iscriviti
                </button>
              </form>
            </div>

          </aside>
        </div>
      </main>

      {/* --- FOOTER --- */}
      <footer className="bg-stone-900 text-stone-400 py-12 border-t border-stone-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-4 text-stone-100">
                <Feather size={24} />
                <span className="text-2xl font-serif font-bold">Tracce d'Uso</span>
              </div>
              <p className="max-w-sm text-sm leading-relaxed">
                Un blog minimalista creato per celebrare la bellezza della semplicità e l'importanza dei dettagli nel design e nella vita quotidiana.
              </p>
            </div>
            <div>
              <h5 className="text-stone-100 font-bold mb-4">Esplora</h5>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-amber-500 transition-colors">Articoli</a></li>
                <li><a href="#" className="hover:text-amber-500 transition-colors">Autori</a></li>
                <li><a href="#" className="hover:text-amber-500 transition-colors">Podcast</a></li>
                <li><a href="#" className="hover:text-amber-500 transition-colors">RSS Feed</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-stone-100 font-bold mb-4">Legale</h5>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-amber-500 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-amber-500 transition-colors">Cookie Policy</a></li>
                <li><a href="#" className="hover:text-amber-500 transition-colors">Termini d'uso</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-stone-800 text-center text-xs">
            &copy; {new Date().getFullYear()} Tracce d'Uso. Tutti i diritti riservati. Realizzato con React & Tailwind.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;