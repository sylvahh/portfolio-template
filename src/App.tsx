import React from "react";
import { Route, Routes } from "react-router-dom";
import { PublicRoutes } from "./routes";
import useCustomNavigation from "./hooks/use-navigation";
import Page404 from "./components/prompts/page-not-found";

export default function App() {
	const { location } = useCustomNavigation();

	React.useEffect(() => {
		if (location.pathname === "/") {
			document.getElementById("root")?.classList.add("fixed-bg");
		} else {
			document.getElementById("root")?.classList.remove("fixed-bg");
		}
	}, [location.pathname]);

	return (
		<React.Fragment>
			<Routes>
				{PublicRoutes.map((route, index) => (
					<Route key={index} {...route} />
				))}

				<Route path="*" element={<Page404 />} />
			</Routes>
		</React.Fragment>
	);
}
