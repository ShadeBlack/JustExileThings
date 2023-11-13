// data
const nodes = [
	{
		tip: "Starting point",
		top: 163,
		left: 300,
		size: 1,
	},
	{
		tip: "Apex Sentinel slot",
		top: 195,
		left: 186,
		size: 3,
	},
	{
		tip: "Stalker Sentinel slot",
		top: 135,
		left: 402,
		size: 3,
	},
	{
		tip: "Pandemonium Sentinel slot",
		top: 195,
		left: 618,
		size: 3,
	},
	{
		tip: "Sentinels have 10% increased duration",
		top: 266,
		left: 370,
		size: 1,
	},
	{
		tip: "Sentinels have 15% increased cast speed",
		top: 266,
		left: 429,
		size: 1,
	},
	{
		tip: "Sentinels have 15% increased cast speed",
		top: 266,
		left: 574,
		size: 1,
	},
	{
		tip: "Stalker Sentinels have 25% increased cast speed",
		top: 367,
		left: 429,
		size: 1,
	},
	{
		tip: "Stalker Sentinel beams chain an additional time",
		top: 357,
		left: 505,
		size: 2,
	},
	{
		tip: "Sentinels have 15% chance to not consume charge on use",
		top: 357,
		left: 564,
		size: 2,
	},
	{
		tip: "Sentinels have 15% increased duration",
		top: 387,
		left: 370,
		size: 1,
	},
	{
		tip: "Empowered monsters grant 30% increased Sentinel Power",
		top: 375,
		left: 301,
		size: 2,
	},
	{
		tip: "Sentinels have 15% increased duration",
		top: 325,
		left: 312,
		size: 1,
	},
	{
		tip: "Apex Sentinels have 25% increased duration",
		top: 325,
		left: 213,
		size: 1,
	},
	{
		tip: "Apex Sentinels sap enemies for 5 seconds with maximum effect on empowering them",
		top: 312,
		left: 113,
		size: 2,
	},
	{
		tip: "Apex Sentinels have 25% increased cast speed",
		top: 387,
		left: 213,
		size: 1,
	},
	{
		tip: "Apex Sentinels have 10% chance to not consume Charge on use",
		top: 387,
		left: 124,
		size: 1,
	},
	{
		tip: "Apex Sentinels can be re-deployed after being dismissed",
		top: 443,
		left: 113,
		size: 2,
	},
	{
		tip: "Apex Sentinels can Empower and additional Enemy",
		top: 443,
		left: 236,
		size: 2,
	},
	{
		tip: "Stalker Sentinels have a 10% chance to duplicate non-unique Enemies when they are Empowered",
		top: 443,
		left: 359,
		size: 2,
	},
	{
		tip: "Stalker Sentinels fire an additional Beam",
		top: 443,
		left: 418,
		size: 2,
	},
	{
		tip: "Stalker Sentinels have 25% increased Cast Speed",
		top: 454,
		left: 514,
		size: 1,
	},
	{
		tip: "Sentinels have 15% increased Cast Speed",
		top: 454,
		left: 574,
		size: 1,
	},
	{
		tip: "Pandemonium Sentinels have 25% increased Cast Speed",
		top: 454,
		left: 645,
		size: 1,
	},
	{
		tip: "Pandemonium Sentinels have 25% increased Chaining range",
		top: 454,
		left: 728,
		size: 1,
	},
	{
		tip: "Pandemonium Sentinels have 25% increased duration",
		top: 324,
		left: 645,
		size: 1,
	},
	{
		tip: "Pandemonium Sentinels restore all of the Character's Flask Charges on Deployment<br>Pandemonium Sentinels grant maximum Vaal Souls to one of the character's Vaal Skills on Deployment",
		top: 312,
		left: 718,
		size: 2,
	},
	{
		tip: "Pandemonium Sentinels fire and additional Beam<br>Pandemonium Sentinel Beams chain +2 times",
		top: 375,
		left: 718,
		size: 2,
	},
	{
		tip: "Apex Sentinels have 10% chance to not consume Charge on use",
		top: 528,
		left: 184,
		size: 1,
	},
	{
		tip: "Apex Sentinels have 25% increased Cast Speed",
		top: 528,
		left: 249,
		size: 1,
	},
	{
		tip: "Sentinels have 15% increased Cast Speed",
		top: 528,
		left: 312,
		size: 1,
	},
	{
		tip: "Stalker Sentinels have 10% increased chance to add Rewards",
		top: 528,
		left: 370,
		size: 1,
	},
	{
		tip: "Stalker Sentinels have 10% chance to not consume Charge on use",
		top: 528,
		left: 429,
		size: 1,
	},
	{
		tip: "15% increased number of Enemies Empowered by Stalker Sentinels",
		top: 518,
		left: 504,
		size: 2,
	},
	{
		tip: "Sentinels have 15% increased duration",
		top: 528,
		left: 574,
		size: 1,
	},
	{
		tip: "10% increased number of Enemies Empowered by Pandemonium Sentinels",
		top: 528,
		left: 644,
		size: 1,
	},
	{
		tip: "15% increased number of Enemies Empowered by Pandemonium Sentinels",
		top: 518,
		left: 718,
		size: 2,
	},
	{
		tip: "Apex Sentinels do not Empower Rare rarity enemies<br>Apex Sentinels grant 30% increased Rewards",
		top: 596,
		left: 135,
		size: 2,
	},
	{
		tip: "Stalker Sentinels do not Empower Normal rarity enemies",
		top: 596,
		left: 294,
		size: 2,
	},
	{
		tip: "Found Normal-rarity Sentinels from Monsters you kill are upgraded to Magic rarity<br>Found Normal-rarity Sentinels from Chests you open are upgraded to Magic rarity",
		top: 596,
		left: 476,
		size: 2,
	},
	{
		tip: "Pandemonium Sentinels spawn packs of Monsters on Deployment",
		top: 596,
		left: 717,
		size: 2,
	},
	{
		tip: "Apex Sentinels have 10% increased Empowerment",
		top: 608,
		left: 249,
		size: 1,
	},
	{
		tip: "Stalker Sentinels have 10% increased chance to add Rewards",
		top: 608,
		left: 370,
		size: 1,
	},
	{
		tip: "10% chance for found Power Cores to be Duplicated",
		top: 608,
		left: 429,
		size: 1,
	},
	{
		tip: "8% chance for found Sentinels to be Duplicated",
		top: 608,
		left: 574,
		size: 1,
	},
	{
		tip: "Pandemonium Sentinels have a 10% chance to not consume Charge on use",
		top: 608,
		left: 644,
		size: 1,
	},
	{
		tip: "Apex Sentinels have 10% increased Empowerment",
		top: 682,
		left: 249,
		size: 1,
	},
	{
		tip: "Sentinels have 10% increased Empowerment",
		top: 682,
		left: 312,
		size: 1,
	},
	{
		tip: "8% chance for found Sentinels to be Duplicated",
		top: 682,
		left: 487,
		size: 1,
	},
	{
		tip: "Pandemonium Sentinels have a 10% chance to not consume Charge on use",
		top: 682,
		left: 644,
		size: 1,
	},
	{
		tip: "Rewards are 15% more likely to be Sentinel Rewards",
		top: 682,
		left: 728,
		size: 1,
	},
	{
		tip: "20% Chance for found Power Cores to be Duplicated",
		top: 672,
		left: 418,
		size: 2,
	},
	{
		tip: "Pandemonium Sentinels can be Deployed an addtional time each area",
		top: 672,
		left: 564,
		size: 2,
	},
	{
		tip: "Enemies Empowered by Apex Sentinels have 20% for Rewards to be doubled<br>Enemies Empowered by Apex Sentinels have Onslaught",
		top: 740,
		left: 175,
		size: 2,
	},
	{
		tip: "Sentinels have 20% increased Empowerment",
		top: 740,
		left: 301,
		size: 2,
	},
	{
		tip: "Rewards are 30% more likely to be Sentinel Rewards",
		top: 740,
		left: 634,
		size: 2,
	},
	{
		tip: "Enemies Empowered by Apex Sentinels have 10% for Rewards to be doubled<br>Enemies Empowered by Apex Sentinels have +10% to all Resistances",
		top: 751,
		left: 249,
		size: 1,
	},
	{
		tip: "Rewards are 15% more likely to be Sentinel Rewards",
		top: 751,
		left: 487,
		size: 1,
	},
	{
		tip: "Rewards are more likely to be less common types",
		top: 816,
		left: 418,
		size: 2,
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
	{
		top: 165,
		left: 338,
		width: 14,
		height: 120,
		angle: -35,
	},
	{
		top: 400,
		left: 232,
		width: 14,
		height: 50,
		angle: -30,
	},
	{
		top: 475,
		left: 165,
		width: 14,
		height: 70,
		angle: -40,
	},
	{
		top: 675,
		left: 698,
		width: 14,
		height: 100,
		angle: 50,
	},
	{
		top: 272,
		left: 390,
		width: 55,
		height: 14,
	},
	{
		top: 272,
		left: 450,
		width: 130,
		height: 14,
	},
	{
		top: 330,
		left: 155,
		width: 65,
		height: 14,
	},
	{
		top: 330,
		left: 235,
		width: 80,
		height: 14,
	},
	{
		top: 330,
		left: 665,
		width: 60,
		height: 14,
	},
	{
		top: 460,
		left: 665,
		width: 70,
		height: 14,
	},
	{
		top: 534,
		left: 665,
		width: 70,
		height: 14,
	},
	{
		top: 614,
		left: 665,
		width: 70,
		height: 14,
	},
	{
		top: 614,
		left: 520,
		width: 60,
		height: 14,
	},
	{
		top: 757,
		left: 510,
		width: 130,
		height: 14,
	},
	{
		top: 757,
		left: 220,
		width: 40,
		height: 14,
	},
	{
		top: 687,
		left: 260,
		width: 60,
		height: 14,
	},
	{
		top: 687,
		left: 330,
		width: 100,
		height: 14,
	},
	{
		top: 687,
		left: 460,
		width: 30,
		height: 14,
	},
	{
		top: 687,
		left: 460,
		width: 30,
		height: 14,
	},
	{
		top: 393,
		left: 345,
		width: 30,
		height: 14,
	},
	{
		top: 373,
		left: 450,
		width: 60,
		height: 14,
	},
	{
		top: 534,
		left: 205,
		width: 50,
		height: 14,
	},
	{
		top: 534,
		left: 270,
		width: 50,
		height: 14,
	},
	{
		top: 534,
		left: 330,
		width: 45,
		height: 14,
	},
	{
		top: 534,
		left: 390,
		width: 45,
		height: 14,
	},
	{
		top: 534,
		left: 450,
		width: 60,
		height: 14,
	},
	{
		top: 534,
		left: 545,
		width: 35,
		height: 14,
	},
	{
		top: 534,
		left: 595,
		width: 55,
		height: 14,
	},
	{
		top: 460,
		left: 595,
		width: 55,
		height: 14,
	},
	{
		top: 350,
		left: 130,
		width: 14,
		height: 40,
	},
	{
		top: 410,
		left: 130,
		width: 14,
		height: 40,
	},
	{
		top: 345,
		left: 219,
		width: 14,
		height: 50,
	},
	{
		top: 345,
		left: 318,
		width: 14,
		height: 50,
	},
	{
		top: 420,
		left: 318,
		width: 14,
		height: 115,
	},
	{
		top: 485,
		left: 255,
		width: 14,
		height: 50,
	},
	{
		top: 550,
		left: 255,
		width: 14,
		height: 65,
	},
	{
		top: 630,
		left: 255,
		width: 14,
		height: 60,
	},
	{
		top: 700,
		left: 255,
		width: 14,
		height: 60,
	},
	{
		top: 700,
		left: 318,
		width: 14,
		height: 60,
	},
	{
		top: 285,
		left: 376,
		width: 14,
		height: 110,
	},
	{
		top: 410,
		left: 376,
		width: 14,
		height: 40,
	},
	{
		top: 485,
		left: 376,
		width: 14,
		height: 50,
	},
	{
		top: 550,
		left: 376,
		width: 14,
		height: 65,
	},
	{
		top: 280,
		left: 435,
		width: 14,
		height: 90,
	},
	{
		top: 390,
		left: 435,
		width: 14,
		height: 60,
	},
	{
		top: 485,
		left: 435,
		width: 14,
		height: 50,
	},
	{
		top: 550,
		left: 435,
		width: 14,
		height: 65,
	},
	{
		top: 630,
		left: 435,
		width: 14,
		height: 45,
	},
	{
		top: 285,
		left: 580,
		width: 14,
		height: 80,
	},
	{
		top: 400,
		left: 580,
		width: 14,
		height: 60,
	},
	{
		top: 475,
		left: 580,
		width: 14,
		height: 60,
	},
	{
		top: 550,
		left: 580,
		width: 14,
		height: 65,
	},
	{
		top: 400,
		left: 520,
		width: 14,
		height: 60,
	},
	{
		top: 470,
		left: 520,
		width: 14,
		height: 60,
	},
	{
		top: 340,
		left: 651,
		width: 14,
		height: 120,
	},
	{
		top: 540,
		left: 651,
		width: 14,
		height: 80,
	},
	{
		top: 630,
		left: 651,
		width: 14,
		height: 60,
	},
	{
		top: 420,
		left: 735,
		width: 14,
		height: 40,
	},
	{
		top: 470,
		left: 735,
		width: 14,
		height: 55,
	},
	{
		top: 640,
		left: 735,
		width: 14,
		height: 55,
	},
	{
		top: 640,
		left: 493,
		width: 14,
		height: 55,
	},
	{
		top: 700,
		left: 493,
		width: 14,
		height: 55,
	},
	{
		top: 270,
		left: 221,
		width: 8,
		height: 60,
		angle: 0,
	},
	{
		top: 260,
		left: 206,
		width: 8,
		height: 80,
		angle: -12,
	},
	{
		top: 260,
		left: 237,
		width: 8,
		height: 80,
		angle: 12,
	},

	{
		top: 270,
		left: 654,
		width: 8,
		height: 60,
		angle: 0,
	},
	{
		top: 260,
		left: 639,
		width: 8,
		height: 80,
		angle: -12,
	},
	{
		top: 260,
		left: 670,
		width: 8,
		height: 80,
		angle: 12,
	},
	{
		top: 560,
		left: 200,
		width: 8,
		height: 100,
		angle: -85,
	},
	{
		top: 580,
		left: 200,
		width: 8,
		height: 100,
		angle: 85,
	},
	{
		top: 585,
		left: 350,
		width: 8,
		height: 50,
		angle: -85,
	},
	{
		top: 605,
		left: 350,
		width: 8,
		height: 50,
		angle: 85,
	},
	{
		top: 655,
		left: 630,
		width: 8,
		height: 60,
		angle: -85,
	},
	{
		top: 675,
		left: 630,
		width: 8,
		height: 60,
		angle: 85,
	},
	{
		top: 755,
		left: 480,
		width: 8,
		height: 90,
		angle: 35,
	},
	{
		top: 755,
		left: 460,
		width: 8,
		height: 80,
		angle: 40,
	},
];

// when ready
document.addEventListener("DOMContentLoaded", () => {
	addNodes();
	addLines();
	tooltips();
});

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
			transition-colors border
			bg-gray-950 border-gray-600
			hover:bg-cyan-500 hover:border-blue-950`;
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
	lines.reverse().forEach((line) => {
		// vars
		let ne = document.createElement("div");
		// modify the line
		ne.className = `
			line z-10 absolute cursor-pointer
			transition-colors border
			bg-gray-950 border-gray-600
			hover:bg-cyan-500 hover:border-blue-950`;
		ne.style.top = `${line.top}px`;
		ne.style.left = `${line.left}px`;
		ne.style.width = `${line.width}px`;
		ne.style.height = `${line.height}px`;
		ne.style.transform = `rotate(${line.angle}deg)`;

		// add
		map.appendChild(ne);
	});
}

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
