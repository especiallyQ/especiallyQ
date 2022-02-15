import Vue from 'vue'
import App from './App.vue'
import 'element-ui/lib/theme-chalk/index.css';
import { Header, Main, Container, Menu, MenuItem, Carousel, CarouselItem, Row, Card, Footer, Collapse, CollapseItem, Dialog, Button, Breadcrumb, BreadcrumbItem, Input, Divider, Form, FormItem, Dropdown, DropdownItem, DropdownMenu, Pagination, Descriptions, DescriptionsItem, Tag, Select, Option, Empty } from 'element-ui'
import router from './router/index'
import resetMessage from './resetMessage'
import axios from './http'
import store from './store/index'
import 'default-passive-events'
import VueLazyload from 'vue-lazyload'
Vue.prototype.$axios = axios
Vue.config.productionTip = false
Vue.prototype.$message = resetMessage
Vue.use(VueLazyload, {
  preLoad: 1.3,
  loading: require('./assets/Loading.png'),
  attempt: 1
})
Vue.use(Header)
Vue.use(Main)
Vue.use(Container)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(Row)
Vue.use(Card)
Vue.use(Footer)
Vue.use(Collapse)
Vue.use(CollapseItem)
Vue.use(Dialog)
Vue.use(Button)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Input)
Vue.use(Divider)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Dropdown)
Vue.use(DropdownItem)
Vue.use(DropdownMenu)
Vue.use(Pagination)
Vue.use(Descriptions)
Vue.use(DescriptionsItem)
Vue.use(Tag)
Vue.use(Select)
Vue.use(Option)
Vue.use(Empty)

router.afterEach(() => {
  document.documentElement.scrollTop = 0
})
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
