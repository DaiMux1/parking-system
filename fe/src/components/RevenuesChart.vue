<template>
  <div class="container-fluid">
    <div class="card shadow mb-4">
      <div class="card-header py-3">
        <h6 class="m-0 font-weight-bold text-primary">Biểu đồ doanh thu</h6>
      </div>
        <Chart :chart-data="chartData"></Chart>
      </div>
    </div>
</template>

<script>
import Chart from "@/assets/js/Chart.js"
export default {
  name: "RevenuesChart",
  components: {
    Chart,
  },
  props: {
    revenues: {},
  },
  data: function(){
    return {
      chartData : {
        labels: [
        ],
        datasets: [
          {
            label: "Dữ liệu về doanh thu",
            data: [],
            backgroundColor: "transparent",
            borderColor: "rgba(1, 116, 188, 0.50)",
            pointBackgroundColor: "rgba(171, 71, 188, 1)",
          },
        ]
      },
    }
  },

  methods: {
    fillData() {
      this.revenues.filter(revenue => {
      {
          this.chartData.labels.push(revenue.month + "/" + revenue.year)
          this.chartData.datasets[0].data.push(parseInt(revenue.revenue))
        }
      })
      this.chartData.labels.reverse()
      this.chartData.datasets[0].data.reverse()
    },
  },
  mounted() {
    this.fillData()
  }
}
</script>

<style scoped>

</style>