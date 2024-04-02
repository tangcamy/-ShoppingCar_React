
import { ReactComponent as Plus } from '../../../icons/plus.svg'
import { ReactComponent as Minus } from '../../../icons/minus.svg'
import styles from "./Car.module.css"
import {data} from './data.js' 

// grid-cols-1 border m-2 rounded-sm p-2 sm:grid-rows-13
// border m-2 rounded-sm p-1
function Car(){
  const products = data.map(product=>
    <div class=" grid grid-cols-3" key={product.id}>
      <img id="listImg" class={styles.imgFort} src={product.img}></img>
      <div class="Items">
        <div class="listInfo ">
          <label id="itemName" class="block text-sm m-2 text-center">{product.name}</label>
        </div>
        <div class="ListCounts flex m-2">
          <Minus class="fill-black pl-1 m-2"/>
          <value id="itemCounts" class="m-2 text-center">{product.quantity}</value>
          <Plus class="fill-black pl-1 m-2"/>
        </div>
      </div>
      <label id="itemPrice" class="block text-sm m-2 text-right">${product.price}</label>
    </div>
    )
  return(
    <div class="grid-cols-1 border  m-2 rounded-md p-2 sm:grid-rows-13">
      <div class="m-2"> 
        <h1 class="text-2xl text-stone-700">購物車</h1>
        <section id="shoppingList" class="m-2 h-96">
          {products}
        </section>

        <div class="m-2">
          <div id="line" class="border border-slate-100 opacity-1 m-2"></div>
          <div class="grid grid-cols-2 m-3">
            <label class="text-xs text-left w-50">運費</label>
            <label class="text-xs text-right w-50">免運</label>
          </div>

          <div id="line" class="border border-slate-100 opacity-1 m-2"></div>
          <div class="grid grid-cols-2 m-3">
            <label class="text-xs text-left w-50">小記</label>
            <value class="text-xs text-right w-50">$3,999</value>
          </div>
        </div>

      </div>
    </div>
  )
}


export default Car