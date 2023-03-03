import { defineStore } from "pinia";

export type UserStore = {
  name: string;
  id: number;
  dob: string;
};

const INIT_STATE: UserStore = {
  name: "",
  id: 0,
  dob: "",
};

export const useUserStore = defineStore("user", {
  state: () => INIT_STATE,
  getters: {
    user: (state) => state,
  },
  actions: {
    reset() {
      this.$reset();
    },
    setUser(user: UserStore) {
      this.name = user.name;
      this.id = user.id;
      this.dob = user.dob;
    },
  },
});
