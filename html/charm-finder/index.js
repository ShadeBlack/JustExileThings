// when ready
document.addEventListener("DOMContentLoaded", () => {
	// get prepped json file
	fetch("charm-mods.json")
		.then((r) => r.json())
		.then((d) => {
			// Do something with the JSON data
			console.log(d);
		})
		.catch((e) => console.error("Error fetching JSON:", e));

	// let l = document.getElementById("links");
	// links.forEach((e) => {
	// 	let en = e.name;
	// 	let eu = e.url;
	// 	let ei = e.img;
	// 	let cl = [
	// 		// prevent array collapse to one line
	// 		"py-6",
	// 		"px-3",
	// 		"rounded",
	// 		"border-2",
	// 		"border-gray-800",
	// 		"hover:border-gray-700",
	// 		"hover:text-yellow-200",
	// 		"transition-all",
	// 		"cursor-pointer",
	// 		"bg-cover",
	// 		"bg-center",
	// 	];
	// 	let a = document.createElement("a");
	// 	a.style.backgroundImage = `linear-gradient(160deg, rgba(255,255,255,.4) 0%, rgba(0,0,0,0) 60%), url('img/${ei}.webp')`;
	// 	a.classList.add(...cl);
	// 	a.innerHTML = en;
	// 	a.href = eu;
	// 	l.append(a);
	// });
});
