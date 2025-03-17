import FooterApp from "./_components/footer-app";
import HeadingPage from "./_components/heading";
import { HeroScroll } from "./_components/hero-page";

export default async function Home() {

  
  return (
    <div className="flex w-full h-screen flex-col">
       <div className="w-full h-sceen flex"> 
       <HeadingPage/>

      </div>
      <div className="w-full h-sceen flex items-center justify-center"> 
              <HeroScroll/>

      </div>
      <div className="w-full h-sceen flex items-center justify-center">
        <FooterApp/>
        </div>
    </div>
  );
}
