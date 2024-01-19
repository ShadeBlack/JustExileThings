// when ready
document.addEventListener("DOMContentLoaded", () => {
	// get prepped json file
	fetch("charm-mods.json")
		.then((r) => r.json())
		.then((d) => populateTables(d))
		.catch((e) => console.error("Error fetching JSON:", e));

	// search input
	let si = document.getElementById("inpSearch");
	si.addEventListener("input", () => {
		let ae = document.querySelectorAll(".affix");
		let st = si.value.toLowerCase();
		ae.forEach((a) => {
			const ds = a.getAttribute("data-stats").toLowerCase();
			if (ds.includes(st)) a.classList.remove("opacity-10");
			else a.classList.add("opacity-10");
		});
	});
});

function populateTables(d) {
	// d = json data

	let g = document.createElement("div");
	// class="grid grid-cols-11"
	g.classList.add(...["grid", "grid-cols-11"]);

	let dfp = d.filter((i) => i.Affix == "Prefix");
	let dfs = d.filter((i) => i.Affix == "Suffix");

	// containers
	let cp = document.getElementById("prefixes");
	let cs = document.getElementById("suffixes");

	appendStats(cp, dfp);
	appendStats(cs, dfs);
	function appendStats(container, array) {
		// Sort the array by Name, and then by Stats
		array.sort((a, b) => {
			// Compare by Name
			const nc = a.Name.localeCompare(b.Name);
			// If Names are equal, compare by Groups
			const gc = nc === 0 ? a.Groups.localeCompare(b.Groups) : nc;
			// If Names and Groups are equal, compare by Stats
			return gc === 0 ? a.Stats.localeCompare(b.Stats) : gc;
		});

		// tracker
		let tn = array[0].name;

		// print
		array.forEach((o, i) => {
			// vars
			let ena = o.Name ?? null;
			// let eaf = o.Affix ?? null;
			// let egr = o.Groups ?? null;
			// let ele = o.Level ?? null;
			let est = o.Stats ?? null;
			let ess = o.Str ?? null;
			let esd = o.Dex ?? null;
			let esi = o.Int ?? null;
			// let elu = o.Lupine ?? null;
			// let eur = o.Ursine ?? null;
			// let eco = o.Corvine ?? null;
			let bt0 = i && tn == ena ? "border-t-0" : "";

			// badges
			let bss = ess > 0 ? `<span class="ml-1 px-1 pb-0.5 text-xs leading-none bg-red-900 rounded text-red-300">Str</span>` : "";
			let bsd = esd > 0 ? `<span class="ml-1 px-1 pb-0.5 text-xs leading-none bg-green-900 rounded text-green-300">Dex</span>` : "";
			let bsi = esi > 0 ? `<span class="ml-1 px-1 pb-0.5 text-xs leading-none bg-blue-900 rounded text-blue-300">Int</span>` : "";

			// tracker
			if (tn !== ena) {
				let r = `<div class='font-semibold mt-6 mb-2'>${ena}${bss}${bsd}${bsi}</div>`;
				container.innerHTML += r;
				tn = ena;
			}

			// data attributes
			let da = Object.entries(o)
				.filter(([k, v]) => v !== null) // Exclude null values
				.map(([k, v]) => `data-${k.toLowerCase()}="${v}"`)
				.join(" ");

			// element
			let r = `<div class='affix border ${bt0} px-2 py-1 cursor-pointer even:bg-gray-700 odd:bg-gray-800 border-gray-600 text-sm hover:bg-gray-500' ${da}>${est}</div>`;
			container.innerHTML += r;
		});
	}

	// events
	let ae = document.querySelectorAll(".affix");
	ae.forEach((e) => {
		e.addEventListener("click", (e) => {
			let ct = e.currentTarget;
			console.log(ct);
		});
	});
}
