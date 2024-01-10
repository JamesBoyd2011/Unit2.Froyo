const froyoIcon = `<?xml version="1.0" encoding="iso-8859-1"?>
<!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
<!-- License: CC0. Made by SVG Repo: https://www.svgrepo.com/svg/138984/frozen-yogurt -->
<svg class="froyo" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 320 320" style="enable-background:new 0 0 320 320;" xml:space="preserve">
<g id="XMLID_21_">
	<path fill='orange' id="XMLID_22_" d="M90,320h140c7.03,0,13.117-4.883,14.643-11.746l11.114-50.012H64.243l11.114,50.012
		C76.883,315.117,82.97,320,90,320z"/>
	<path id="XMLID_23_" d="M57.576,228.242h204.848C281.211,222.835,295,205.503,295,185c0-20.723-14.085-38.209-33.182-43.414
		C263.863,136.449,265,130.856,265,125c0-21.07-14.559-38.797-34.143-43.668L171.82,5.765C168.977,2.126,164.617,0,160,0
		c-4.617,0-8.978,2.126-11.82,5.765L89.143,81.332C69.559,86.203,55,103.93,55,125c0,5.856,1.137,11.449,3.182,16.586
		C39.085,146.791,25,164.277,25,185C25,205.503,38.789,222.835,57.576,228.242z"/>
</g>
</svg>`;

const froyoColors = {
  vanilla: "linen",
  chocolate: "brown",
  mint: "lightgreen",
  strawberry: "lightpink",
  coffee: "saddlebrown",
  lemon: "yellow",
  berry: "lightblue",
  mango: "orange",
  chocolate: "chocolate",
};

captureOrder(
  prompt(
    "Please enter your froyo flavors separated by a comma.",
    "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
  )
);

function captureOrder(prompt = "") {
  let commaSeparateValues = prompt.split(",");
  let table = commaSeparateValues.reduce((previousValue, currentValue) => {
    currentValue = currentValue
      .trim()
      .toLowerCase()
      .replace(/\b\w/g, (s) => s.toUpperCase());

    if (currentValue.length) {
      !previousValue[currentValue]
        ? (previousValue[currentValue] = 1)
        : previousValue[currentValue]++;
    }

    return previousValue;
  }, {});

  console.table(table);
  renderOrderTable(table);
  return table;
}

function renderOrderTable(obj = {}) {
  let table = document.createElement("table");
  newTableRow(["Froyo Flavor", "Quantity"], table);
  Object.keys(obj).forEach((flavor) => {
    let tr = document.createElement("tr");
    newTableRow([flavor, obj[flavor]], table);
    table.append(tr);
  });
  document.body.append(table);
}

function newTableRow(data, table) {
  let tr = document.createElement("tr");
  data.forEach((element) => {
    let td = document.createElement("td");
    if (data.indexOf(element) == 1 && Number(element)) {
      td.innerHTML += froyoIcon.repeat(element);
    } else {
      tr.style.fill = froyoColors[element.toLowerCase()];
      td.innerText = element;
    }
    tr.append(td);
  });
  table.append(tr);
}
