import Benefit from "./components/Benefit";
import Challenge from "./components/Challenge";
import Hero from "./components/Hero";
import Scholarship from "./components/Scholarship";
import Transform from "./components/Transform";




export default function Home(){
  return(
    <main>
     <Hero/>
     <Scholarship/>
        <div className=" bg-[url('/images/color.png')] bg-cover bg-center">
          <Challenge />
          <Benefit />
        </div>
      <Transform />
    </main>
  )

}
