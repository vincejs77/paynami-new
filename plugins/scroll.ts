export default defineNuxtPlugin((nuxtApp) => {
	nuxtApp.hook("page:finish", () => {
		// console.log("Chargement terminé ...");
		window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
	});
});
