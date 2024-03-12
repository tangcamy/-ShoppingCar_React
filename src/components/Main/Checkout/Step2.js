import styles from "./Step2.module.css"
function Step2(){
  return(
    <form id="deliveryWay" class="mt-5">
      <h3 class="font-bold ml-10">運送方式</h3>
      <div id="deliveryBody" class="mt-5">
        <section id="Delivery" class="ml-10 mr-10 h-60">
          {/* {`${styles.circleContainer} ${styles.step}`} */}
          <div id="selectDeliver" class={`${styles.selectDelivery} ${styles.select}`}> 
            <div class="grid grid-cols-1 gap-x-4 gap-y-2 sm:grid-cols-4 mt-2 mb-2">
              <input name="standard" type="radio" value="standard"class={styles.inputStyle} />
              <div class="Items sm:col-span-2">
                <div class="listInfo">
                  <label id="itemName" class="block text-sm">標準運送</label>
                </div>
                <div class="ListCounts">
                  <label class="text-xs">約3~7個工作天</label>       
                </div>
              </div>
              <label class="text-right text-xs p-1">免運</label>
            </div>
          </div>

          <div id="line" class="border border-slate-100 opacity-1 m-2"></div>

        <div id="selectDeliver" class={styles.select} > 
          <div class="grid grid-cols-1 gap-x-4 gap-y-2 sm:grid-cols-4 mt-2 mb-2">
            <input name="standard" type="radio" value="standard"class={styles.inputStyle} />
            <div class="Items sm:col-span-2">
              <div class="listInfo">
                <label id="itemName" class="block text-sm font-bold">DHL 貨運</label>
              </div>
              <div class="ListCounts">
                <label class="text-xs">48小時內送達</label>       
              </div>
            </div>
              <label class="text-right text-xs p-1">＄500</label>
            </div>
          </div>
        </section>
      </div>
    </form>
  )
}

export default Step2