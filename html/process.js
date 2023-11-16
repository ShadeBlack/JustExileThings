// data
const nodes = [
	{
		tip: "",
		top: 163,
		left: 300,
		size: 1,
		points: 0,
		connects: ["l165338"],
	},
	{
		tip: "Apex Sentinel slot",
		top: 195,
		left: 186,
		size: 3,
		points: 3,
		connects: ["l260206", "l270221", "l260237"],
	},
	{
		tip: "Stalker Sentinel slot",
		top: 135,
		left: 402,
		size: 3,
		points: 3,
		connects: ["l128380", "l106380", "l85380"],
	},
	{
		tip: "Pandemonium Sentinel slot",
		top: 195,
		left: 618,
		size: 3,
		points: 3,
		connects: ["l260639", "l270654", "l260670"],
	},
	{
		tip: "Sentinels have 10% increased duration",
		top: 266,
		left: 370,
		size: 1,
		points: 1,
		connects: ["l165338", "l272390", "l285376"],
	},
	{
		tip: "Sentinels have 15% increased cast speed",
		top: 266,
		left: 429,
		size: 1,
		points: 1,
		connects: ["l272390", "l280435", "l272450"],
	},
	{
		tip: "Sentinels have 15% increased cast speed",
		top: 266,
		left: 574,
		size: 1,
		points: 1,
		connects: ["l272450", "l285580"],
	},
	{
		tip: "Stalker Sentinels have 25% increased cast speed",
		top: 367,
		left: 429,
		size: 1,
		points: 1,
		connects: ["l280435", "l373450", "l390435"],
	},
	{
		tip: "Stalker Sentinel beams chain an additional time",
		top: 357,
		left: 505,
		size: 2,
		points: 1,
		connects: ["l373450", "l400520"],
	},
	{
		tip: "Sentinels have 15% chance to not consume charge on use",
		top: 357,
		left: 564,
		size: 2,
		points: 1,
		connects: ["l285580", "l400580"],
	},
	{
		tip: "Sentinels have 15% increased duration",
		top: 387,
		left: 370,
		size: 1,
		points: 1,
		connects: ["l393345", "l285376", "l410376"],
	},
	{
		tip: "Empowered monsters grant 30% increased Sentinel Power",
		top: 375,
		left: 301,
		size: 2,
		points: 1,
		connects: ["l345318", "l393345", "l420318"],
	},
	{
		tip: "Sentinels have 15% increased duration",
		top: 325,
		left: 312,
		size: 1,
		points: 1,
		connects: ["l297270", "l345318"],
	},
	{
		tip: "Apex Sentinels have 25% increased duration",
		top: 325,
		left: 213,
		size: 1,
		points: 1,
		connects: ["l307180", "l297270", "l345219"],
	},
	{
		tip: "Apex Sentinels sap enemies for 5 seconds with maximum effect on empowering them",
		top: 312,
		left: 113,
		size: 2,
		points: 1,
		connects: ["l307180", "l350130"],
	},
	{
		tip: "Apex Sentinels have 25% increased cast speed",
		top: 387,
		left: 213,
		size: 1,
		points: 1,
		connects: ["l345219", "l400232"],
	},
	{
		tip: "Apex Sentinels have 10% chance to not consume Charge on use",
		top: 387,
		left: 124,
		size: 1,
		points: 1,
		connects: ["l350130", "l410130"],
	},
	{
		tip: "Apex Sentinels can be re-deployed after being dismissed",
		top: 443,
		left: 113,
		size: 2,
		points: 1,
		connects: ["l410130", "l475165"],
	},
	{
		tip: "Apex Sentinels can Empower and additional Enemy",
		top: 443,
		left: 236,
		size: 2,
		points: 1,
		connects: ["l400232", "l485255"],
	},
	{
		tip: "Stalker Sentinels have a 10% chance to duplicate non-unique Enemies when they are Empowered",
		top: 443,
		left: 359,
		size: 2,
		points: 1,
		connects: ["l410376", "l485376"],
	},
	{
		tip: "Stalker Sentinels fire an additional Beam",
		top: 443,
		left: 418,
		size: 2,
		points: 1,
		connects: ["l390435", "l485435"],
	},
	{
		tip: "Stalker Sentinels have 25% increased Cast Speed",
		top: 454,
		left: 514,
		size: 1,
		points: 1,
		connects: ["l400520", "l470520"],
	},
	{
		tip: "Sentinels have 15% increased Cast Speed",
		top: 454,
		left: 574,
		size: 1,
		points: 1,
		connects: ["l400580", "l475580"],
	},
	{
		tip: "Pandemonium Sentinels have 25% increased Cast Speed",
		top: 454,
		left: 645,
		size: 1,
		points: 1,
		connects: ["l340651", "l460595", "l460665"],
	},
	{
		tip: "Pandemonium Sentinels have 25% increased Chaining range",
		top: 454,
		left: 728,
		size: 1,
		points: 1,
		connects: ["l420735", "l460665", "l470735"],
	},
	{
		tip: "Pandemonium Sentinels have 25% increased duration",
		top: 324,
		left: 645,
		size: 1,
		points: 1,
		connects: ["l330665", "l340651"],
	},
	{
		tip: "Pandemonium Sentinels restore all of the Character's Flask Charges on Deployment<br>Pandemonium Sentinels grant maximum Vaal Souls to one of the character's Vaal Skills on Deployment",
		top: 312,
		left: 718,
		size: 2,
		points: 1,
		connects: ["l330665"],
	},
	{
		tip: "Pandemonium Sentinels fire and additional Beam<br>Pandemonium Sentinel Beams chain +2 times",
		top: 375,
		left: 718,
		size: 2,
		points: 1,
		connects: ["l420735"],
	},
	{
		tip: "Apex Sentinels have 10% chance to not consume Charge on use",
		top: 528,
		left: 184,
		size: 1,
		points: 1,
		connects: ["l475165", "l534205"],
	},
	{
		tip: "Apex Sentinels have 25% increased Cast Speed",
		top: 528,
		left: 249,
		size: 1,
		points: 1,
		connects: ["l534205", "l485255", "l534270", "l550255"],
	},
	{
		tip: "Sentinels have 15% increased Cast Speed",
		top: 528,
		left: 312,
		size: 1,
		points: 1,
		connects: ["l534270", "l420318", "l534330"],
	},
	{
		tip: "Stalker Sentinels have 10% increased chance to add Rewards",
		top: 528,
		left: 370,
		size: 1,
		points: 1,
		connects: ["l534330", "l485376", "l534390", "l550376"],
	},
	{
		tip: "Stalker Sentinels have 10% chance to not consume Charge on use",
		top: 528,
		left: 429,
		size: 1,
		points: 1,
		connects: ["l534390", "l485435", "l534450", "l550435"],
	},
	{
		tip: "15% increased number of Enemies Empowered by Stalker Sentinels",
		top: 518,
		left: 504,
		size: 2,
		points: 1,
		connects: ["l534450", "l470520", "l534545"],
	},
	{
		tip: "Sentinels have 15% increased duration",
		top: 528,
		left: 574,
		size: 1,
		points: 1,
		connects: ["l534545", "l475580", "l534595", "l550580"],
	},
	{
		tip: "10% increased number of Enemies Empowered by Pandemonium Sentinels",
		top: 528,
		left: 644,
		size: 1,
		points: 1,
		connects: ["l534595", "l534665", "l540651"],
	},
	{
		tip: "15% increased number of Enemies Empowered by Pandemonium Sentinels",
		top: 518,
		left: 718,
		size: 2,
		points: 1,
		connects: ["l534665", "l470735"],
	},
	{
		tip: "Apex Sentinels do not Empower Rare rarity enemies<br>Apex Sentinels grant 30% increased Rewards",
		top: 596,
		left: 135,
		size: 2,
		points: 2,
		connects: ["l560200", "l580200"],
	},
	{
		tip: "Stalker Sentinels do not Empower Normal rarity enemies",
		top: 596,
		left: 294,
		size: 2,
		points: 2,
		connects: ["l585350", "l605350"],
	},
	{
		tip: "Found Normal-rarity Sentinels from Monsters you kill are upgraded to Magic rarity<br>Found Normal-rarity Sentinels from Chests you open are upgraded to Magic rarity",
		top: 596,
		left: 476,
		size: 2,
		points: 1,
		connects: ["l614520", "l640493"],
	},
	{
		tip: "Pandemonium Sentinels spawn packs of Monsters on Deployment",
		top: 596,
		left: 717,
		size: 2,
		points: 1,
		connects: ["l614665", "l640735"],
	},
	{
		tip: "Apex Sentinels have 10% increased Empowerment",
		top: 608,
		left: 249,
		size: 1,
		points: 1,
		connects: ["l550255", "l630255"],
	},
	{
		tip: "Stalker Sentinels have 10% increased chance to add Rewards",
		top: 608,
		left: 370,
		size: 1,
		points: 1,
		connects: ["l550376"],
	},
	{
		tip: "10% chance for found Power Cores to be Duplicated",
		top: 608,
		left: 429,
		size: 1,
		points: 1,
		connects: ["l550435", "l630435"],
	},
	{
		tip: "8% chance for found Sentinels to be Duplicated",
		top: 608,
		left: 574,
		size: 1,
		points: 1,
		connects: ["l614520", "l550580"],
	},
	{
		tip: "Pandemonium Sentinels have a 10% chance to not consume Charge on use",
		top: 608,
		left: 644,
		size: 1,
		points: 1,
		connects: ["l540651", "l614665", "l630651"],
	},
	{
		tip: "Apex Sentinels have 10% increased Empowerment",
		top: 682,
		left: 249,
		size: 1,
		points: 1,
		connects: ["l630255", "l687260", "l700255"],
	},
	{
		tip: "Sentinels have 10% increased Empowerment",
		top: 682,
		left: 312,
		size: 1,
		points: 1,
		connects: ["l687260", "l687330", "l700318"],
	},
	{
		tip: "8% chance for found Sentinels to be Duplicated",
		top: 682,
		left: 487,
		size: 1,
		points: 1,
		connects: ["l687460", "l640493", "l700493"],
	},
	{
		tip: "Pandemonium Sentinels have a 10% chance to not consume Charge on use",
		top: 682,
		left: 644,
		size: 1,
		points: 1,
		connects: ["l630651"],
	},
	{
		tip: "Rewards are 15% more likely to be Sentinel Rewards",
		top: 682,
		left: 728,
		size: 1,
		points: 1,
		connects: ["l675698", "l640735"],
	},
	{
		tip: "20% Chance for found Power Cores to be Duplicated",
		top: 672,
		left: 418,
		size: 2,
		points: 1,
		connects: ["l687330", "l630435", "l687460"],
	},
	{
		tip: "Pandemonium Sentinels can be Deployed an additional time each area",
		top: 672,
		left: 564,
		size: 2,
		points: 2,
		connects: ["l655630", "l675630"],
	},
	{
		tip: "Enemies Empowered by Apex Sentinels have 20% for Rewards to be doubled<br>Enemies Empowered by Apex Sentinels have Onslaught",
		top: 740,
		left: 175,
		size: 2,
		points: 1,
		connects: ["l757220"],
	},
	{
		tip: "Sentinels have 20% increased Empowerment",
		top: 740,
		left: 301,
		size: 2,
		points: 1,
		connects: ["l700318"],
	},
	{
		tip: "Rewards are 30% more likely to be Sentinel Rewards",
		top: 740,
		left: 634,
		size: 2,
		points: 1,
		connects: ["l757510", "l675698"],
	},
	{
		tip: "Enemies Empowered by Apex Sentinels have 10% for Rewards to be doubled<br>Enemies Empowered by Apex Sentinels have +10% to all Resistances",
		top: 751,
		left: 249,
		size: 1,
		points: 1,
		connects: ["l757220", "l700255"],
	},
	{
		tip: "Rewards are 15% more likely to be Sentinel Rewards",
		top: 751,
		left: 487,
		size: 1,
		points: 1,
		connects: ["l700493", "l757510"],
	},
	{
		tip: "Rewards are more likely to be less common types",
		top: 816,
		left: 418,
		size: 2,
		points: 2,
		connects: ["l755460", "l755480"],
	},
];

const lines = [
	{
		top: 165,
		left: 338,
		width: 14,
		height: 120,
		angle: -35,
		connects: ["l85380", "l106380", "l128380", "l272390", "l285376"],
	},
	{
		top: 400,
		left: 232,
		width: 14,
		height: 50,
		angle: -30,
		connects: ["l485255", "l345219"],
	},
	{
		top: 475,
		left: 165,
		width: 14,
		height: 70,
		angle: -40,
		connects: ["l534205", "l410130"],
	},
	{
		top: 675,
		left: 698,
		width: 14,
		height: 100,
		angle: 50,
		connects: ["l757510", "l640735"],
	},
	{
		top: 272,
		left: 390,
		width: 55,
		height: 14,
		connects: ["l165338", "l285376", "l280435", "l272450"],
	},
	{
		top: 272,
		left: 450,
		width: 130,
		height: 14,
		connects: ["l272390", "l280435", "l285580"],
	},
	{
		// top: 330,
		// left: 155,
		top: 307,
		left: 180,
		width: 14,
		height: 60,
		angle: 90,
		connects: ["l260206", "l270221", "l260237", "l350130"],
	},
	{
		// top: 330,
		// left: 235,
		top: 297,
		left: 270,
		width: 14,
		height: 80,
		angle: 90,
		connects: ["l307180", "l260206", "l270221", "l260237", "l345219", "l345318"],
	},
	{
		top: 330,
		left: 665,
		width: 60,
		height: 14,
		connects: ["l340651", "l260639", "l270654", "l260670"],
	},
	{
		top: 460,
		left: 665,
		width: 70,
		height: 14,
		connects: ["l460595", "l340651", "l420735", "l470735"],
	},
	{
		top: 534,
		left: 665,
		width: 70,
		height: 14,
		connects: ["l534595", "l540651", "l470735"],
	},
	{
		top: 614,
		left: 665,
		width: 70,
		height: 14,
		connects: ["l540651", "l630651", "l640735"],
	},
	{
		top: 614,
		left: 520,
		width: 60,
		height: 14,
		connects: ["l550580", "l640493"],
	},
	{
		top: 757,
		left: 510,
		width: 130,
		height: 14,
		connects: ["l700493", "l755460", "l755480", "l675698"],
	},
	{
		top: 757,
		left: 220,
		width: 40,
		height: 14,
		connects: ["l700255"],
	},
	{
		top: 687,
		left: 260,
		width: 60,
		height: 14,
		connects: ["l630255", "l700255", "l700318", "l687330"],
	},
	{
		top: 687,
		left: 330,
		width: 100,
		height: 14,
		connects: ["l687260", "l700318", "l630435", "l687460"],
	},
	{
		top: 687,
		left: 460,
		width: 30,
		height: 14,
		connects: ["l687330", "l630435", "l640493", "l700493"],
	},
	{
		top: 393,
		left: 345,
		width: 30,
		height: 14,
		connects: ["l345318", "l420318", "l410376", "l285376"],
	},
	{
		top: 373,
		left: 450,
		width: 60,
		height: 14,
		connects: ["l400520", "l390435", "l280435"],
	},
	{
		top: 534,
		left: 205,
		width: 50,
		height: 14,
		connects: ["l475165", "l485255", "l534270", "l550255"],
	},
	{
		top: 534,
		left: 270,
		width: 50,
		height: 14,
		connects: ["l534205", "l485255", "l550255", "l420318", "l534330"],
	},
	{
		top: 534,
		left: 330,
		width: 45,
		height: 14,
		connects: ["l534270", "l420318", "l485376", "l534390", "l550376"],
	},
	{
		top: 534,
		left: 390,
		width: 45,
		height: 14,
		connects: ["l534330", "l485376", "l550376", "l485435", "l534450", "l550435"],
	},
	{
		top: 534,
		left: 450,
		width: 60,
		height: 14,
		connects: ["l534390", "l485435", "l550435", "l470520", "l534545"],
	},
	{
		top: 534,
		left: 545,
		width: 35,
		height: 14,
		connects: ["l534450", "l470520", "l475580", "l534595", "l550580"],
	},
	{
		top: 534,
		left: 595,
		width: 55,
		height: 14,
		connects: ["l534545", "l475580", "l550580", "l534665", "l540651"],
	},
	{
		top: 460,
		left: 595,
		width: 55,
		height: 14,
		connects: ["l400580", "l475580", "l340651", "l460665"],
	},
	{
		top: 350,
		left: 130,
		width: 14,
		height: 40,
		connects: ["l307180", "l410130"],
	},
	{
		top: 410,
		left: 130,
		width: 14,
		height: 40,
		connects: ["l350130", "l475165"],
	},
	{
		top: 345,
		left: 219,
		width: 14,
		height: 50,
		connects: ["l307180", "l260206", "l270221", "l260237", "l297270", "l400232"],
	},
	{
		top: 345,
		left: 318,
		width: 14,
		height: 50,
		connects: ["l297270", "l393345", "l420318"],
	},
	{
		top: 420,
		left: 318,
		width: 14,
		height: 115,
		connects: ["l345318", "l393345", "l534270", "l534330"],
	},
	{
		top: 485,
		left: 255,
		width: 14,
		height: 50,
		connects: ["l400232", "l534205", "l534270", "l550255"],
	},
	{
		top: 550,
		left: 255,
		width: 14,
		height: 65,
		connects: ["l485255", "l534205", "l534270", "l560200", "l580200", "l630255"],
	},
	{
		top: 630,
		left: 255,
		width: 14,
		height: 60,
		connects: ["l550255", "l560200", "l580200", "l700255", "l687260"],
	},
	{
		top: 700,
		left: 255,
		width: 14,
		height: 60,
		connects: ["l757220", "l630255", "l687260"],
	},
	{
		top: 700,
		left: 318,
		width: 14,
		height: 60,
		connects: ["l687260", "l687330"],
	},
	{
		top: 285,
		left: 376,
		width: 14,
		height: 110,
		connects: ["l165338", "l272390", "l393345", "l410376"],
	},
	{
		top: 410,
		left: 376,
		width: 14,
		height: 40,
		connects: ["l285376", "l393345", "l485376"],
	},
	{
		top: 485,
		left: 376,
		width: 14,
		height: 50,
		connects: ["l410376", "l534330", "l534390", "l550376"],
	},
	{
		top: 550,
		left: 376,
		width: 14,
		height: 65,
		connects: ["l485376", "l534330", "l534390", "l585350", "l605350"],
	},
	{
		top: 280,
		left: 435,
		width: 14,
		height: 90,
		connects: ["l272390", "l272450", "l373450", "l390435"],
	},
	{
		top: 390,
		left: 435,
		width: 14,
		height: 60,
		connects: ["l280435", "l373450", "l485435"],
	},
	{
		top: 485,
		left: 435,
		width: 14,
		height: 50,
		connects: ["l390435", "l534390", "l534450", "l550435"],
	},
	{
		top: 550,
		left: 435,
		width: 14,
		height: 65,
		connects: ["l485435", "l534390", "l534450", "l630435"],
	},
	{
		top: 630,
		left: 435,
		width: 14,
		height: 45,
		connects: ["l550435", "l687330", "l687460"],
	},
	{
		top: 285,
		left: 580,
		width: 14,
		height: 80,
		connects: ["l272450", "l400580"],
	},
	{
		top: 400,
		left: 580,
		width: 14,
		height: 60,
		connects: ["l285580", "l460595", "l475580"],
	},
	{
		top: 475,
		left: 580,
		width: 14,
		height: 60,
		connects: ["l400580", "l460595", "l534545", "l534595", "l550580"],
	},
	{
		top: 550,
		left: 580,
		width: 14,
		height: 65,
		connects: ["l475580", "l534545", "l534595", "l614520"],
	},
	{
		top: 400,
		left: 520,
		width: 14,
		height: 60,
		connects: ["l373450", "l470520"],
	},
	{
		top: 470,
		left: 520,
		width: 14,
		height: 60,
		connects: ["l400520", "l534450", "l534545"],
	},
	{
		top: 340,
		left: 651,
		width: 14,
		height: 120,
		connects: ["l260639", "l270654", "l260670", "l330665", "l460595", "l460665"],
	},
	{
		top: 540,
		left: 651,
		width: 14,
		height: 80,
		connects: ["l534595", "l534665", "l614665", "l630651"],
	},
	{
		top: 630,
		left: 651,
		width: 14,
		height: 60,
		connects: ["l540651", "l614665", "l655630", "l675630"],
	},
	{
		top: 420,
		left: 735,
		width: 14,
		height: 40,
		connects: ["l460665", "l470735"],
	},
	{
		top: 470,
		left: 735,
		width: 14,
		height: 55,
		connects: ["l420735", "l460665", "l534665"],
	},
	{
		top: 640,
		left: 735,
		width: 14,
		height: 55,
		connects: ["l614665", "l675698"],
	},
	{
		top: 640,
		left: 493,
		width: 14,
		height: 55,
		connects: ["l614520", "l687460", "l700493"],
	},
	{
		top: 700,
		left: 493,
		width: 14,
		height: 55,
		connects: ["l640493", "l687460", "l757510", "l755460", "l755480"],
	},
	{
		top: 270,
		left: 221,
		width: 8,
		height: 60,
		angle: 0,
		connects: ["l260206", "l260237", "l307180", "l297270", "l345219"],
	},
	{
		top: 260,
		left: 206,
		width: 8,
		height: 80,
		angle: -12,
		connects: ["l270221", "l260237", "l307180", "l345219", "l297270"],
	},
	{
		top: 260,
		left: 237,
		width: 8,
		height: 80,
		angle: 12,
		connects: ["l260206", "l270221", "l307180", "l345219", "l297270"],
	},
	{
		top: 270,
		left: 654,
		width: 8,
		height: 60,
		angle: 0,
		connects: ["l260639", "l260670", "l340651", "l330665"],
	},
	{
		top: 260,
		left: 639,
		width: 8,
		height: 80,
		angle: -12,
		connects: ["l270654", "l260670", "l340651", "l330665"],
	},
	{
		top: 260,
		left: 670,
		width: 8,
		height: 80,
		angle: 12,
		connects: ["l260639", "l270654", "l340651", "l330665"],
	},
	{
		top: 560,
		left: 200,
		width: 8,
		height: 100,
		angle: -85,
		connects: ["l580200", "l550255", "l630255"],
	},
	{
		top: 580,
		left: 200,
		width: 8,
		height: 100,
		angle: 85,
		connects: ["l560200", "l550255", "l630255"],
	},
	{
		top: 585,
		left: 350,
		width: 8,
		height: 50,
		angle: -85,
		connects: ["l605350", "l550376"],
	},
	{
		top: 605,
		left: 350,
		width: 8,
		height: 50,
		angle: 85,
		connects: ["l585350", "l550376"],
	},
	{
		top: 655,
		left: 630,
		width: 8,
		height: 60,
		angle: -85,
		connects: ["l675630", "l630651"],
	},
	{
		top: 675,
		left: 630,
		width: 8,
		height: 60,
		angle: 85,
		connects: ["l655630", "l630651"],
	},
	{
		top: 755,
		left: 480,
		width: 8,
		height: 90,
		angle: 35,
		connects: ["l755460", "l700493", "l757510"],
	},
	{
		top: 755,
		left: 460,
		width: 8,
		height: 80,
		angle: 40,
		connects: ["l755480", "l700493", "l757510"],
	},
	{
		top: 85,
		left: 380,
		width: 8,
		height: 140,
		angle: 260,
		connects: ["l165338"],
	},
	{
		top: 106,
		left: 380,
		width: 8,
		height: 140,
		angle: 90,
		connects: ["l165338"],
	},
	{
		top: 128,
		left: 380,
		width: 8,
		height: 140,
		angle: 100,
		connects: ["l165338"],
	},
];
let clicked = [];

// when ready
document.addEventListener("DOMContentLoaded", () => {
	addNodes();
	addLines();
	tooltips();
	loadLines();
	powerNodes();

	// copy
	document.getElementById("btnCopy").addEventListener("click", (e) => {
		let t = e.currentTarget;
		let ic = document.getElementById("inpCode");
		let cv = ic.value;
		if (cv) navigator.clipboard.writeText(cv);
	});
});

function addNodes() {
	// vars
	const map = document.getElementById("map");

	// process nodes
	nodes.forEach((node) => {
		// vars
		let ne = document.createElement("div");
		let id = `n${node.top}${node.left}`;
		let d = node.d ? "bg-red-400" : "";
		let ch = node.tip ? "cursor-help" : "";
		// modify the node
		ne.className = `
			node absolute rounded-full z-20 ${ch} s${node.size}
			transition-colors border
			bg-gray-950 border-gray-600 ${d}
			hover:bg-sky-500 hover:border-blue-950`;
		ne.style.top = `${node.top}px`;
		ne.style.left = `${node.left}px`;
		ne.setAttribute("id", id);
		ne.setAttribute("data-points", node.points);
		if (node.tip) ne.setAttribute("data-tippy-content", node.tip);

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
		let le = document.createElement("div");
		let id = `l${line.top}${line.left}`;
		let bg = "brightness-[.4] from-slate-900 via-sky-900 to-slate-900";
		if (line.powered) bg = "powered from-sky-900 via-sky-300 to-sky-900";
		// modify the line
		le.className = `
			line z-10 absolute cursor-pointer transition-colors
			bg-gradient-to-r ${bg}
			hover:brightness-125`;
		le.style.top = `${line.top}px`;
		le.style.left = `${line.left}px`;
		le.style.width = `${line.width}px`;
		le.style.height = `${line.height}px`;
		le.style.transform = `rotate(${line.angle}deg)`;
		le.setAttribute("id", id);
		le.addEventListener("click", (e) => {
			let t = e.currentTarget;
			// let id = t.getAttribute("id");
			// clicked.push(id);
			// console.log(clicked);
			let lt = parseInt(t.style.top);
			let ll = parseInt(t.style.left);
			let lo = lines.filter((i, v) => i.top == lt && i.left == ll)[0];
			let lc = lo["connects"];
			if (!lc || !lc.length) return;
			// toggle powered state
			let cl = ["brightness-[.4]", "from-slate-900", "via-sky-900", "to-slate-900", "from-sky-900", "via-sky-300", "to-sky-900", "powered"];
			cl.forEach((c) => t.classList.toggle(c));
			linesToURL();
			powerNodes();
		});

		// add
		map.appendChild(le);
	});
}

function linesToURL() {
	let ci = document.getElementById("inpCode");
	let sl = document.querySelectorAll(".line.powered");
	let pl = Array.from(sl)
		.map((e, i) => e.getAttribute("id"))
		.join(",");
	let b64 = btoa(pl);
	window.history.replaceState(null, null, `?pl=${b64}`);
	ci.value = b64;
}

function loadLines() {
	let wls = window.location.search;
	let usp = new URLSearchParams(wls);
	let b64 = usp.get("pl");

	if (b64) {
		console.log("loading: ", b64);

		// vars
		let pl = "";

		// decode
		try {
			pl = atob(b64);
		} catch (e) {
			console.warn("could not properly decode powered line config");
			console.error(e);
			return;
		}

		// to array
		pl = pl.split(",");

		// power each one
		pl.forEach((e) => {
			let de = document.getElementById(e);
			de.click();
		});
	}
}

function powerNodes() {
	let n = document.querySelectorAll(".node");
	let spu = 0;
	let san = [];
	n.forEach((e) => {
		let nst = parseInt(e.style.top);
		let nsl = parseInt(e.style.left);
		let no = nodes.filter((i, v) => i.top == nst && i.left == nsl)[0];
		let nc = no["connects"];
		let np = no["points"];
		let nt = no["tip"];

		if (!nc || !nc.length) return;

		let hp = false;
		if (np > 1) {
			// needs all connections
			hp = nc.every((e) => {
				let l = document.getElementById(e);
				return l.classList.contains("powered");
			});
		} else {
			// needs only 1 connection
			hp = nc.some((e) => {
				let l = document.getElementById(e);
				return l.classList.contains("powered");
			});
		}

		// highlight
		let cl = ["powered", "bg-sky-300"];
		let fn = hp ? "add" : "remove";
		cl.forEach((c) => e.classList[fn](c));

		// stats
		if (hp) {
			spu = spu + np;
			san.push(nt);
		}
	});

	// power unit count
	let ou = document.getElementById("outUnits");
	ou.innerHTML = spu;
	let cl = ["font-semibold", "text-red-400"];
	let fn = spu > 30 ? "add" : "remove";
	cl.forEach((c) => ou.classList[fn](c));

	// active node tips
	let on = document.getElementById("outNodes");
	on.innerHTML = "";
	san.sort().forEach((e) => {
		if (!e) return;
		const li = document.createElement("li");
		li.innerHTML = e;
		li.classList.add("pb-2");
		on.appendChild(li);
	});
}

function tooltips() {
	// tippy js
	let te = document.querySelectorAll("[data-tippy-content]");
	te.forEach((i) => {
		let it = i._tippy;
		if (it) it.destroy();
	});
	tippy(te, {
		allowHTML: true,
		placement: "top",
	});
}
