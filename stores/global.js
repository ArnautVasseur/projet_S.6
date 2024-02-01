import { defineStore } from "pinia";

export const useGlobalStore = defineStore("global", {
  state: () => ({
    token: null, // pour la connexion
    achievement__1: false,
    achievement__2: false,
    achievement__3: false,
    achievement__4: false,
    achievement__5: false,
    achievement__6: false,
    achievement__7: false,
    achievement__8: false,
    achievement__9: false,
  }),
  actions: {
    // connecte l'utilisateur et garde la connexion
    setToken(token) {
      if (token) {
        this.token = token;
        localStorage.setItem('token', JSON.stringify(this.token));
      }
    },

    // déconnecte l'utilisateur
    clearToken() {
      this.achievement__1 = false,
      this.achievement__2 = false,
      this.achievement__3 = false,
      this.achievement__4 = false,
      this.achievement__5 = false,
      this.achievement__6 = false,
      this.achievement__7 = false,
      this.achievement__8 = false,
      this.achievement__9 = false,
      this.token = null;
      localStorage.removeItem('token');
    },

    clearAchievements() {
      this.achievement__1 = false,
      this.achievement__2 = false,
      this.achievement__3 = false,
      this.achievement__4 = false,
      this.achievement__5 = false,
      this.achievement__6 = false,
      this.achievement__7 = false,
      this.achievement__8 = false,
      this.achievement__9 = false,
      localStorage.removeItem('achievements');
    },
  },
});
