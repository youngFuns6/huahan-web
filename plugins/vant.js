import Vue from 'vue'

import Pagination from 'vant/lib/pagination'
// import Popup from 'vant/lib/popup'
// import { Popup } from 'vant';
import Icon from 'vant/lib/icon'

import Dialog from 'vant/lib/dialog'
import DropdownMenu from 'vant/lib/dropdown-menu'
import DropdownItem from 'vant/lib/dropdown-item'
import List from 'vant/lib/list'
import Cell from 'vant/lib/cell'
// import Lazyload from 'vant/lib/lazyload'

Vue.use(Pagination)
// Vue.use(Popup)
Vue.use(Icon)
Vue.use(Dialog)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(List)
Vue.use(Cell)
// Vue.use(Lazyload)

Vue.prototype.$dia = Dialog