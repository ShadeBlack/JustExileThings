// data
const nodes = [
	{
		tip: "Starting point",
		top: 163,
		left: 300,
		size: 1,
	},
	{
		tip: "Sentinel slot 1",
		top: 195,
		left: 186,
		size: 3,
	},
	{
		tip: "Sentinel slot 2",
		top: 135,
		left: 402,
		size: 3,
	},
	{
		tip: "Sentinel slot 3",
		top: 195,
		left: 618,
		size: 3,
	},
];

const lines = [
	{
		top: 85,
		left: 380,
		width: 8,
		height: 140,
		angle: 260,
	},
	{
		top: 106,
		left: 380,
		width: 8,
		height: 140,
		angle: 90,
	},
	{
		top: 126,
		left: 380,
		width: 8,
		height: 140,
		angle: 100,
	},
];

// when ready
document.addEventListener("DOMContentLoaded", () => {
	addNodes();
	addLines();
	tooltips();
});

// function nodeClicked(nodeId) {
// 	// Handle node click, you can open a modal or perform other actions
// 	console.log("Node clicked:", nodeId);
// }

function tooltips() {
	// tippy js
	let te = document.querySelectorAll(".node");
	te.forEach((i) => {
		let it = i._tippy;
		if (it) it.destroy();
	});
	tippy(te, {
		allowHTML: true,
		placement: "top",
	});
}

function addNodes() {
	// vars
	const map = document.getElementById("map");

	// process nodes
	nodes.forEach((node) => {
		// vars
		let ne = document.createElement("div");
		// modify the node
		ne.className = `
			node z-20 absolute cursor-pointer s${node.size}
			transition-colors border-2
			bg-blue-950 border-gray-400
			hover:bg-cyan-600 hover:border-blue-950`;
		ne.style.top = `${node.top}px`;
		ne.style.left = `${node.left}px`;
		ne.setAttribute("data-tippy-content", node.tip);

		// add
		map.appendChild(ne);
	});
}

function addLines() {
	// vars
	const map = document.getElementById("map");
	// process lines
	lines.forEach((line) => {
		// vars
		let ne = document.createElement("div");
		let cl = `pointer`;
		// modify the line
		ne.className = `
			line z-10 absolute cursor-pointer
			transition-colors border-2
			bg-blue-950 border-gray-400
			hover:bg-cyan-600 hover:border-blue-950`;
		ne.style.top = `${line.top}px`;
		ne.style.left = `${line.left}px`;
		ne.style.width = `${line.width}px`;
		ne.style.height = `${line.height}px`;
		ne.style.transform = `rotate(${line.angle}deg)`;

		// add
		map.appendChild(ne);
	});
}
