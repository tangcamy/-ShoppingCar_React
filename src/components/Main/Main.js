import Checkout from "./Checkout/Checkout.js";
import Car from "./Car/Car.js";
import styles from "./Main.module.css"

function Main(){
  return (
    <main class="mt-10 my-10 px-6"> 
      {/* <div id={styles['container']} class="grid grid-flow-col grid-columns-5 gap-2 grid-wrap h-full">
        <Checkout  class="col-span-2"/>
        <Car class="col-span-3"/>
      </div> */}
      <div id={styles['container']} class="grid grid-flow-col grid-cols-1">
        <Checkout />
        <Car/>
      </div>

    </main>
  )
}

export default Main;

