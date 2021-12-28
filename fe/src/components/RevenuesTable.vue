<template>
  <div class="container-fluid">

    <!-- Page Heading -->
    <h1 class="h3 mb-2 text-gray-800">Thống kê doanh thu</h1>
    <p class="mb-4"> Thống kê doanh thu của bãi gửi xe theo tháng </p>

    <!-- DataTales -->
    <div class="card shadow mb-4">
      <div class="card-header py-3">
        <h6 class="m-0 font-weight-bold text-primary">Dữ liệu về doanh thu</h6>
      </div>
      <div class="card-body">
        <div class="table-responsive">
          <div id="dataTable_wrapper" class="dataTables_wrapper dt-bootstrap4">
            <div class="row" style="margin-bottom: 1%;">
              <div class="col-sm-12 col-md-6">
                <div class="col-sm-12 col-md-6">
                  <div class="dataTables_filter text-left" id="dataTable_month"><label>Chọn tháng:
                    <input type="month"
                           v-model="month"
                           class="form-control form-control-sm"
                    >
                    <a v-on:click="getRevenuesByMonth" class="btn btn-success btn-circle btn-sm" style="margin-left: 2%">
                      <i class="fas fa-check"></i>
                    </a></label>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-12">
                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                  <thead>
                  <tr>
                    <th>STT</th>
                    <th>Tháng</th>
                    <th>Số lượng vé ngày</th>
                    <th>Số lượng vé tháng</th>
                    <th>Doanh thu (VND)</th>
                  </tr>
                  </thead>
                  <tfoot>
                  <tr>
                    <th>STT</th>
                    <th>Tháng</th>
                    <th>Số lượng vé ngày</th>
                    <th>Số lượng vé tháng</th>
                    <th>Doanh thu (VND)</th>
                  </tr>
                  </tfoot>
                  <tbody v-if="isSelectMonth">
                  <tr>
                    <td>1</td>
                    <td>{{ revenue.month }} / {{ revenue.year }}</td>
                    <td>{{ revenue.day_ticket }}</td>
                    <td>{{ revenue.month_ticket }}</td>
                    <td>{{ revenue.revenue }}</td>
                  </tr>
                  </tbody>
                  <tbody v-else>
                  <tr  v-for="(revenue, index) in revenues" :key='index'>
                    <td>{{ index + 1 }}</td>
                    <td>{{ revenue.month }} / {{ revenue.year }}</td>
                    <td>{{ revenue.day_ticket }}</td>
                    <td>{{ revenue.month_ticket }}</td>
                    <td>{{ revenue.revenue }}</td>
                  </tr>
                  </tbody>

                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import '@/assets/styles/sb-admin-2.min.css'
import '@/assets/styles/dataTables.bootstrap4.css'
import axios from "axios";
import {mapState} from "vuex";

export default {
  name: "RevenuesTable",
  data: function () {
    return {
      month: "",
      revenue: "",
    }
  },
  props: {
    revenues: []
  },
  methods: {
    async getRevenuesByMonth() {
      try {
        const res = await axios({
          method: "GET",
          url: "http://localhost:3000/api/revenues",
          params: {
            month: parseInt(this.month.substring(5,7)),
            year: parseInt(this.month.substring(0,4))
          },
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
            "x-auth-token": this.token
          },
        });
        if (res.data) {
          this.revenue = res.data
          if (this.$route.name === "Revenues") {
            alert("Doanh thu của tháng " + this.month + " sẽ được hiển thị ở bảng dưới !!!");
          }
        }
      } catch (err) {
        alert(err)
      }
    }
  },
  computed: {
    ...mapState({
      token: (state) => state.account.user.token,
    }),
    isSelectMonth: function () {
      if(this.month) {
        return true;
      }
      return false;
    }
  },
  mounted() {

  }
}
</script>

<style scoped>

</style>