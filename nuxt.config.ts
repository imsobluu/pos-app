// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from "nuxt/config";
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
	modules: [
		"@nuxt/eslint",
		"@nuxt/ui",
		"@nuxt/fonts",
		"shadcn-nuxt",
	],
	imports: {
		autoImport: false,
	},
	devtools: { enabled: true },
	css: ["@/assets/css/main.css"],
	ui: {
		prefix: "NuxtUI",
		fonts: true,
	},
	compatibilityDate: "2024-11-01",
	vite: {
		plugins: [
			tailwindcss(),
		],
	},
	eslint: {
		config: {
			stylistic: {
				semi: true,
				quotes: "double",
				commaDangle: "always-multiline",
				indent: "tab",
			},
		},
	},
	shadcn: {
		/**
     * Prefix for all the imported component
     */
		prefix: "shadcn",
		/**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
		componentDir: "./components/ui",
	},
});
