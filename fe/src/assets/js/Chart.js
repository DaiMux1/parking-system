import { Line, mixins } from "vue-chartjs";
export default {
	extends: Line,
	mixins: [mixins.reactiveProp],
	props: ["charData"],
	data() {
		return {
			options: {
				//Chart.js options
				scales: {
					yAxes: [
						{
							ticks: {
								beginAtZero: true,
							},
							gridLines: {
								display: true,
							},
						},
					],
				},
				legend: {
					display: true,
				},
				responsive: true,
				maintainAspectRatio: false,
			},
		};
	},
	mounted() {
		this.renderChart(this.chartData, this.options);
	},
};