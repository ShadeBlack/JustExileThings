// vars
let heads = [];
let rooms = [];
let sorti = 5;
const tiers = {
	S: {
		value: 0,
		colour: "bg-green-500",
	},
	A: {
		value: 1,
		colour: "bg-teal-500",
	},
	B: {
		value: 2,
		colour: "bg-blue-500",
	},
	C: {
		value: 3,
		colour: "bg-purple-500",
	},
	D: {
		value: 4,
		colour: "bg-red-500",
	},
	"": {
		value: 5,
		colour: "bg-gray-500",
	},
};
const clearb64 =
	"W3siMSI6IiJ9LHsiMiI6IiJ9LHsiMyI6IiJ9LHsiNCI6IiJ9LHsiNSI6IiJ9LHsiNiI6IiJ9LHsiNyI6IiJ9LHsiOCI6IiJ9LHsiOSI6IiJ9LHsiMTAiOiIifSx7IjExIjoiIn0seyIxMiI6IiJ9LHsiMTMiOiIifSx7IjE0IjoiIn0seyIxNSI6IiJ9LHsiMTYiOiIifSx7IjE3IjoiIn0seyIxOCI6IiJ9LHsiMTkiOiIifSx7IjIwIjoiIn0seyIyMSI6IiJ9LHsiMjIiOiIifSx7IjIzIjoiIn0seyIyNCI6IiJ9LHsiMjUiOiIifSx7IjI2IjoiIn0seyIyNyI6IiJ9LHsiMjgiOiIifSx7IjI5IjoiIn0seyIzMCI6IiJ9LHsiMzEiOiIifSx7IjMyIjoiIn0seyIzMyI6IiJ9LHsiMzQiOiIifSx7IjM1IjoiIn0seyIzNiI6IiJ9LHsiMzciOiIifSx7IjM4IjoiIn0seyIzOSI6IiJ9LHsiNDAiOiIifSx7IjQxIjoiIn0seyI0MiI6IiJ9LHsiNDMiOiIifSx7IjQ0IjoiIn0seyI0NSI6IiJ9LHsiNDYiOiIifSx7IjQ3IjoiIn0seyI0OCI6IiJ9LHsiNDkiOiIifSx7IjUwIjoiIn0seyI1MSI6IiJ9LHsiNTIiOiIifSx7IjUzIjoiIn0seyI1NCI6IiJ9LHsiNTUiOiIifSx7IjU2IjoiIn0seyI1NyI6IiJ9LHsiNTgiOiIifSx7IjU5IjoiIn0seyI2MCI6IiJ9LHsiNjEiOiIifSx7IjYyIjoiIn0seyI2MyI6IiJ9LHsiNjQiOiIifSx7IjY1IjoiIn0seyI2NiI6IiJ9LHsiNjciOiIifSx7IjY4IjoiIn0seyI2OSI6IiJ9LHsiNzAiOiIifSx7IjcxIjoiIn0seyI3MiI6IiJ9LHsiNzMiOiIifSx7Ijc0IjoiIn0seyI3NSI6IiJ9XQ==";
const exampleb64 =
	"W3siMSI6IlMifSx7IjIiOiJTIn0seyIzIjoiUyJ9LHsiMTYiOiJTIn0seyIxNyI6IlMifSx7IjE4IjoiUyJ9LHsiMzciOiJTIn0seyIzOCI6IlMifSx7IjM5IjoiUyJ9LHsiNjciOiJTIn0seyI2OCI6IlMifSx7IjY5IjoiUyJ9LHsiMTMiOiJBIn0seyIxNCI6IkEifSx7IjE1IjoiQSJ9LHsiNDAiOiJBIn0seyI0MSI6IkEifSx7IjQyIjoiQSJ9LHsiNDMiOiJBIn0seyI0NCI6IkEifSx7IjQ1IjoiQSJ9LHsiNTgiOiJBIn0seyI1OSI6IkEifSx7IjYwIjoiQSJ9LHsiNzAiOiJBIn0seyI3MSI6IkEifSx7IjcyIjoiQSJ9LHsiNyI6IkIifSx7IjgiOiJCIn0seyI5IjoiQiJ9LHsiMTkiOiJCIn0seyIyMCI6IkIifSx7IjIxIjoiQiJ9LHsiMjgiOiJCIn0seyIyOSI6IkIifSx7IjMwIjoiQiJ9LHsiMzQiOiJCIn0seyIzNSI6IkIifSx7IjM2IjoiQiJ9LHsiNTIiOiJCIn0seyI1MyI6IkIifSx7IjU0IjoiQiJ9LHsiNjQiOiJCIn0seyI2NSI6IkIifSx7IjY2IjoiQiJ9LHsiMTAiOiJDIn0seyIxMSI6IkMifSx7IjEyIjoiQyJ9LHsiMjUiOiJDIn0seyIyNiI6IkMifSx7IjI3IjoiQyJ9LHsiNDYiOiJDIn0seyI0NyI6IkMifSx7IjQ4IjoiQyJ9LHsiNDkiOiJDIn0seyI1MCI6IkMifSx7IjUxIjoiQyJ9LHsiNTUiOiJDIn0seyI1NiI6IkMifSx7IjU3IjoiQyJ9LHsiNjEiOiJDIn0seyI2MiI6IkMifSx7IjYzIjoiQyJ9LHsiNCI6IkQifSx7IjUiOiJEIn0seyI2IjoiRCJ9LHsiMjIiOiJEIn0seyIyMyI6IkQifSx7IjI0IjoiRCJ9LHsiMzEiOiJEIn0seyIzMiI6IkQifSx7IjMzIjoiRCJ9LHsiNzMiOiJEIn0seyI3NCI6IkQifSx7Ijc1IjoiRCJ9XQ==";

$(document).ready(() => {
	// fetch csv data
	fetch("temple-rooms.csv")
		.then((response) => response.text())
		.then((csv) => {
			// process
			let rows = csv.split("\n");
			let data = rows.map((row) => row.trim().split(","));

			// test if the last row is empty
			if (data[data.length - 1].length === 1 && data[data.length - 1][0] === "") data.pop();

			// first row is the header
			heads = data[0];
			rooms = data.slice(1);

			// attempt to read tiers from url
			let rc = readCode();

			// else build the grid with blank tiers
			if (!rc) {
				sort();
				grid();
				buildCode();
			}
		})
		.catch((error) => console.error("Error fetching CSV file:", error));

	// search
	$("#inpSearch").on("keyup", (e) => {
		let tv = $(e.currentTarget).val().toLowerCase();
		$("#grid .room").filter((i, v) => {
			$(v).toggle($(v).attr("data-search").toLowerCase().indexOf(tv) > -1);
		});
	});

	// code input select
	$("#inpCode").on("click", () => {
		$("#inpCode").get(0).select();
	});

	// copy
	$("#btnCopy").on("click", (e) => {
		let cv = $("#inpCode").val();
		if (cv) navigator.clipboard.writeText(cv);
	});

	// load
	$("#btnLoad").on("click", (e) => {
		let cv = $("#inpCode").val();
		// set url param c
		let url = new URL(window.location.href);
		url.searchParams.set("c", cv);
		window.history.replaceState({}, "", url);
		// display
		readCode();
	});

	// clear
	$("#btnClear").on("click", (e) => {
		// set url param c
		let url = new URL(window.location.href);
		url.searchParams.set("c", clearb64);
		window.history.replaceState({}, "", url);
		// display
		readCode();
	});

	// example
	$("#btnExample").on("click", (e) => {
		// set url param c
		let url = new URL(window.location.href);
		url.searchParams.set("c", exampleb64);
		window.history.replaceState({}, "", url);
		// display
		readCode();
	});
});

function grid() {
	// clear the grid
	$("#grid").empty();

	// create divs for each header
	$.each(heads, (i, v) => {
		// sort indicator
		let si = sorti === heads.indexOf(v) ? " 🔽" : "";
		// if first element, hide
		let h = i === 0 ? "hidden" : "";

		// div is hidden on mobile if not room name or tier
		h += i === 3 || i === 5 ? "" : " max-lg:hidden";

		// column headers
		$("#grid").append(`
			<div class="btnSort ${h} px-2 py-1 bg-slate-800 sticky top-0 text-gray-50 cursor-pointer hover:brightness-125 whitespace-nowrap">
				${v}${si}
			</div>
		`);
	});

	// create divs for each row
	$.each(rooms, (i, room) => {
		// id of room
		let id = room[0];
		// tier colour
		let rt = room[5];
		let bg = tiers[rt].colour;
		// bold if level 3
		let l3 = room[2] === "3" ? "font-bold" : "";
		// set opacity based on mod 2
		let co = i % 2 === 0 ? "bg-opacity-50" : "bg-opacity-40";
		// create search data attribute from each cell, except from the id
		let sd = "";
		$.each(room, (i, cell) => {
			if (i === 0) return;
			sd += cell.toLowerCase() + " ";
		});
		// create divs for each cell in the row
		$.each(room, (i, cell) => {
			// if first element, continue
			if (i === 0) return;
			// if last element, add edit pencil emoji
			if (i === 5) cell += "<span class='text-xs pl-2'>📝</span>";
			// edit button on tier cell
			let be = i === 5 ? "btnEdit cursor-pointer hover:brightness-125" : "";
			let tt =
				i === 5
					? `
				data-tippy-content="Set tier:
				<div class='border divide-x flex cursor-pointer' data-roomid='${id}'>
					<div class='btnSetTier px-3 bg-green-500/50 hover:brightness-125'>S</div>
					<div class='btnSetTier px-3 bg-teal-500/50 hover:brightness-125'>A</div>
					<div class='btnSetTier px-3 bg-blue-500/50 hover:brightness-125'>B</div>
					<div class='btnSetTier px-3 bg-purple-500/50 hover:brightness-125'>C</div>
					<div class='btnSetTier px-3 bg-red-500/50 hover:brightness-125'>D</div>
				</div>"
			`
					: "";
			// if level or tier, center text
			let ct = i === 2 || i === 5 ? "text-center" : "";

			// div is hidden on mobile if not room name or tier
			let h = i === 3 || i === 5 ? "" : "max-lg:hidden";

			// set cell opacity based on mod 2
			$("#grid").append(`<div class="room ${be} ${h} px-2 py-1 whitespace-nowrap ${ct} ${co} ${bg} ${l3}" ${tt} data-search='${sd}'>${cell}</div>`);
		});
	});

	bind();
}

function sort() {
	// vars
	let si = sorti;
	let tv = tiers;

	// if sorting by tier, use respective values
	if (si === 5) {
		rooms.sort((a, b) => tv[a[si]].value - tv[b[si]].value);
		return;
	}

	// sort the rooms array
	rooms.sort((a, b) => {
		if (a[si] < b[si]) return -1;
		if (a[si] > b[si]) return 1;
		return 0;
	});
}

function bind() {
	// sort
	$(".btnSort").on("click", (e) => {
		// get the index of the header
		let i = $(e.currentTarget).index();
		sorti = i;
		sort();
		grid();
	});

	// tooltips
	tippy("[data-tippy-content]", {
		placement: "left",
		allowHTML: true,
		interactive: true,
		onShown(tip) {
			// edit tier
			$(".btnSetTier").on("click", (e) => {
				// get the id of the room
				let ct = $(e.currentTarget);
				let nt = ct.text();
				let pt = ct.parent();
				let id = pt.attr("data-roomid");
				let ri = rooms.findIndex((r) => r[0] === id);
				// if not null, update
				if (nt !== null) {
					rooms[ri][5] = nt;
					sort();
					grid();
					buildCode();
					$("#inpSearch").trigger("keyup");
				}
			});
		},
	});
}

function buildCode() {
	// map id to tier
	let m = rooms.map((i, v) => {
		return { [i[0]]: i[5] };
	});
	// encode
	let e = btoa(JSON.stringify(m));
	// display
	$("#inpCode").val(e);
	// set url param b64
	let url = new URL(window.location.href);
	url.searchParams.set("c", e);
	window.history.replaceState({}, "", url);
}

function readCode() {
	// get url param b64
	let url = new URL(window.location.href);
	let b64 = url.searchParams.get("c");
	if (!b64) return false;
	// decode
	let r = JSON.parse(atob(b64));
	// process
	if (r) {
		// update rooms
		$.each(r, (i, v) => {
			let ri = rooms.findIndex((r) => r[0] === Object.keys(v)[0]);
			rooms[ri][5] = Object.values(v)[0];
		});
		// display
		sort();
		grid();
		buildCode();
	}
	return true;
}
