<template>
  <div class="container-fluid">

    <!-- Page Heading -->
    <h1 class="h3 mb-2 text-gray-800">Quản lý lương nhân viên</h1>
    <p class="mb-4"> Bao gồm các tác vụ xem, tính tiền lương cho nhân viên </p>

    <!-- DataTales Example -->
    <div class="card shadow mb-4">
      <div class="card-header py-3">
        <h6 class="m-0 font-weight-bold text-primary">Dữ liệu về thời gian làm việc và lương</h6>
      </div>
      <div class="card-body">
        <div class="table-responsive">
          <div id="dataTable_wrapper" class="dataTables_wrapper dt-bootstrap4">
            <div class="row">
              <div class="col-sm-12 col-md-6">
                <div class="col-sm-12 col-md-6">
                  <div class="dataTables_filter text-left" id="dataTable_month"><label>Lọc theo tháng:
                    <input type="month"
                           v-model="month"
                           class="form-control form-control-sm"
                    >
                    <a
                        v-on:click="getSalaryByMonth"
                        class="btn btn-success btn-circle btn-sm"
                        style="margin-left: 2%"
                    >
                      <i class="fas fa-check"></i> </a
                    ></label>
                  </div>
                </div>
              </div>
              <div class="col-sm-12 col-md-6">
                <div id="dataTable_filter" class="dataTables_filter"><label>Lọc theo tên:<input v-model="name"
                                                                                                type="search"
                                                                                                class="form-control form-control-sm"
                                                                                                placeholder="Nhập tên nhân viên"
                                                                                                aria-controls="dataTable"></label>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-12">
                <table class="table table-bordered" id="dataTable">
                  <thead>
                  <tr>
                    <th>STT</th>
                    <th>Tên nhân viên</th>
                    <th>Tháng</th>
                    <th>Thời gian làm việc</th>
                    <th>Hệ số lương</th>
                    <th>Lương(VND)</th>
                  </tr>
                  </thead>

                  <tbody>
                  <tr v-for="(user, index) in usersFilter" :key='index'>
                    <td>{{ index + 1 }}</td>
                    <td>{{ user.name }}</td>
                    <td>{{ user.month }} / {{ user.year }}</td>
                    <td>{{ user.time }}</td>
                    <td>20.000VND/h</td>
                    <td>{{ user.salary }}</td>
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

export default {
  name: "SalaryTable",
  data: function () {
    return {
      month: "",
      name: "",
      salaryUser: [],
    }
  },
  props: {
    salary: []
  },
  methods: {
    async getSalaryByMonth() {
      try {
        const res = await axios({
          method: "GET",
          url: "http://localhost:3000/api/salary",
          params: {
            month: parseInt(this.month.substring(5, 7)),
            year: parseInt(this.month.substring(0, 4)),
          },
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
            // "x-auth-token": this.token,
          },
        });
        if (res.data) {
          this.salaryUser = res.data;
          if (this.$route.name === "Salary") {
            alert(
                "Lương nhân viên của tháng " +
                this.month +
                " sẽ được hiển thị ở bảng dưới !!!"
            );
          }
        }
      } catch (err) {
        alert(err);
      }
    },
  },
  computed: {
    usersFilter: function () {
      if(this.salaryUser.length > 0) {
        if(this.name) {
          return this.salaryUser.filter(user => user.name.toLowerCase().includes(this.name.toLowerCase()))
        }
        return this.salaryUser
      }
      if (this.name) {
        return this.salary.filter(user => user.name.toLowerCase().includes(this.name.toLowerCase()))
      }
      return this.salary

    },
  },
  mounted() {
    if (this.$route.params) {
      this.name = this.$route.params.name
    }
  }
}
</script>

<style scoped>

</style>