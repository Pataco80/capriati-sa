const React = require("react")
const { default: GlobalStyle } = require("./src/theme/globalStyles")
const Layout = require("./src/components/Layout/Layout").default

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
