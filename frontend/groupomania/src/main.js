import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// gestion font awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { faAddressCard, faUsers, faSignOutAlt, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { faCommentDots, faThumbsUp } from "@fortawesome/free-regular-svg-icons";

library.add(faAddressCard, faUsers, faSignOutAlt, faCommentDots, faThumbsUp, faTrashAlt);

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";


createApp(App).component("font-awesome-icon", FontAwesomeIcon).use(store).use(router).mount('#app')
