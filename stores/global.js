import { defineStore } from "pinia";

export const useGlobalStore = defineStore("global", {
  state: () => ({
    token: null, // pour la connexion
  }),
  actions: {

    // connecte l'utilisateur et garde la connexion
    setToken(token){
      if (token){
        this.token = token
        localStorage.setItem('token', JSON.stringify(this.token))
        }
    },

    // déconnecte l'utilisateur
    clearToken() {
      this.token = null
      localStorage.setItem('token', this.token);
      localStorage.removeItem('token');
    },
  },
});