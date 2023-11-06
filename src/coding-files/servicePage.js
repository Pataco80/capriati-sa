import React from "react"

const servicePage = ({ data }) => {
	return (
		<div>
			<pre>{JSON.stringify(data, null, 4)}</pre>
		</div>
	)
}

export default servicePage
