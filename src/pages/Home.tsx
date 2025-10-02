import { useState } from 'react'
import { FaChevronLeft, FaChevronRight, FaPlay, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaRoad, FaTh, FaCar, FaHome, FaBars, FaTimes } from 'react-icons/fa'

export default function Home() {
  const [activeStep, setActiveStep] = useState(1)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const processSteps: Record<number, { image: string; title: string; description: string }> = {
    1: {
      image: "/galery/1.jpeg",
      title: "Persiapan Lokasi & Perencanaan",
      description: "Penilaian dan persiapan lokasi secara profesional untuk hasil pengaspalan yang optimal"
    },
    2: {
      image: "/galery/10.jpeg",
      title: "Pemilihan Material",
      description: "Pemilihan material aspal berkualitas tinggi untuk daya tahan dan performa terbaik"
    },
    3: {
      image: "/galery/10.jpeg",
      title: "Proses Pengaspalan",
      description: "Pengaspalan hotmix dengan teknologi modern dan tenaga ahli berpengalaman"
    },
    4: {
      image: "/galery/11.jpeg",
      title: "Finishing & Pemadatan",
      description: "Proses finishing profesional dengan teknik pemadatan yang presisi"
    },
    5: {
      image: "/galery/13.jpeg",
      title: "Pengecekan & Verifikasi",
      description: "Pengecekan dan verifikasi hasil pengaspalan untuk memastikan kualitas dan keamanan"
    }
  }

  const currentStep = processSteps[activeStep]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 backdrop-blur-md shadow-2xl border-b border-slate-700/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="navbar py-3 lg:py-4">
            <div className="navbar-start">
              <div className="flex items-center gap-2 lg:gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl flex items-center justify-center shadow-lg transform hover:scale-105 transition-transform duration-300">
                  <span className="text-white font-bold text-sm sm:text-base lg:text-lg">B</span>
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-sm sm:text-lg md:text-xl lg:text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent whitespace-nowrap">
                    BUANA ASPAL
                  </span>
                  <span className="text-xs text-orange-400 font-medium tracking-wider hidden sm:block">
                    PROFESSIONAL PAVING
                  </span>
                </div>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1 gap-2">
                <li>
                  <a href="#beranda" className="text-gray-300 hover:text-white hover:bg-slate-700/50 font-medium px-6 py-3 rounded-xl transition-all duration-300 relative group">
                    Beranda
                    <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-orange-600 group-hover:w-full group-hover:left-0 transition-all duration-300"></span>
                  </a>
                </li>
                <li>
                  <a href="#tentang" className="text-gray-300 hover:text-white hover:bg-slate-700/50 font-medium px-6 py-3 rounded-xl transition-all duration-300 relative group">
                    Tentang Kami
                    <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-orange-600 group-hover:w-full group-hover:left-0 transition-all duration-300"></span>
                  </a>
                </li>
                <li>
                  <a href="#layanan" className="text-gray-300 hover:text-white hover:bg-slate-700/50 font-medium px-6 py-3 rounded-xl transition-all duration-300 relative group">
                    Layanan
                    <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-orange-600 group-hover:w-full group-hover:left-0 transition-all duration-300"></span>
                  </a>
                </li>
                <li>
                  <a href="#galeri" className="text-gray-300 hover:text-white hover:bg-slate-700/50 font-medium px-6 py-3 rounded-xl transition-all duration-300 relative group">
                    Galeri
                    <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-orange-600 group-hover:w-full group-hover:left-0 transition-all duration-300"></span>
                  </a>
                </li>
                <li>
                  <a href="#testimoni" className="text-gray-300 hover:text-white hover:bg-slate-700/50 font-medium px-6 py-3 rounded-xl transition-all duration-300 relative group">
                    Testimoni
                    <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-orange-600 group-hover:w-full group-hover:left-0 transition-all duration-300"></span>
                  </a>
                </li>
              </ul>
            </div>
            
            <div className="navbar-end gap-2 lg:gap-3">
              {/* Mobile Contact Button */}
              <a 
                href="https://wa.me/6283247981703" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 border-none text-white px-4 lg:px-8 py-2 lg:py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-sm lg:text-base"
              >
                <svg className="w-4 h-4 lg:w-5 lg:h-5 mr-1 lg:mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.515z"/>
                </svg>
                <span className="hidden sm:inline">Hubungi Kami</span>
                <span className="sm:hidden">WA</span>
              </a>
              
              {/* Mobile Menu Button */}
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden btn btn-ghost text-white p-2 hover:bg-slate-700/50 rounded-xl"
              >
                {isMobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-gradient-to-b from-slate-900 to-slate-800 border-t border-slate-700/50 shadow-2xl">
            <div className="container mx-auto px-4 py-6">
              <nav className="flex flex-col space-y-4">
                <a 
                  href="#beranda" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-300 hover:text-white hover:bg-slate-700/50 font-medium px-4 py-3 rounded-xl transition-all duration-300 text-center"
                >
                  Beranda
                </a>
                <a 
                  href="#tentang" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-300 hover:text-white hover:bg-slate-700/50 font-medium px-4 py-3 rounded-xl transition-all duration-300 text-center"
                >
                  Tentang Kami
                </a>
                <a 
                  href="#layanan" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-300 hover:text-white hover:bg-slate-700/50 font-medium px-4 py-3 rounded-xl transition-all duration-300 text-center"
                >
                  Layanan
                </a>
                <a 
                  href="#galeri" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-300 hover:text-white hover:bg-slate-700/50 font-medium px-4 py-3 rounded-xl transition-all duration-300 text-center"
                >
                  Galeri
                </a>
                <a 
                  href="#testimoni" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-300 hover:text-white hover:bg-slate-700/50 font-medium px-4 py-3 rounded-xl transition-all duration-300 text-center"
                >
                  Testimoni
                </a>
              </nav>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="relative">
        {/* Hero Text Section */}
        <div id="beranda" className="container mx-auto px-6 lg:px-12 py-12 pt-32">
          <div className="flex flex-col lg:flex-row justify-between items-center lg:items-center gap-8">
            {/* Left Side - Description */}
            <div className="lg:w-1/3 text-center lg:text-left order-2 lg:order-1">
              <p className="text-gray-600 text-lg lg:text-xl mb-6 leading-relaxed">
                Solusi pengaspalan berkualitas tinggi dan terjangkau untuk berbagai kebutuhan infrastruktur di seluruh Indonesia.
              </p>
              <a 
                href="https://wa.me/6283247981703" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary bg-blue-600 hover:bg-blue-700 border-blue-600 text-white px-8 py-3 rounded-full inline-flex items-center"
              >
                Hubungi Kami
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>

            {/* Center - Main Title */}
            <div className="lg:w-1/3 relative text-center order-1 lg:order-2">
              <div className="relative inline-block">
                <h1 className="text-6xl lg:text-8xl font-bold text-gray-900 leading-none">
                  Aspal
                </h1>
                <h1 className="text-6xl lg:text-8xl font-bold text-gray-400 leading-none">
                  Sekarang
                </h1>
                <div className="absolute -top-2 right-0 lg:-right-8">
                  <div className="bg-orange-400 text-white px-3 py-1 rounded-full text-sm font-medium transform rotate-12">
                    Buana
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Main Image Section */}
        <div className="container mx-auto px-6 lg:px-12 pb-12">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src={currentStep.image}
              alt={currentStep.title}
              className="w-full h-[400px] lg:h-[500px] object-cover transition-all duration-500"
            />
            
            {/* Process Steps Overlay */}
            <div className="absolute bottom-6 left-6 right-6 lg:left-6 lg:right-auto flex gap-2 lg:gap-3 flex-wrap justify-center lg:justify-start">
              <button 
                onClick={() => setActiveStep(1)}
                className={`${activeStep === 1 ? 'rounded-2xl px-3 py-2 lg:px-4 lg:py-3' : 'rounded-full w-10 h-10 lg:w-12 lg:h-12'} flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 ${
                  activeStep === 1 ? 'bg-blue-600 text-white' : 'bg-white text-gray-600'
                }`}
              >
                <span className="font-bold text-sm lg:text-base">
                  {activeStep === 1 ? `01 ${currentStep.title}` : '01'}
                </span>
              </button>
              <button 
                onClick={() => setActiveStep(2)}
                className={`${activeStep === 2 ? 'rounded-2xl px-3 py-2 lg:px-4 lg:py-3' : 'rounded-full w-10 h-10 lg:w-12 lg:h-12'} flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-105 ${
                  activeStep === 2 ? 'bg-blue-600 text-white' : 'bg-white text-gray-800'
                }`}
              >
                <span className="font-semibold text-sm lg:text-base">
                  {activeStep === 2 ? `02 ${currentStep.title}` : '02'}
                </span>
              </button>
              <button 
                onClick={() => setActiveStep(3)}
                className={`${activeStep === 3 ? 'rounded-2xl px-3 py-2 lg:px-4 lg:py-3' : 'rounded-full w-10 h-10 lg:w-12 lg:h-12'} flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-105 ${
                  activeStep === 3 ? 'bg-blue-600 text-white' : 'bg-white text-gray-800'
                }`}
              >
                <span className="font-semibold text-sm lg:text-base">
                  {activeStep === 3 ? `03 ${currentStep.title}` : '03'}
                </span>
              </button>
              <button 
                onClick={() => setActiveStep(4)}
                className={`${activeStep === 4 ? 'rounded-2xl px-3 py-2 lg:px-4 lg:py-3' : 'rounded-full w-10 h-10 lg:w-12 lg:h-12'} flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 ${
                  activeStep === 4 ? 'bg-blue-600 text-white' : 'bg-white text-gray-600'
                }`}
              >
                <span className="font-bold text-sm lg:text-base">
                  {activeStep === 4 ? `04 ${currentStep.title}` : '04'}
                </span>
              </button>
              <button 
                onClick={() => setActiveStep(5)}
                className={`${activeStep === 5 ? 'rounded-2xl px-3 py-2 lg:px-4 lg:py-3' : 'rounded-full w-10 h-10 lg:w-12 lg:h-12'} flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 ${
                  activeStep === 5 ? 'bg-blue-600 text-white' : 'bg-white text-gray-600'
                }`}
              >
                <span className="font-bold text-sm lg:text-base">
                  {activeStep === 5 ? `05 ${currentStep.title}` : '05'}
                </span>
              </button>
            </div>

            {/* CAD Card */}
            <div className="absolute top-6 left-6 right-6 lg:top-6 lg:right-6 lg:left-auto bg-white rounded-2xl p-4 lg:p-6 shadow-xl lg:max-w-sm">
              <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-3 lg:mb-4 leading-tight">
                {currentStep.title}
              </h3>
              <p className="text-gray-600 text-sm lg:text-base mb-4">
                {currentStep.description}
              </p>
              <a 
                href="https://wa.me/6283247981703" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary bg-blue-600 hover:bg-blue-700 border-blue-600 text-white w-full rounded-xl text-sm lg:text-base inline-flex items-center justify-center"
              >
                Pelajari Lebih Lanjut Tentang Proses Kami
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* About Section */}
        <section id="tentang" className="bg-gray-100 py-16 lg:py-24">
          <div className="container mx-auto px-6 lg:px-12">
            {/* About Us Badge and Title */}
            <div className="mb-12 lg:mb-16">
              <div className="inline-block bg-orange-400 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                Tentang Kami
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Mitra terpercaya selama lebih dari 5 tahun
              </h2>
              <h3 className="text-3xl lg:text-4xl font-light text-gray-400">
                dalam keunggulan industri pengaspalan
              </h3>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left Side - Team Images and Description */}
              <div>
                {/* Team Member Images */}
                {/* <div className="flex gap-4 mb-8">
                  <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-2xl bg-gray-300 overflow-hidden">
                    <svg className="w-full h-full text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                    </svg>
                  </div>
                  <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-full bg-gray-300 overflow-hidden">
                    <svg className="w-full h-full text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                    </svg>
                  </div>
                  <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-2xl bg-gray-300 overflow-hidden">
                    <svg className="w-full h-full text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                    </svg>
                  </div>
                  <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-full bg-gray-300 overflow-hidden">
                    <svg className="w-full h-full text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                    </svg>
                  </div>
                </div> */}

                {/* <p className="text-gray-600 text-base lg:text-lg mb-8 leading-relaxed">
                  Kami berkomitmen pada kualitas, inovasi, dan kepuasan pelanggan dalam setiap proyek pengaspalan.
                </p> */}

                {/* Large Image */}
                <div className="rounded-3xl overflow-hidden shadow-lg">
                  <div className="w-full h-64 lg:h-80 bg-gray-300 flex items-center justify-center">
                    <img src="/galery/4.jpeg" alt="" />
                  </div>
                </div>
              </div>

              {/* Right Side - Company Description and Stats */}
              <div>
                <p className="text-gray-600 text-base lg:text-lg mb-12 leading-relaxed">
                  Perusahaan kami mengkhususkan diri dalam memberikan layanan pengaspalan presisi yang disesuaikan untuk memenuhi kebutuhan beragam industri, dari jalan raya hingga area parkir dan perumahan.
                </p>

                {/* Statistics */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div>
                    <div className="text-5xl lg:text-6xl font-bold text-gray-900 mb-2">
                      50<span className="text-orange-400">+</span>
                    </div>
                    <p className="text-gray-600 text-sm lg:text-base">
                      Proyek pengaspalan berhasil diselesaikan
                    </p>
                  </div>
                  <div>
                    <div className="text-5xl lg:text-6xl font-bold text-gray-900 mb-2">
                      98<span className="text-orange-400">%</span>
                    </div>
                    <p className="text-gray-600 text-sm lg:text-base">
                      Tingkat kepuasan pelanggan di semua proyek
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Services Section */}
        <section id="layanan" className="bg-black py-16 lg:py-24 relative">
          <div className="container mx-auto px-6 lg:px-12">
            {/* Header with image and title */}
            <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12 mb-12 lg:mb-16">
              {/* Left side - Image */}
              <div className="w-full lg:w-1/3">
                <div className="rounded-3xl overflow-hidden shadow-lg">
                  <img 
                    src="/galery/2.jpeg" 
                    alt="Layanan Pengaspalan Profesional" 
                    className="w-full h-64 lg:h-80 object-cover"
                  />
                </div>
              </div>

              {/* Right side - Title and Services */}
              <div className="w-full lg:w-2/3">
                <div className="mb-8">
                  <div className="inline-block bg-orange-400 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                    Layanan Kami
                  </div>
                  <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                    Layanan Pengaspalan
                  </h2>
                  <h2 className="text-4xl lg:text-5xl font-bold text-white">
                    Terlengkap
                  </h2>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
                  {/* Hotmix Asphalt */}
                  <div className="text-white group hover:bg-gray-800 p-6 rounded-2xl transition-all duration-300 cursor-pointer">
                    <div className="mb-4">
                      <FaRoad className="text-3xl lg:text-4xl text-orange-400 group-hover:text-orange-300 transition-colors duration-300" />
                    </div>
                    <h3 className="text-xl lg:text-2xl font-bold mb-3">
                      Hotmix
                    </h3>
                    <h3 className="text-xl lg:text-2xl font-bold mb-4">
                      Aspal
                    </h3>
                    <p className="text-gray-300 text-sm lg:text-base leading-relaxed mb-4">
                      Pengaspalan berkualitas tinggi menggunakan teknologi hotmix terdepan untuk jalan raya, area komersial, dan infrastruktur publik dengan daya tahan maksimal.
                    </p>
                    <button className="bg-orange-400 hover:bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300">
                      Pelajari Lebih Lanjut
                    </button>
                  </div>

                  {/* Paving Block */}
                  <div className="text-white group hover:bg-gray-800 p-6 rounded-2xl transition-all duration-300 cursor-pointer">
                    <div className="mb-4">
                      <FaTh className="text-3xl lg:text-4xl text-orange-400 group-hover:text-orange-300 transition-colors duration-300" />
                    </div>
                    <h3 className="text-xl lg:text-2xl font-bold mb-3">
                      Paving
                    </h3>
                    <h3 className="text-xl lg:text-2xl font-bold mb-4">
                      Block
                    </h3>
                    <p className="text-gray-300 text-sm lg:text-base leading-relaxed mb-4">
                      Pemasangan paving block berkualitas premium untuk trotoar, area pedestrian, taman, dan zona pejalan kaki dengan berbagai pilihan warna dan motif.
                    </p>
                    <button className="bg-orange-400 hover:bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300">
                      Pelajari Lebih Lanjut
                    </button>
                  </div>

                  {/* Area Parkir */}
                  <div className="text-white group hover:bg-gray-800 p-6 rounded-2xl transition-all duration-300 cursor-pointer">
                    <div className="mb-4">
                      <FaCar className="text-3xl lg:text-4xl text-orange-400 group-hover:text-orange-300 transition-colors duration-300" />
                    </div>
                    <h3 className="text-xl lg:text-2xl font-bold mb-3">
                      Area
                    </h3>
                    <h3 className="text-xl lg:text-2xl font-bold mb-4">
                      Parkir
                    </h3>
                    <p className="text-gray-300 text-sm lg:text-base leading-relaxed mb-4">
                      Konstruksi dan renovasi area parkir dengan standar internasional, termasuk marking jalan, drainase, dan sistem keamanan yang terintegrasi.
                    </p>
                    <button className="bg-orange-400 hover:bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300">
                      Pelajari Lebih Lanjut
                    </button>
                  </div>

                  {/* Jalan Perumahan */}
                  <div className="text-white group hover:bg-gray-800 p-6 rounded-2xl transition-all duration-300 cursor-pointer">
                    <div className="mb-4">
                      <FaHome className="text-3xl lg:text-4xl text-orange-400 group-hover:text-orange-300 transition-colors duration-300" />
                    </div>
                    <h3 className="text-xl lg:text-2xl font-bold mb-3">
                      Jalan
                    </h3>
                    <h3 className="text-xl lg:text-2xl font-bold mb-4">
                      Perumahan
                    </h3>
                    <p className="text-gray-300 text-sm lg:text-base leading-relaxed mb-4">
                      Pengaspalan jalan perumahan dengan kualitas tahan lama, ramah lingkungan, dan disesuaikan dengan kebutuhan akses kendaraan residential.
                    </p>
                    <button className="bg-orange-400 hover:bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300">
                      Pelajari Lebih Lanjut
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className="flex justify-center lg:justify-start gap-4 mt-8">
              <button className="w-12 h-12 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors duration-300">
                <FaChevronLeft className="text-white text-lg" />
              </button>
              <button className="w-12 h-12 bg-white hover:bg-gray-100 rounded-full flex items-center justify-center transition-colors duration-300">
                <FaChevronRight className="text-black text-lg" />
              </button>
            </div>
          </div>
        </section>

        {/* Customer Stories Section */}
        <section id="testimoni" className="bg-gray-100 py-16 lg:py-24">
          <div className="container mx-auto px-6 lg:px-12">
            {/* Header */}
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12 lg:mb-16">
              <div className="mb-8 lg:mb-0">
                <h2 className="text-5xl lg:text-7xl font-bold text-black mb-2">
                  Testimoni
                </h2>
                <div className="flex items-center gap-4">
                  <h2 className="text-5xl lg:text-7xl font-bold text-gray-400">
                    Pelanggan
                  </h2>
                  <div className="bg-orange-400 text-white px-4 py-2 rounded-full text-sm font-medium transform rotate-12">
                    Testimoni
                  </div>
                </div>
              </div>
              
              <div className="text-right">
                <p className="text-gray-600 text-base lg:text-lg max-w-sm">
                  Mengenal Dampak Transformatif Layanan Pengaspalan Kami pada Pelanggan
                </p>
              </div>
            </div>

            {/* Customer Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
              {/* Budi Santoso Card */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg">
                <div className="relative">
                  <div className="w-full h-64 bg-gray-300 flex items-center justify-center">
                    <svg className="w-16 h-16 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                    </svg>
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                    <button className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center hover:bg-opacity-100 transition-all duration-300">
                      <FaPlay className="text-black text-xl ml-1" />
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-black mb-1">Budi Santoso,</h3>
                  <p className="text-gray-600 text-sm">Direktur PT Graha Indah</p>
                </div>
              </div>

              {/* Sari Dewi Card */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg">
                <div className="relative">
                  <div className="w-full h-64 bg-gray-300 flex items-center justify-center">
                    <svg className="w-16 h-16 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                    </svg>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-black mb-1">Sari Dewi,</h3>
                  <p className="text-gray-600 text-sm">Manajer Operasional</p>
                </div>
              </div>

              {/* Ahmad Rahman Card */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg">
                <div className="relative">
                  <div className="w-full h-64 bg-gray-300 flex items-center justify-center">
                    <svg className="w-16 h-16 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                    </svg>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-black mb-1">Ahmad Rahman,</h3>
                  <p className="text-gray-600 text-sm">Kontraktor Perumahan</p>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className="flex justify-center lg:justify-end gap-4">
              <button className="w-12 h-12 bg-gray-300 hover:bg-gray-400 rounded-full flex items-center justify-center transition-colors duration-300">
                <FaChevronLeft className="text-gray-600 text-lg" />
              </button>
              <button className="w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors duration-300">
                <FaChevronRight className="text-white text-lg" />
              </button>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="galeri" className="bg-white py-16 lg:py-24">
          <div className="container mx-auto px-6 lg:px-12">
            {/* Header */}
            <div className="text-center mb-12 lg:mb-16">
              <div className="inline-block bg-orange-400 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                Galeri Kegiatan
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Dokumentasi Proyek
              </h2>
              <h3 className="text-3xl lg:text-4xl font-light text-gray-400 mb-8">
                Pengaspalan Berkualitas
              </h3>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                Lihat dokumentasi lengkap dari berbagai proyek pengaspalan yang telah kami kerjakan dengan standar kualitas terbaik
              </p>
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((imageNumber) => (
                <div 
                  key={imageNumber}
                  className="overflow-hidden rounded-2xl shadow-lg"
                >
                  <img
                    src={`/galery/${imageNumber}.jpeg`}
                    alt={`Proyek Pengaspalan ${imageNumber}`}
                    className="w-full h-64 lg:h-72 object-cover"
                    onError={(e) => {
                      console.error(`Failed to load image: /galery/${imageNumber}.jpeg`);
                      e.currentTarget.src = '/paving.jpg'; // fallback image
                    }}
                  />
                </div>
              ))}
            </div>

            {/* View More Button */}
            <div className="text-center mt-12">
              <button className="btn btn-primary bg-blue-600 hover:bg-blue-700 border-blue-600 text-white px-8 py-3 rounded-full">
                Lihat Semua Proyek
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-100 py-16 lg:py-24 relative overflow-hidden">
          <div className="container mx-auto px-6 lg:px-12 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              {/* Left Side - Company Info */}
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold text-black mb-8">
                  Infrastruktur Berkualitas
                </h2>
                
                {/* Company Address */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-black mb-4">Alamat Kantor</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Jl. Babakanpari, Babakan Pari, Kec. Cidahu,<br />
                    Kabupaten Sukabumi, Jawa Barat 43358
                  </p>
                </div>

                {/* Contact Numbers */}
                <div className="mb-12">
                  <h3 className="text-xl font-bold text-black mb-4">Hubungi Kami</h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="text-gray-600">Warjo Sapaat:</span>
                      <a 
                        href="https://wa.me/6283179568780" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-700 font-medium"
                      >
                        0831-7956-8780
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-gray-600">Dimas Rangga Buana:</span>
                      <a 
                        href="https://wa.me/6283247981703" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-700 font-medium"
                      >
                        0832-4798-1703
                      </a>
                    </div>
                  </div>
                </div>
                
                {/* Navigation Links */}
                <nav className="mb-12">
                  <ul className="flex flex-wrap gap-8 text-gray-600">
                    <li><a href="#beranda" className="text-blue-600 font-medium hover:text-blue-700">Beranda</a></li>
                    <li><a href="#tentang" className="hover:text-black transition-colors">Tentang Kami</a></li>
                    <li><a href="#layanan" className="hover:text-black transition-colors">Layanan</a></li>
                    <li><a href="#galeri" className="hover:text-black transition-colors">Galeri</a></li>
                    <li><a href="#testimoni" className="hover:text-black transition-colors">Testimoni</a></li>
                  </ul>
                </nav>

                {/* Social Media Icons */}
                <div className="flex gap-4">
                  <a href="#" className="w-10 h-10 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors">
                    <FaFacebook className="text-white text-lg" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors">
                    <FaTwitter className="text-white text-lg" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors">
                    <FaInstagram className="text-white text-lg" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors">
                    <FaLinkedin className="text-white text-lg" />
                  </a>
                </div>
              </div>

              {/* Right Side - Newsletter */}
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold text-black mb-8">
                  Berlangganan newsletter kami
                </h3>
                
                <div className="flex gap-3">
                  <input 
                    type="email" 
                    placeholder="Masukkan email Anda"
                    className="flex-1 px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:border-blue-600 text-gray-700"
                  />
                  <button className="w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors duration-300">
                    <FaChevronRight className="text-white text-lg" />
                  </button>
                </div>
              </div>
            </div>

            {/* Footer Bottom */}
            <div className="border-t border-gray-300 mt-16 pt-8">
              <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
                <p className="text-gray-600 text-sm">
                  © Hak Cipta 2024, Semua Hak Dilindungi
                </p>
                <div className="flex gap-6 text-sm text-gray-600">
                  <a href="#" className="hover:text-black transition-colors">Kebijakan Privasi</a>
                  <a href="#" className="hover:text-black transition-colors">Syarat & Ketentuan</a>
                  <a href="#" className="hover:text-black transition-colors">Dukungan</a>
                </div>
              </div>
            </div>
          </div>

          {/* Background Text */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <h1 className="text-[12rem] lg:text-[20rem] font-bold text-gray-200 opacity-30 select-none">
              PENGASPALAN
            </h1>
          </div>
        </footer>
      </main>
    </div>
  )
}
