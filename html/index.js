const links = [
	{
		name: "Incursion Planner",
		url: "incursion-planner",
		img: "incursion",
	},
	{
		name: "Sentinel Planner",
		url: "sentinel-planner",
		img: "sentinel",
	},
	{
		name: "Charm Finder",
		url: "charm-finder",
		img: "primalist",
	},
];

const badges = [
	{
		label: "Github Repo",
		src: "github-mark-white.svg",
		url: "https://github.com/ShadeBlack/JustExileThings",
	},
	{
		label: "Buy Me A Coffee",
		src: "buymeacoffee.png",
		url: "https://buymeacoffee.com/ShadeBlack",
	},
];

// when ready
document.addEventListener("DOMContentLoaded", () => {
	let l = document.getElementById("links");
	links.forEach((e) => {
		let en = e.name;
		let eu = e.url;
		let ei = e.img;
		let cl = [
			// prevent array collapse to one line
			"py-6",
			"px-3",
			"rounded",
			"border-2",
			"border-gray-800",
			"hover:border-gray-700",
			"hover:text-yellow-200",
			"transition-all",
			"cursor-pointer",
			"bg-cover",
			"bg-center",
		];
		let a = document.createElement("a");
		a.style.backgroundImage = `linear-gradient(160deg, rgba(255,255,255,.4) 0%, rgba(0,0,0,0) 60%), url('img/${ei}.webp')`;
		a.classList.add(...cl);
		a.innerHTML = en;
		a.href = eu;
		l.append(a);
	});

	let b = document.getElementById("badges");
	badges.forEach((e) => {
		let bl = e.label;
		let bs = e.src;
		let bu = e.url;
		let h = `
			<!-- badge: ${bl} -->
			<a href="${bu}" target="_blank" class="inline-block">
				<div class="p-2 rounded border-2 border-gray-800 hover:border-gray-700 bg-white/10 hover:bg-white/20 transition-colors">
					<div class="flex">
						<img src="img/${bs}" alt="${bl} Icon" class="h-6 w-6 rounded-full" />
						<div class="pl-2 text-sm self-center">${bl}</div>
					</div>
				</div>
			</a>
		`;
		b.innerHTML += h;
	});
});
