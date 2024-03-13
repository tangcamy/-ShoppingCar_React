
import { ReactComponent as Logo } from '../../../icons/logo.svg'
import styles from "./Checkout.module.css"
import Step1 from './Step1.js'
import Step2 from './Step2.js'
import Step3 from './Step3.js'
import ProcessControl from './ProcessControl.js'

// {`${styles.circleContainer} ${styles.step}`}
// {`${styles.progressBar} ${styles.progressBarActive}`}

function Checkout(){
  //  const step = 0
  return(
    <div class="grid grid-cols-1 m-2 border rounded-md p-2 sm:grid-rows-13">
      <div>
        <h1 class="mt-2 text-2xl text-stone-700 ml-3 row-start-1">結帳</h1>
      </div>

      <div id="stepProcess" class="flex mt-5 justify-center row-start-2"> 
        <div class={styles.step}>
          {/* 狀態待改變 */}
          <div class={styles.circleChecked}></div>
          <div class={styles.circleContainer}>1</div>
          <span id={styles['item']} class="ml-2">寄送地址</span>
          <span className={styles.progressBarActive} data-order="1"></span>
          {/* <span className={(step < 1) ? styles.progressBar : styles.progressBarActive} data-order="1"></span> */}
        </div>

        <div class={styles.step}>
          <div class={styles.circleContainer}>2</div>
          <span id={styles['item']} class="ml-2">運送地址</span>
          <span className={styles.progressBar}  data-order="2"></span>
        </div>

        <div class={styles.step}>
          <div class={styles.circleContainer}>3</div>
          <span id={styles['item']} class="ml-2">付款資訊</span>

        </div>
      </div>

      <div id="selectForm" class="mt-5 row-start-3">
        <div id="FormOne" > <Step1 /></div>
        {/* <div id="FormTwo" > <Step2 /></div> */}
        {/* <div id="FormThree" > <Step3 /></div> */}
      </div>

      <div id="nextStep" class="mt-5">
        <ProcessControl/>
      </div>

    </div>
  )
}
export default Checkout

