// ------------------------------
// SALES TRENDS — EXACT MATCH
// ------------------------------

const salesCtx = document.getElementById("salesChart").getContext("2d");

new Chart(salesCtx, {
    type: "line",
    data: {
        labels: ["2025-04", "2025-05", "2025-10"],
        datasets: [
            {
                label: "Sales",
                data: [5000, 12000, 92582],  // matches curve shape
                borderColor: "#4fc3f7",
                backgroundColor: "rgba(79, 195, 247, 0.25)",
                borderWidth: 3,
                pointRadius: 0,       // hides points like your image
                tension: 0.45,        // smooth curve
                fill: true
            }
        ]
    },

    options: {
        responsive: true,
        maintainAspectRatio: false,

        scales: {
            y: {
                min: 0,
                max: 80000,
                ticks: {
                    callback: val => (val / 1000) + "K",
                    color: "#666"
                },
                grid: { color: "#eee" }
            },
            x: {
                grid: { display: false },
                ticks: {
                    color: "#666"
                }
            }
        },

        plugins: {
            legend: {
                display: false
            }
        }
    }
});

 // ---------------- TOP PRODUCTS GRAPH (Exact Like Your Image) ----------------
const topProductsChart = document.getElementById("topProductsChart");

new Chart(topProductsChart, {
    type: "bar",
    data: {
        labels: [
            "Premium Leather",
            "LumoBeam X9",
            "Artilium Leather",
            "Wheel",
            "—"
        ],
        datasets: [{
            label: "Units Sold",
            data: [10, 9, 4, 4, 2], // same values like image
            backgroundColor: "#c163ff",  // SAME purple color
            borderRadius: 6,             // rounded bars like your screenshot
            barThickness: 30,            // same bar width
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: { display: false }
        },
        scales: {
            x: {
                grid: { display: false },
                ticks: {
                    font: { size: 11 },
                    color: "#444",
                }
            },
            y: {
                beginAtZero: true,
                grid: {
                    color: "#ececec"
                },
                ticks: {
                    stepSize: 2,
                    font: { size: 10 },
                    color: "#777",
                }
            }
        }
    }
});
