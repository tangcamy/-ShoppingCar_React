// import styles from "./Step2.module.css"
function Step3(){
  return(
    <form id="payment" class="mt-5">
      <h3 class="font-bold ml-10">付款資訊</h3>
      <div id="paymentBody" class="mt-5 h-80">

        <div id="input1" class="ml-10 mt-5 grid grid-cols-1 gap-x-4 gap-y-2 sm:grid-cols-6 ">
          <div class="sm:col-span-3 sm:col-start-1">
             <label class="block text-sm font-medium leading-6 text-gray-900"> 持卡人名字</label>
              <input name="carName" id="name" placeholder="Camy Tang" class="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-3"/>
          </div>
        </div>

        <div id="input2" class="ml-10 mt-5 grid grid-cols-1 gap-x-4 gap-y-2 sm:grid-cols-6 ">
          <div class="sm:col-span-3 sm:col-start-1">
             <label class="block text-sm font-medium leading-6 text-gray-900"> 卡號</label>
              <input name="carNumber" id="name" placeholder="xxxx xxxx xxxx xxxx" class="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-3"/>
          </div>
        </div>

        <div id="input3" class="ml-10 mt-5 grid grid-cols-1 gap-x-4 gap-y-2 sm:grid-cols-4">
          <div class="sm:col-span-2">
            <label class="block text-sm font-medium leading-6 text-gray-900">有效期限</label>
            <div class="mt-2">
              <input type="text" name="CarDueDate" id="CarDueDate" placeholder=" MM / YY " class="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-3"/>
            </div>
          </div>

          <div class="sm:col-span-2">
            <label class="block text-sm font-medium leading-6 text-gray-900">CVC / CCV</label>
            <div class="mt-2">
              <input type="text" name="CarSecurity" id="CarSecurity" placeholder="123" class="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-3"/>
            </div>
          </div>
        </div>




      </div>
    </form>
  )
}

export default Step3