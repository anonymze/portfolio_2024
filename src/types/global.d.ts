// we can streat svg like Components in React with the help of the plugin svgr in the vite config
declare module '*.svg?react' {
	import React from 'react';

	interface SvgProps extends React.SVGProps<SVGElement> {
			// Add any custom props you want here
	}

	const content: React.FC<SvgProps>;
	export default content;
}

type SVGIcons = "dark" | "light" | "mail" | "linkedin" | "location" | "flag-en" | "flag-fr" | "magic";