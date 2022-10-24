import { injectStores } from '@mobx-devtools/tools';
// import contactsStore from './contactsStore';
import authStore from './authStore';

injectStores({
  //   contactsStore,
  authStore,
});
export { authStore };
