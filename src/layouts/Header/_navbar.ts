interface Nav {
	id: number,
	url: string;
	label: string;
	icon: string | null;
}

interface Accessory {
	id: number,
	icon: string;
	label: string;
	on_click: () => void;
}

//
export const navs: Array<Nav> = [
	{
		id: 1,
		url: "/projects",
		label: "Projects",
		icon: null,
	},
	{
		id: 2,
		url: "/extra",
		label: "Extra",
		icon: null,
	},
];

//
export const accessories: Array<Accessory> = [
	{
		id: 1,
		label: "switch_light",
		icon: "",
		on_click: () => {console.log(window);},
	},
	{
		id: 2,
		label: "mail",
		icon: "",
		on_click: () => {},
	},
];
