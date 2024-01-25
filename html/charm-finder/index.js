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
			let fn = ds.includes(st) ? "remove" : "add";
			a.classList[fn]("filtered");
		});
		styleFiltered();
		dispalyCharm();
	});

	// filter change
	document.getElementById("inpHideSelected").addEventListener("change", () => styleFiltered());

	// clear button
	let bc = document.querySelectorAll(".btnClear");
	bc.forEach((e) => {
		e.addEventListener("click", () => {
			si.value = "";
			let a = document.querySelectorAll(".affix");
			a.forEach((e) => e.classList.remove("filtered", "selected"));
			styleFiltered();
			dispalyCharm();
		});
	});

	// trade button
	document.getElementById("btnTrade").addEventListener("click", () => {
		// vars
		let p = document.querySelectorAll("#prefixes .affix.selected");
		let s = document.querySelectorAll("#suffixes .affix.selected");

		// validation
		if (p.length != 1 || s.length != 1) {
			c.classList.add("hidden");
			return;
		}

		// elements
		let pe = p[0];
		let se = s[0];

		// trade stat ids
		let pid = pe.dataset.id;
		let sid = se.dataset.id;

		// stat mins
		let psm = pe.dataset.min;
		let ssm = se.dataset.min;

		// parts
		let stats = [
			{
				type: "and",
				filters: [
					{
						id: `explicit.stat_${pid}`,
						min: psm,
					},
					{
						id: `explicit.stat_${sid}`,
						min: ssm,
					},
				],
			},
		];
		let filters = {
			type_filters: {
				filters: {
					category: {
						option: "azmeri.charm",
					},
				},
			},
		};

		// query
		let u = new URL("https://www.pathofexile.com/trade/search/");
		let q = {
			query: {
				status: {
					option: "online",
				},
				stats: stats,
				filters: filters,
			},
			sort: {
				price: "asc",
			},
		};
		q = JSON.stringify(q);
		u.searchParams.set("q", q);
		window.open(u, "_blank");
	});
});

function populateTables(d) {
	// d = json data

	let g = document.createElement("div");
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
			let est = o.Stats ?? null;
			let ess = o.Str ?? null;
			let esd = o.Dex ?? null;
			let esi = o.Int ?? null;
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
			// vars
			let ct = e.currentTarget;
			let ctif = ct.classList.contains("filtered"); // ct is 'filtered'

			// data attributes
			let daid = ct.dataset.id ?? null;
			let daaf = ct.dataset.affix ?? null;
			let dass = ct.dataset.str ?? null;
			let dasd = ct.dataset.dex ?? null;
			let dasi = ct.dataset.int ?? null;
			let dalu = ct.dataset.lupine ?? null;
			let daur = ct.dataset.ursine ?? null;
			let daco = ct.dataset.corvine ?? null;

			// check to clear search
			let si = document.getElementById("inpSearch");
			if (si.value.length) si.value = "";

			// container
			let ac = ct.closest(".affixContainer"); // affix container
			let ca = ac.querySelectorAll(".affix"); // container's affixes
			ca.forEach((e) => e.classList.remove("selected", "filtered"));

			// select the element
			ct.classList.add("selected");

			// filter the rest
			let oa = ac.querySelectorAll(".affix:not(.selected)"); // siblings
			oa.forEach((e) => e.classList.add("filtered")); // filter out all other affixes of the same type

			// other container
			let oac = document.getElementById(ac.getAttribute("id") == "prefixes" ? "suffixes" : "prefixes");
			let oca = oac.querySelectorAll(".affix"); // other container's affixes
			let ocs = oac.querySelectorAll(".selected"); // other container's selected

			// if only one opposing affix selected...
			if (ocs.length == 1 && !ctif) {
				styleFiltered();
				dispalyCharm();
				return;
			}

			// else
			oca.forEach((e) => e.classList.remove("selected", "filtered"));

			// "" filtered (charm rules)
			let ocaf = Array.from(oca).filter((e) => {
				if (dass && e.dataset.str > 0) return false;
				if (dasd && e.dataset.dex > 0) return false;
				if (dasi && e.dataset.int > 0) return false;
				if (dalu && e.dataset.lupine > 0) return false;
				if (daur && e.dataset.ursine > 0) return false;
				if (daco && e.dataset.corvine > 0) return false;
				return true;
			});

			// apply
			ocaf.forEach((e) => e.classList.add("filtered"));

			// styling
			styleFiltered();
			dispalyCharm();
		});
	});
}

function styleFiltered() {
	// vars
	let hfv = parseInt(document.getElementById("inpHideSelected").value);
	let hfc = hfv ? "hidden" : "opacity-10";
	let a = document.querySelectorAll(".affix");
	let f = document.querySelectorAll(".filtered");

	// remove all
	a.forEach((e) => e.classList.remove("opacity-10", "hidden"));

	// filtered
	f.forEach((e) => e.classList.add(hfc));
}

function dispalyCharm() {
	// vars
	let c = document.getElementById("charm");
	let p = document.querySelectorAll("#prefixes .selected");
	let s = document.querySelectorAll("#suffixes .selected");

	// validation
	if (p.length != 1 || s.length != 1) {
		c.classList.add("hidden");
		return;
	}

	let pe = p[0];
	let se = s[0];
	let rl = Math.max(pe.dataset.level, se.dataset.level);
	let cn = (pe.dataset.lupine > 0 ? "Lupine" : null) ?? (pe.dataset.ursine > 0 ? "Ursine" : null) ?? (pe.dataset.corvine > 0 ? "Corvine" : null);

	// display
	c.querySelector("span.level").textContent = rl;
	c.querySelector("span.charm").textContent = cn;
	c.querySelector("span.prefix").textContent = pe.dataset.name;
	c.querySelector("span.suffix").textContent = se.dataset.name;
	c.querySelector("span.stat1").textContent = pe.dataset.stats;
	c.querySelector("span.stat2").textContent = se.dataset.stats;
	c.classList.remove("hidden");
}
