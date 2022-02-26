import  {FaHtml5,FaMobile,FaLaptop} from 'react-icons/fa'
import {SiJavascript,SiFlutter,SiIonic,SiMongodb,SiRedis,SiMysql,SiDocker,SiKubernetes} from 'react-icons/si'
import {FaReact,FaAngular,FaLaravel,FaNodeJs} from 'react-icons/fa'
import {motion} from 'framer-motion'
function Header() {

  const skillvariant = {
    init: {
      x:-1000,
      opacity: 0
    },
    anime: {
      x:0,
      opacity: 1,
      transition:{ type: 'spring',delay:1 }
    }
  }

  return (
    <>
<section className="px-2 py-10 md:py-32 bg-white md:px-0">
  <div className="container items-center max-w-6xl px-8 mx-auto xl:px-5">
    <div className="flex flex-col-reverse md:flex-row items-center sm:-mx-3">
      <div className="w-full md:w-1/2 md:px-3">
        <div className="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
            <span className="block xl:inline text-3xl">Salut ! Je suis Gallis</span> <br />
            <span className="block text-indigo-600 xl:inline">Développeur web Freelance</span>
          </h1>
          <p className="mx-auto text-base text-gray-700 font-semibold sm:max-w-md lg:text-xl md:max-w-3xl"> je suis développeur Full-Stack avec une bonne expérience dans le développement web et mobiles et les applications multiplateforme.</p>
          <div className="relative flex flex-col sm:flex-row sm:space-x-4">
            <a href="#_" className="flex items-center justify-center px-6 py-3 font-semibold text-white bg-indigo-600 rounded-md hover:bg-indigo-900 hover:text-white">
              CONTACTEZ MOI
            </a>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2">
        <div className="w-full h-auto overflow-hidden flex items-center justify-center">
            <img src="/profile.jpg" className="rounded-full w-60 h-60 md:w-96 md:h-96 object-cover" alt="profile_image"/>
          </div>
      </div>
    </div>
  </div>
</section>

<section className="py-20 bg-gray-50">
  <div className="container text-center max-w-6xl px-4 mx-auto sm:px-20 md:px-32 lg:px-16">
  <h2 className="mb-8 text-4xl font-extrabold tracking-tight text-indigo-600 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">MES SERVICES</h2>
    <div className="flex flex-col md:flex-row space-y-2 items-center md:space-x-2">
    <motion.div whileHover={{scale:1.1}} className="bg-white font-semibold text-center rounded-3xl border shadow-lg p-10 max-w-xs">
     <div className="mb-3 w-32 h-32 rounded-full shadow-lg mx-auto flex items-center justify-center">
       <FaHtml5 className="w-24 h-24 text-indigo-500" />
      </div>
     <h1 className="text-lg text-gray-700"> APPLICATION WEB </h1>
     <p className="text-sm text-gray-600 mt-4"> Des applications web responsives et réactives pour élargir vos activités sur le web</p>
     <button className="bg-indigo-600 px-8 py-2 mt-8 rounded-3xl text-gray-100 font-semibold uppercase tracking-wide">Engager Moi</button>
   </motion.div>
   <motion.div whileHover={{scale:1.1}} className="bg-white font-semibold text-center rounded-3xl border shadow-lg p-10 max-w-xs">
   <div className="mb-3 w-32 h-32 rounded-full shadow-lg mx-auto flex items-center justify-center">
       <FaMobile className="w-24 h-24 text-indigo-500" />
      </div>
     <h1 className="text-lg text-gray-700"> APPLICATION MOBILE </h1>
     <p className="text-sm text-gray-600 mt-4"> Des applications mobiles trés jolies pour votre startup afin d'améliorer votre bussness</p>
     <button className="bg-indigo-600 px-8 py-2 mt-8 rounded-3xl text-gray-100 font-semibold uppercase tracking-wide">Engager Moi</button>
   </motion.div>
   <motion.div whileHover={{scale:1.1}} className="bg-white font-semibold text-center rounded-3xl border shadow-lg p-10 max-w-xs">
   <div className="mb-3 w-32 h-32 rounded-full shadow-lg mx-auto flex items-center justify-center">
       <FaLaptop className="w-24 h-24 text-indigo-500" />
      </div>
     <h1 className="text-lg text-gray-700"> APPLICATION DESKTOP </h1>
     <p className="text-sm text-gray-600 mt-4">D'élégants et réactifs logiciels de gestion des biens ou services de votre entreprise</p>
     <button className="bg-indigo-600 px-8 py-2 mt-8 rounded-3xl text-gray-100 font-semibold uppercase tracking-wide">Engager Moi</button>
   </motion.div>
    </div>
  </div>
</section>


<section className="py-20 bg-gray-50">
  <div className="container text-center max-w-6xl px-4 mx-auto sm:px-20 md:px-32 lg:px-16">
  <h2 className="mb-8 text-4xl font-extrabold tracking-tight text-indigo-600 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">MES COMPETENCES</h2>
    <div className="flex flex-col space-y-2 items-center w-full">
     <div className="flex flex-col md:flex-row space-y-2 w-full md:space-x-2">

     <motion.div variant={skillvariant} initial="init" animate="anime" className="bg-white font-semibold flex flex-col rounded-3xl border shadow-lg p-5 w-full">
    <h2 className="mb-2 text-2xl font-extrabold tracking-tight sm:text-3xl md:text-2xl text-indigo-600 lg:text-3xl xl:text-3xl">&#60;<span className="text-black">WEB</span>/&#62;</h2>
      <div className="flex flex-col w-full px-5 items-center space-y-2">
      <div className="w-full flex items-center space-x-2">
      <SiJavascript className="w-12 h-12 rounded-md text-yellow-500" />
      <div className="flex flex-col items-center space-y-2 w-full my-2">
      <h1 className="text-lg text-gray-700"> JAVASCRIPT </h1>
        <div className="w-full bg-gray-200 rounded-full">
      <div className="bg-yellow-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-l-full" style={{width: '90%'}}> 90%</div>
      </div>
      </div>
      
      </div>
      <div className="w-full flex items-center space-x-2">
      <FaReact className="w-12 h-12 rounded-md text-blue-500" />
      <div className="flex flex-col items-center space-y-2 w-full my-2">
      <h1 className="text-lg text-gray-700"> REACT </h1>
      <div className="w-full bg-gray-200 rounded-full">
      <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-l-full" style={{width: '80%'}}> 80%</div>
      </div>
       </div>
      </div>
      <div className="w-full flex items-center space-x-2 my-2">
      <FaAngular className="w-12 h-12 rounded-md text-red-500" />
      <div className="flex flex-col items-center space-y-2 w-full">
      <h1 className="text-lg text-gray-700"> ANGULAR </h1>
      <div className="w-full bg-gray-200 rounded-full">
      <div className="bg-red-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-l-full" style={{width: '85%'}}> 85%</div>
      </div>
      </div>
      </div>
      <div className="w-full flex items-center space-x-2 my-2">
      <FaLaravel  className="w-12 h-12 rounded-md text-yellow-600" />
      <div className="flex flex-col items-center space-y-2 w-full">
      <h1 className="text-lg text-gray-700"> LARAVEL </h1>
      <div className="w-full bg-gray-200 rounded-full">
      <div className="bg-yellow-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-l-full" style={{width: '90%'}}> 90%</div>
      </div>
      </div>
      </div>
      <div className="w-full flex items-center space-x-2 my-2">
      <FaNodeJs className="w-12 h-12 rounded-md text-green-500" />
      <div className="flex flex-col items-center space-y-2 w-full">
      <h1 className="text-lg text-gray-700"> NODE JS </h1>
      <div className="w-full bg-gray-200 rounded-full">
      <div className="bg-green-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-l-full" style={{width: '80%'}}> 80%</div>
      </div>
      </div>
      </div>
      </div>
   </motion.div>
   <div className="bg-white font-semibold flex flex-col rounded-3xl border shadow-lg p-5 w-full">
    <h2 className="mb-2 text-2xl font-extrabold tracking-tight sm:text-3xl md:text-2xl text-indigo-600 lg:text-3xl xl:text-3xl">&#60;<span className="text-black">MOBILE</span>/&#62;</h2>
      <div className="flex flex-col w-full px-5 items-center space-y-2">
      <div className="w-full flex items-center space-x-2">
      <SiFlutter className="w-12 h-12 rounded-md text-blue-500" />
      <div className="flex flex-col items-center space-y-2 w-full my-2">
      <h1 className="text-lg text-gray-700"> FLUTTER </h1>
        <div className="w-full bg-gray-200 rounded-full">
      <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-l-full" style={{width: '85%'}}> 85%</div>
      </div>
      </div>
      
      </div>
      <div className="w-full flex items-center space-x-2">
      <SiIonic className="w-12 h-12 rounded-md text-blue-500" />
      <div className="flex flex-col items-center space-y-2 w-full my-2">
      <h1 className="text-lg text-gray-700"> IONIC </h1>
      <div className="w-full bg-gray-200 rounded-full">
      <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-l-full" style={{width: '90%'}}> 90%</div>
      </div>
       </div>
      </div>
      </div>
   </div>
   </div>
   <div className="flex flex-col md:flex-row space-y-2 w-full md:space-x-2">
   <div className="bg-white font-semibold flex flex-col rounded-3xl border shadow-lg p-5 w-full">
    <h2 className="mb-2 text-2xl font-extrabold tracking-tight sm:text-3xl md:text-2xl text-indigo-600 lg:text-3xl xl:text-3xl">&#60;<span className="text-black">DESKTOP</span>/&#62;</h2>
      <div className="flex flex-col w-full px-5 items-center space-y-2">
      <div className="w-full flex items-center space-x-2">
      <SiFlutter className="w-12 h-12 rounded-md text-blue-500" />
      <div className="flex flex-col items-center space-y-2 w-full my-2">
      <h1 className="text-lg text-gray-700"> FLUTTER </h1>
        <div className="w-full bg-gray-200 rounded-full">
      <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-l-full" style={{width: '85%'}}> 85%</div>
      </div>
      </div>
      
      </div>
      <div className="w-full flex items-center space-x-2">
      <SiIonic className="w-12 h-12 rounded-md text-green-500" />
      <div className="flex flex-col items-center space-y-2 w-full my-2">
      <h1 className="text-lg text-gray-700"> ELECTRON JS </h1>
      <div className="w-full bg-gray-200 rounded-full">
      <div className="bg-green-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-l-full" style={{width: '90%'}}> 90%</div>
      </div>
       </div>
      </div>
      </div>
   </div>
   <div className="bg-white font-semibold flex flex-col rounded-3xl border shadow-lg p-5 w-full">
    <h2 className="mb-2 text-2xl font-extrabold tracking-tight sm:text-3xl md:text-2xl text-indigo-600 lg:text-3xl xl:text-3xl">&#60;<span className="text-black">DATABASE</span>/&#62;</h2>
      <div className="flex flex-col w-full px-5 items-center space-y-2">
      <div className="w-full flex items-center space-x-2">
      <SiMongodb className="w-12 h-12 rounded-md text-green-500" />
      <div className="flex flex-col items-center space-y-2 w-full my-2">
      <h1 className="text-lg text-gray-700"> MONGODB </h1>
        <div className="w-full bg-gray-200 rounded-full">
      <div className="bg-green-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-l-full" style={{width: '95%'}}> 95%</div>
      </div>
      </div>
      
      </div>
      <div className="w-full flex items-center space-x-2">
      <SiRedis className="w-12 h-12 rounded-md text-red-500" />
      <div className="flex flex-col items-center space-y-2 w-full my-2">
      <h1 className="text-lg text-gray-700">REDIS</h1>
      <div className="w-full bg-gray-200 rounded-full">
      <div className="bg-red-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-l-full" style={{width: '90%'}}> 90%</div>
      </div>
       </div>
      </div>
      <div className="w-full flex items-center space-x-2">
      <SiMysql className="w-12 h-12 rounded-md text-yellow-500" />
      <div className="flex flex-col items-center space-y-2 w-full my-2">
      <h1 className="text-lg text-gray-700">MYSQL</h1>
      <div className="w-full bg-gray-200 rounded-full">
      <div className="bg-yellow-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-l-full" style={{width: '95%'}}> 95%</div>
      </div>
       </div>
      </div>
      </div>
   </div>
   </div>
   <div className="bg-white font-semibold flex flex-col rounded-3xl border shadow-lg p-5 w-full">
    <h2 className="mb-2 text-2xl font-extrabold tracking-tight sm:text-3xl md:text-2xl text-indigo-600 lg:text-3xl xl:text-3xl">&#60;<span className="text-black">DEVOOPS</span>/&#62;</h2>
      <div className="flex flex-col w-full px-5 items-center space-y-2">
      <div className="w-full flex items-center space-x-2">
      <SiDocker className="w-12 h-12 rounded-md text-blue-500" />
      <div className="flex flex-col items-center space-y-2 w-full my-2">
      <h1 className="text-lg text-gray-700"> DOCKER </h1>
        <div className="w-full bg-gray-200 rounded-full">
      <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-l-full" style={{width: '75%'}}> 75%</div>
      </div>
      </div>
      
      </div>
      <div className="w-full flex items-center space-x-2">
      <SiKubernetes className="w-12 h-12 rounded-md text-indigo-500" />
      <div className="flex flex-col items-center space-y-2 w-full my-2">
      <h1 className="text-lg text-gray-700">KUBERNETES</h1>
      <div className="w-full bg-gray-200 rounded-full">
      <div className="bg-indigo-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-l-full" style={{width: '65%'}}> 65%</div>
      </div>
       </div>
      </div>
      </div>
   </div>
    </div>
  </div>
</section>
<section className="py-20 bg-gray-50">
  <div className="container text-center max-w-6xl px-4 mx-auto sm:px-20 md:px-32 lg:px-16">
  <h2 className="mb-8 text-4xl font-extrabold tracking-tight text-indigo-600 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">MES PROJETS</h2>
    <div className="flex flex-col md:flex-row space-y-2 items-center md:space-x-2">
   
<div className="flex justify-center">
  <div className="rounded-lg shadow-lg bg-white max-w-sm">
    <a href="https://esteticappi.netlify.app" data-mdb-ripple="true" data-mdb-ripple-color="light">
      <img className="rounded-t-lg" src="/ck.PNG" alt="ckesthitik"/>
    </a>
    <div className="p-6">
      <a href="https://esteticappi.netlify.app" type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">VISITER</a>
    </div>
  </div>
</div>
<div className="flex justify-center">
  <div className="rounded-lg shadow-lg bg-white max-w-sm">
    <a href="https://fitnessvert.com/" data-mdb-ripple="true" data-mdb-ripple-color="light">
      <img className="rounded-t-lg" src="/fitnessvert.PNG" alt="fitnessvert"/>
    </a>
    <div className="p-6">
      <a href="https://fitnessvert.com/" type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">VISITER</a>
    </div>
  </div>
</div>
<div className="flex justify-center">
  <div className="rounded-lg shadow-lg bg-white max-w-sm">
    <a href="https://absatravel.netlify.app" data-mdb-ripple="true" data-mdb-ripple-color="light">
      <img className="rounded-t-lg" src="/absa.PNG" alt="absatravel"/>
    </a>
    <div className="p-6">
      <a href="https://absatravel.netlify.app" type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">VISITER</a>
    </div>
  </div>
</div>

    </div>
  </div>
</section>
<section className="bg-white">
    <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
        <nav className="flex flex-wrap justify-center -mx-5 -my-2">
            <div className="px-5 py-2">
                <a href="/" className="text-base leading-6 text-gray-500 hover:text-gray-900">
                    Accueil
                </a>
            </div>
            <div className="px-5 py-2">
                <a href="/" className="text-base leading-6 text-gray-500 hover:text-gray-900">
                    Mes Services
                </a>
            </div>
            <div className="px-5 py-2">
                <a href="/" className="text-base leading-6 text-gray-500 hover:text-gray-900">
                    Mes Compétences
                </a>
            </div>
            <div className="px-5 py-2">
                <a href="/" className="text-base leading-6 text-gray-500 hover:text-gray-900">
                    Mes Projets
                </a>
            </div>
        </nav>
        <div className="flex justify-center mt-8 space-x-6">
            <a href="/" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">GitHub</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                </svg>
            </a>
            <a href="/" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">Dribbble</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd"></path>
                </svg>
            </a>
        </div>
    </div>
</section>

    </>
  )
}

export default Header