import { auth, usersCollection } from '@/includes/firebase';

export default {

  state: {
    authModalShow: false,
    userLoggedIn: false,
  },
  mutations: {
    toggleAuthModal: (state) => {
      state.authModalShow = !state.authModalShow;
    },
    toggleAuth(state) {
      state.userLoggedIn = !state.userLoggedIn;
    },
  },
  actions: {
    async register({ commit }, {
      email, password, name, age, country,
    }) {
      const { user } = await auth.createUserWithEmailAndPassword(
        email, password,
      );
      await usersCollection.doc(user.uid).set({
        email, name, age, country,
      });

      await user.updateProfile({
        displayName: name,
      });

      commit('toggleAuth');
    },
    async login({ commit }, { email, password }) {
      await auth.signInWithEmailAndPassword(email, password);

      commit('togleAuth');
    },
    init_login({ commit }) {
      const user = auth.currentUser;

      if (user) {
        commit('toggleAuth');
      }
    },
    async signout({ commit }) {
      await auth.signOut();
      commit('toggleAuth');
    },
  },
};
