
import styles from "./Step1.module.css"
function Step1(){
  return(
    <form id="address" class="mt-5">
      <h3 class="font-bold">寄送地址</h3>
      <div id="addressBody" class="mt-5 ">
        <div id="input1" class="mt-5 grid grid-cols-1 gap-x-4 gap-y-2 sm:grid-cols-6">
          <div class="sm:col-span-2 sm:col-start-1">
            <label class="block text-sm font-medium leading-6 text-gray-900">職稱</label>   
              <select class="block w-full rounded-md border-0 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-3">  
                <option value="mr">先生</option>
                <option value="ms">女士</option>
                <option value="mx">不明</option>
              </select>
          </div>
          <div class="sm:col-span-4">
            <label class="block text-sm font-medium leading-6 text-gray-900"> 姓名</label>
              <input name="name" id="name" placeholder="請輸入姓名" class="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-3"/>
          </div>  
        </div>


        <div id="input2" class="mt-5 grid grid-cols-1 gap-x-4 gap-y-2 sm:grid-cols-4">
          <div class="sm:col-span-2">
            <label class="block text-sm font-medium leading-6 text-gray-900"> 電話</label>
            <div class="mt-2">
              <input type="text" name="phone" id="phone" placeholder="請輸入電話" class="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-3"/>
            </div>
          </div>

          <div class="sm:col-span-2">
            <label class="block text-sm font-medium leading-6 text-gray-900"> E-mail</label>
            <div class="mt-2">
              <input type="text" name="email" id="email" placeholder="請輸入信箱" class="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-3"/>
            </div>
          </div>
        </div>


        <div id="input3" class="mt-5 grid grid-cols-1 gap-x-4 gap-y-2 sm:grid-cols-6">
          <div class="sm:col-span-2 sm:col-start-1">
            <label class="block text-sm font-medium leading-6 text-gray-900">縣市</label>   
              <select class="block w-full rounded-md border-0 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-3">  
                <option value="">請選擇縣市</option>
                <option value="KLU">基隆市</option>
                <option value="TPH">新北市</option>
                <option value="TPE">臺北市</option>
                <option value="TYC">桃園市</option>
                <option value="HSH">新竹縣</option>
                <option value="HSC">新竹市</option>
                <option value="MAC">苗栗市</option>
                <option value="MAL">苗栗縣</option>
                <option value="TXG">臺中市</option>
                <option value="CWH">彰化縣</option>
                <option value="CWS">彰化市</option>
                <option value="NTC">南投市</option>
                <option value="NTO">南投縣</option>
                <option value="YLH">雲林縣</option>
                <option value="CHY">嘉義縣</option>
                <option value="CYI">嘉義市</option>
                <option value="TNN">臺南市</option>
                <option value="KHH">高雄市</option>
                <option value="IUH">屏東縣</option>
                <option value="PTS">屏東市</option>
                <option value="ILN">宜蘭縣</option>
                <option value="ILC">宜蘭市</option>
                <option value="HWA">花蓮縣</option>
                <option value="HWC">花蓮市</option>
                <option value="TTC">臺東市</option>
                <option value="TTT">臺東縣</option>
                <option value="PEH">澎湖縣</option>
                <option value="KMN">金門縣</option>
                <option value="LNN">連江縣</option>
              </select>
          </div>
          <div class="sm:col-span-4">
            <label class="block text-sm font-medium leading-6 text-gray-900">地址</label>
              <input name="address" id="address" placeholder="請輸入地址" class="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-3"/>
          </div>  
        </div>
      </div>
    </form>
  )
}

export default Step1