// ReactComponent 套件引入svg 照片
import { ReactComponent as Logo } from '../../icons/logo.svg'
import { ReactComponent as Cart } from '../../icons/cart.svg'
import { ReactComponent as Search } from '../../icons/search.svg'
import { ReactComponent as Sun } from '../../icons/sun.svg'
import { ReactComponent as Moon } from '../../icons/moon.svg'


function Header() {
  return (
    <nav class="relative flex w-full flex-wrap items-center justify-between shadow-lg py-2 px-10 hover:text-neutral-700">
      <div>
        <a class ="mx-2" href="/page/1">男款</a>
        <a class ="mx-2" href="/page/2">女款</a>
        <a class ="mx-2" href="/page/3">最新消息</a>
        <a class="mx-2" href="/page/4">客製商品</a>
        <a class="mx-2" href="/page/5">聯絡我們</a>
      </div>
      <div>
        <Logo />
      </div>
      <div class="flex ">
        <button id="search"><Search class="mx-2"/></button>
        <button id="Cart"><Cart class="mx-2"/></button>
        <button id="Moon"><Moon class="mx-2"/></button>
        <button id="Sun"><Sun class="mx-2"/></button>
      </div>
    </nav>
  )
}

export default Header;

