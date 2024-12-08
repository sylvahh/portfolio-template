import HomePage from "@/pages/home-page";
import { RouteProps } from "react-router-dom";

type CustomRouteProps = RouteProps & {
	exact?: boolean;
};
export const PublicRoutes: CustomRouteProps[] = [{ path: "/", Component: HomePage, exact: true }];
