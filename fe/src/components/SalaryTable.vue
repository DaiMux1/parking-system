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
                  <div class="dataTables_filter text-left" id="dataTable_month"><label >Lọc theo tháng:
                    <input type="month"
                           v-model="month"
                           class="form-control form-control-sm"
                    ></label>
                  </div>
                </div>
              </div>
              <div class="col-sm-12 col-md-6">
                <div id="dataTable_filter" class="dataTables_filter"><label>Lọc theo tên:<input v-model="name" type="search"
                                                                                                class="form-control form-control-sm"
                                                                                                placeholder="Nhập tên nhân viên"
                                                                                                aria-controls="dataTable"></label>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-12">
                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
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
                  <tfoot>
                  <tr>
                    <th>STT</th>
                    <th>Tên nhân viên</th>
                    <th>Tháng</th>
                    <th>Số lượng vé ngày</th>
                    <th>Số lượng vé tháng</th>
                    <th>Doanh thu (VND)</th>
                  </tr>
                  </tfoot>
                  <tbody>
                  <tr  v-for="(user, index) in usersFilter" :key='index'>
                    <td>{{index +1}}</td>
                    <td>{{user.name}}</td>
                    <td>{{user.month}} / {{user.year}}</td>
                    <td>{{user.time}}</td>
                    <td>20.000VND/h</td>
                    <td>{{user.salary}}</td>
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

export default {
  name: "SalaryTable",
  data: function () {
    return {
      month: "",
      name: "",
    }
  },
  props: {
    salary: []
  },
  computed: {
    usersFilter: function () {
      if(this.month) {
        if(this.name) {
          return this.salary.filter(user => (user.name.toLowerCase().includes(this.name.toLowerCase()) && (user.year + "-" +user.month) == this.month));
        }
        return this.salary.filter(user => ( (user.year + "-" +user.month) == this.month));
      } else if(this.name) {
        return this.salary.filter(user => user.name.toLowerCase().includes(this.name.toLowerCase()))
      }
      return this.salary

    },
  },
  mounted() {
    if(this.$route.params) {
      this.name = this.$route.params.name
    }
  }
}
</script>

<style scoped>

</style>