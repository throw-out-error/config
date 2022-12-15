import bestPractices from "./rules/bestPractices.js";

export default [
	"eslint:recommended",
	bestPractices,
	{
		languageOptions: {
			ecmaVersion: "latest"
		},
		rules: {
			// Personal choices

			"arrow-body-style": ["error", "as-needed"],
			curly: ["error", "multi"],
			"comma-dangle": ["error", "never"]
		}
	}
];
