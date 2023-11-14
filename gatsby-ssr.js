const React = require("react")
const Layout = require("./src/components/Layout/Layout").default
const { default: GlobalStyle } = require("./src/theme/globalStyles")
exports.wrapPageElement = ({ element, props }) => {
	// props provide same data to Layout as Page element will get
	// including location, data, etc - you don't need to pass it
	return (
		<>
			<GlobalStyle />
			<Layout {...props}>{element}</Layout>
		</>
	)
}
