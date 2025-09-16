import { defineStore } from "pinia";

export const useGlobalStore = defineStore({
	id: "global-store",
	state: () => {
		return {
			isAuth: false,
			isBackBtn: false,
			menuTitle: "",
			isMenuVisible: true,
			isPending: false,
			isLoading: false
		};
	}
});
