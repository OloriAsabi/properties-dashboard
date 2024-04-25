import { IconType } from "react-icons";

export {};

declare global {
	/**
   * Now declare things that go in the global namespace,
   * or augment existing declarations in the global namespace.
   */


	  
	interface RoutesType {
        secondary: boolean;
		name: string;
		component: () => JSX.Element;
		icon: IconType | string; // Icon can be a JSX element or a string (like icon names)
		path: string;
	  }
}
