function Navbar() {
  return (
    <>
<section className="relative w-full px-8 text-gray-700 bg-white body-font">
    <div className="container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl">
        <a href="#_" className="relative z-10 flex items-center w-auto text-2xl font-extrabold leading-none text-black select-none">G@llisDev</a>

        <nav className="top-0 left-0 z-0 flex items-center justify-center w-full h-full py-5 -ml-0 space-x-5 text-base md:-ml-5 md:py-0 md:absolute">
            <a href="#_" className="relative font-semibold leading-6 text-gray-600 transition duration-150 ease-out hover:text-gray-900">
                <span className="block">Accueil</span>
            </a>
            <a href="#_" className="relative font-semibold leading-6 text-gray-600 transition duration-150 ease-out hover:text-gray-900">
                <span className="block">Mes Services</span>
            </a>
            <a href="#_" className="relative font-semibold leading-6 text-gray-600 transition duration-150 ease-out hover:text-gray-900">
                <span className="block">Mes Compétences</span>
            </a>
            <a href="#_" className="relative font-semibold leading-6 text-gray-600 transition duration-150 ease-out hover:text-gray-900">
                <span className="block">Mes Projets</span>
            </a>
        </nav>
        </div>
      </section>

    </>
  )
}

export default Navbar