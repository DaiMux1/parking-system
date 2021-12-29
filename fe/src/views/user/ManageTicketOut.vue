<template>
  <div id="page-top">
    <div id="wrapper">
      <Dashboard/>
      <div id="content-wrapper" class="d-flex flex-column">
        <div id="content">
          <NavBar/>
          <div class="container-fluid">
            <!-- Page Heading -->
            <h1 class="h3 mb-2 text-gray-800">Soát vé đầu ra</h1>
            <p class="mb-4"> Soát vé đầu ra cho các xe đã vào bãi sử dụng vé ngày hoặc vé tháng</p>

            <!-- DataTales Example -->
            <div class="card shadow mb-4">
              <div class="card-header py-3">
                <h6 class="m-0 font-weight-bold text-primary">Kiểm tra và tính tiền</h6>
              </div>
              <div class="card-body">
                <div class="table-responsive">
                  <div id="dataTable_wrapper" class="dataTables_wrapper dt-bootstrap4">
                    <div class="row" style="margin-bottom: 1%;">
                      <div class="col-sm-12 col-md-6">
                        <div class="dataTables_filter text-left" id="dataTable_month"><label>Nhập biển số xe
                          <input v-model="licensePlate"
                                 type="text"
                                 class="form-control form-control-sm"
                                 placeholder="Biển số"
                          >
                          <a v-on:clicl="checkAndCaculateTicket" class="btn btn-success btn-circle btn-sm" style="margin-left: 2%">
                            <i class="fas fa-check"></i>
                          </a></label>
                        </div>
                      </div>

                    </div>
                    <div class="row">
                      <div class="col-sm-12">
                        <table class="table table-bordered" id="dataTable">
                          <thead>
                          <tr>
                            <th>Mã vé</th>
                            <th>Ngày</th>
                            <th>Loại vé</th>
                            <th>Biển số</th>
                            <th>Thời gian</th>
                            <th>Thành tiền</th>
                          </tr>
                          </thead>

                          <tbody>
                          <tr>
                            <td>1</td>
                            <td>2</td>
                            <td>3</td>
                            <td>4</td>
                            <td>5</td>
                            <td>6</td>
                          </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button v-if="isHasTicketData" class="btn btn-primary btn-user btn-block">
                Xác nhận
              </button>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    </div>
  </div>
</template>

<script>
import '@/assets/styles/sb-admin-2.min.css'
import '@/assets/styles/dataTables.bootstrap4.css'
import Dashboard from "@/components/Dashboard";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import axios from "axios";

export default {
  name: "ManageTicketOut",
  data: function () {
    return {
      licensePlate: "",
      ticket: {
      }
    }
  },
  methods: {

    async checkAndCaculateTicket() {
      try {
        const res = await axios({
          method: "PUT",
          url: "http://localhost:3000/api/tickets/monthly_in/" + this.licensePlate,
          params: {
            day: parseInt(this.date.substring(8, 10)),
            month: parseInt(this.date.substring(5, 7)),
            year: parseInt(this.date.substring(0, 4)),
          },
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
            "x-auth-token": this.token
          },
        });
        if (res.data) {
          this.ticket = res.data
          if (this.$route.name === "ManageTicketOut") {
            this.$router.go(this.$router.currentRoute)
          }
        }
      } catch (err) {
        alert(err)
      }
    }
  },
  computed: {
    isHasTicketData: function () {
      return !(JSON.stringify(this.ticket) === '{}')
    }
  },
  components: {
    Dashboard,
    Footer,
    NavBar
  }
}
</script>

<style scoped>

</style>