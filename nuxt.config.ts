// https://nuxt.com/docs/api/configuration/nuxt-config
// PUSH
export default defineNuxtConfig({
	ssr: false,
	router: {
		options: {
			strict: true
		}
	},
	css: ["~/assets/styles/main.scss"],
	app: {
		head: {
			title: "Paynami Data Collection",
			meta: [
				{ charset: "utf-16" },
				{ name: "viewport", content: "width=device-width, initial-scale=1" },
				{ name: "description", content: "Data Collection" },
				{ name: "format-detection", content: "telephone=no" },
				{ property: "og:title", content: "Paynami" },
				{
					property: "og:description",
					content: "Data Collection"
				},
				{ property: "og:url", content: "https://paynami.witoxr.app/" },
				{
					property: "og:image",
					content: "https://paynami.vercel.app/img/cover.jpg"
				},
				{ name: "twitter:title", content: "Paynami" },
				{
					name: "twitter:description",
					content: "Data Collection"
				},
				{
					name: "twitter:image",
					content: "https://paynami.vercel.app/img/cover.jpg"
				},
				{ name: "twitter:card", content: "summary_large_image" }
			],
			link: [
				{
					rel: "me",
					href: "https://twitter.com/ifgoma"
				},
				{ rel: "icon", type: "image/x-icon", href: "/img/favicons/favicon.ico" },
				{
					rel: "apple-touch-icon",
					sizes: "76x76",
					href: "/img/favicons/apple-touch-icon.png"
				},
				{
					rel: "icon",
					type: "image/png",
					sizes: "32x32",
					href: "/img/favicons/favicon-32x32.png"
				},
				{
					rel: "icon",
					type: "image/png",
					sizes: "16x16",
					href: "/img/favicons/favicon-16x16.png"
				},

				{
					rel: "mask-icon",
					href: "/img/favicons/safari-pinned-tab.svg",
					color: "#5bbad5"
				}
			],
			noscript: [{ children: "Javascript est desactivé" }]
		}
	},
	postcss: {
		plugins: {
			"tailwindcss/nesting": {},
			tailwindcss: {},
			autoprefixer: {}
		}
	},
	modules: [
		[
			"@pinia/nuxt",
			{
				autoImports: ["defineStore", "acceptHMRUpdate"]
			}
		],
		["nuxt-directus", { autoImports: ["useDirectusItems", "useDirectusItems"] }]
	],
	directus: {
		url: "https://paynami.witoxr.app",
		token: ""
	},
	runtimeConfig: {
		apiSecret: "",
		public: {
			apiBase: "https://paynami.witoxr.app"
		}
	}
});
