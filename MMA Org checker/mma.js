
let unit = 'kg';

const classes = {
    one: [
        {max: 56.7, class: "Strawweight" },
        {max: 61.2, class: "Flyweight"},
        {max: 65.8, class: "Bantamweight"},
        {max: 70.3, class: "Featherweight"},
        {max: 77.1, class: "Lightweight"},
        {max: 83.9, class: "Welterweight"},
        {max: 93.0, class: "Middleweight"},
        {max: Infinity, class: "Heavyweight"}
    ],
    bellator: [
        {max: 56.7, class: "Flyweight" },
        {max: 61.2, class: "Bantamweight"},
        {max: 65.8, class: "Featherweight"},
        {max: 70.3, class: "Lightweight"},
        {max: 77.1, class: "Welterweight"},
        {max: 83.9, class: "Middleweight"},
        {max: 93.0, class: "Light Heavyweight"},
        {max: 120.2, class: "Heavyweight"},
        {max: Infinity, class: "Super Heavyweight"}
    ],
    ufc: [
        {max: 52.2, class: "Strawweight"},
        {max: 56.7, class: "Flyweight" },
        {max: 61.2, class: "Bantamweight"},
        {max: 65.8, class: "Featherweight"},
        {max: 70.3, class: "Lightweight"},
        {max: 77.1, class: "Welterweight"},
        {max: 83.9, class: "Middleweight"},
        {max: 93.0, class: "Light Heavyweight"},
        {max: 120.2, class: "Heavyweight"},
        {max: Infinity, class: "Super Heavyweight"}
    ]
}

function checkClass() {
    const org = document.getElementById("org").value;
    let weight = parseFloat(document.getElementById("weight").value);
    if(isNaN(weight) || weight <= 0) {
        document.getElementById("result").textContent = "Invalid Number Try Again";
        return;
    }

    if (unit === "lb") {
        weight = weight * 0.45
    }

    const orgClasses = classes[org];
    const result = orgClasses.find(c=> weight <= c.max);
    document.getElementById("result").innerHTML = `Your Weight class in <strong>${org}</strong> is <strong> ${result.class} </strong>`;

}

document.getElementById("toggle").addEventListener("click", () => {
    const label = document.getElementById("unit-label");
    const input = document.getElementById("weight");

    if (unit === 'kg') {
        unit = 'lb';
        label.innerText = 'lb';
        document.getElementById("toggle").innerText = "Switch to kg";
        input.value = input.value ? (parseFloat(input.value) * 2.2).toFixed(1) : '';
    }

    
    else {
        unit = 'kg';
        label.innerText = 'kg';
        document.getElementById("toggle").innerText = "Switch to lb";
        input.value = input.value ? (parseFloat(input.value) / 2.2).toFixed(1) : '';
    }
})