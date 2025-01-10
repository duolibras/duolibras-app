import Image from 'next/image';

export const HeroSection = () => {
 return (
   <div className="container mx-auto px-6 py-24 text-center text-white flex flex-col items-center">
     <h1 className="sr-only">DuoLibras</h1>
     <Image 
       src="/images/logo.svg" 
       alt="DuoLibras Logo" 
       width={400} 
       height={120} 
     />
     <p className="text-2xl mt-6 mb-12">
       Aprenda Libras de forma divertida e acessível
     </p>
     <button className="bg-gradient-to-r from-cyan-500 to-cyan-700 px-8 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition-opacity">
       Matricule-se agora →
     </button>
     <div className="mt-8 flex justify-center space-x-4">
       <span className="bg-pink-100 text-pink-800 px-4 py-2 rounded-full text-sm">
         FAQ
       </span>
       <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm">
         +100 depoimentos
       </span>
     </div>
   </div>
 );
};
