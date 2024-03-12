
import { ReactComponent as RightArrow } from '../../../icons/right-arrow.svg'
import { ReactComponent as LeftArrow } from '../../../icons/left-arrow.svg'

function ProcessControl(){
  return(
    <div class="mt-5 ">
      <div id="line" class="border border-slate-200 opacity-1 m-2"></div>
      <div class="grid grid-cols-1 gap-4 mt-5">
        <div class="col-start-1">
           <div class="flex max-w-24 rounded-lg ">
            {/* hidden or disabled */}
            <LeftArrow class="fill-black pl-1"/>
            <button id="upStep" class="btn-up text-black font-medium pl-2 pr-2">上一步</button>
           </div>
        </div>

        <div class="col-start-4">
          <div class="flex items-end bg-[#F67599] max-w-24 rounded-lg ">
            <button id="nextStep" class="btn-next text-white font-medium pl-2 pr-2">下一步</button>
            <RightArrow class="fill-slate-100 pr-1"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProcessControl