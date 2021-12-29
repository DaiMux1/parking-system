<template>
  <div class="container-fluid">
    <!-- Page Heading -->
    <h1 class="h3 mb-2 text-gray-800">Thống kê số lượng xe</h1>
    <p class="mb-4">Thống kê số lượng vé xe đã bán được trong ngày, tháng</p>

    <!-- DataTales Example -->
    <div class="card shadow mb-4">
      <div class="card-header py-3">
        <h6 class="m-0 font-weight-bold text-primary">
          Dữ liệu về số lượng vé bán được
        </h6>
      </div>
      <div class="card-body">
        <div class="table-responsive">
          <div id="dataTable_wrapper" class="dataTables_wrapper dt-bootstrap4">
            <div class="row" style="margin-bottom: 1%">
              <div class="col-sm-12 col-md-6">
                <div class="dataTables_filter text-left" id="dataTable_month">
                  <label>
                    <select
                      v-model="selectOption"
                      aria-controls="dataTable"
                      class="custom-select custom-select-sm w-50 form-control form-control-sm"
                    >
                      <option value="date">Thống kê theo ngày</option>
                      <option value="month">Thống kê theo tháng</option>
                    </select>
                    <input
                      v-if="isSelectDate"
                      v-model="date"
                      type="date"
                      class="form-control form-control-sm"
                    />
                    <a
                      v-if="isSelectDate"
                      v-on:click="getStatisticByDay"
                      class="btn btn-success btn-circle btn-sm"
                      style="margin-left: 2%"
                    >
                      <i class="fas fa-check"></i>
                    </a>
                    <input
                      v-if="!isSelectDate"
                      v-model="date"
                      type="month"
                      class="form-control form-control-sm"
                    />
                    <a
                      v-if="!isSelectDate"
                      v-on:click="getStatisticByMonth"
                      class="btn btn-success btn-circle btn-sm"
                      style="margin-left: 2%"
                    >
                      <i class="fas fa-check"></i>
                    </a>
                  </label>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-12">
                <table class="table table-bordered" id="dataTable">
                  <thead>
                    <tr>
                      <th>Ngày</th>
                      <th>Số lượng vé ngày</th>
                      <th>Số lượng vé tháng</th>
                      <th>Tổng số lượng xe</th>
                    </tr>
                  </thead>
                  <!--                  <tfoot>-->
                  <!--                  <tr>-->

                  <!--                    <th>Ngày</th>-->
                  <!--                    <th>Số lượng vé ngày</th>-->
                  <!--                    <th>Số lượng vé tháng</th>-->
                  <!--                    <th>Tổng số lượng xe</th>-->
                  <!--                  </tr>-->
                  <!--                  </tfoot>-->
                  <tbody>
                    <tr>
                      <td>{{ date }}</td>
                      <td>{{ statistic.day_ticket }}</td>
                      <td>{{ statistic.month_ticket }}</td>
                      <td>
                        {{ statistic.day_ticket + statistic.month_ticket }}
                      </td>
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
import "@/assets/styles/sb-admin-2.min.css";
import "@/assets/styles/dataTables.bootstrap4.css";
import axios from "axios";
import { mapState } from "vuex";

export default {
  name: "TicketTable",
  data: function () {
    return {
      date: "",
      statistic: {
        day_ticket: 0,
        month_ticket: 0,
      },
      selectOption: "date",
    };
  },
  computed: {
    ...mapState({
      token: (state) => state.account.user.token,
    }),
    isSelectDate: function () {
      return this.selectOption === "date";
    },
  },
  methods: {
    async getStatisticByDay() {
      try {
        const res = await axios({
          method: "GET",
          url: "http://localhost:3000/api/revenues/statistic/",
          params: {
            day: parseInt(this.date.substring(8, 10)),
            month: parseInt(this.date.substring(5, 7)),
            year: parseInt(this.date.substring(0, 4)),
          },
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
            "x-auth-token": this.token,
          },
        });
        if (res.data) {
          this.statistic = res.data;
          if (this.$route.name === "VehicleStatistics") {
            alert(
              "Số lượng xe được gửi trong ngày " +
                this.date +
                " sẽ được hiển thị ở bảng dưới !!!"
            );
          }
        }
      } catch (err) {
        alert(err);
      }
    },
    async getStatisticByMonth() {
      try {
        const res = await axios({
          method: "GET",
          url: "http://localhost:3000/api/revenues/statistic/",
          params: {
            // day: parseInt(this.date.substring(8, 10)),
            month: parseInt(this.date.substring(5, 7)),
            year: parseInt(this.date.substring(0, 4)),
          },
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
            "x-auth-token": this.token,
          },
        });
        if (res.data) {
          this.statistic = res.data;
          if (this.$route.name === "VehicleStatistics") {
            alert(
              "Số lượng xe được gửi trong ngày " +
                this.date +
                " sẽ được hiển thị ở bảng dưới !!!"
            );
          }
        }
      } catch (err) {
        alert(err);
      }
    },
  },
};
</script>

<style scoped></style>
