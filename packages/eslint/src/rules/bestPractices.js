import preferArrow from "eslint-plugin-prefer-arrow";

export default {
	plugins: { preferArrow },
	rules: {
		"no-restricted-syntax": [
			2,
			"BinaryExpression[operator='in']",
			"WithStatement"
		],
		"no-unused-vars": [
			1,
			{
				argsIgnorePattern: "res|next",
				ignoreRestSiblings: true
			}
		],
		"no-unused-expressions": [
			2,
			{
				allowTaggedTemplates: true
			}
		],
		"no-param-reassign": 2,
		"no-return-assign": [2, "except-parens"],
		"no-shadow": [
			1,
			{
				hoist: "all",
				allow: ["resolve", "reject", "done", "next", "err", "error"]
			}
		],
		"no-console": 0,
		"preferArrow/prefer-arrow-functions": [
			"error",
			{
				disallowPrototype: true,
				singleReturnOnly: true,
				classPropertiesAllowed: false
			}
		]
	}
};
