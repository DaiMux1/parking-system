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
                    <div class="row">
                      <div class="col-sm-12 col-md-6">
                        <div class="dataTables_filter text-left" id="dataTable_month"><label>
                          <input v-model="id"
                                 type="text"
                                 class="form-control form-control-sm"
                                 placeholder="ID"
                          >
                          <a v-on:click="getRevenues" class="btn btn-success btn-circle btn-sm"
                             style="margin-left: 2%">
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
                            <th>Loại vé</th>
                            <th>Thời gian vào</th>
                            <th>Thời gian ra</th>
                            <th>Loại xe</th>
                            <th>Biển số xe</th>
                            <th v-if="isTicketMonth">Còn lại</th>
                            <th v-else>Thành tiền </th>

                          </tr>
                          </thead>
                          <tbody>
                          <tr>
                            <td>{{ ticketData.ticket_type}}</td>
                            <td> {{ticketData.time_in}}</td>
                            <td>{{ ticketData.time_out}}</td>
                            <td>{{ ticketData.vehicle_type }}</td>
                            <td>{{ ticketData.license_plate }}</td>
                            <td v-if="isTicketMonth">{{ ticketData.expiry_date }}</td>
                            <td v-else>{{ ticketData.revenue }} VNĐ</td>

                          </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
              <button v-if="isHasDataTicket" v-on:click="clearData" class="btn btn-primary btn-user btn-block">
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
import {mapActions, mapState} from "vuex";

export default {
  name: "ManageTicketOut",
  data: function () {
    return {
      id: "",
      ticketData: {
        time_out: "",
        time_in: "",
        license_plate: "",
        vehicle_type: "",
        ticket_type: "",
        expiry_date: 0,
        revenue: ""
      }
    }
  },
  methods: {
    ...mapActions('ticket', ['getAllTickets']),
    async getRevenues() {
      try {
        const res = await axios({
          method: "PUT",
          url: "http://localhost:3000/api/tickets/out/" + this.id,
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
            "x-auth-token": this.token,
          },
        });
        if (res.data) {
          this.ticketData = res.data
        }
      } catch (err) {
        alert(err)
      }
    },
    formatData() {
      if(this.ticketData.ticket_type === "ngay") {
        this.ticketData.ticket_type = "Vé ngày"
      } else if (this.ticketData.ticket_type === "thang") {
        this.ticketData.ticket_type = "Vé tháng"
      }
      if(this.ticketData.vehicle_type === "xe may") {
        this.ticketData.vehicle_type = "Xe máy"
      } else if (this.ticketData.vehicle_type === "xe dap") {
        this.ticketData.vehicle_type = "Xe đạp"
      }
    },
    clearData() {
      if (this.isHasDataTicket) {
        this.ticketData = {}
        this.getAllTickets()
        this.$router.go(this.$router.currentRoute)
      }
    }
  },
  computed: {
    ...mapState({
      token: (state) => state.account.user.token,
    }),
    isHasDataTicket: function () {
      if(this.ticketData.license_plate !== "") {
        this.formatData()
      }
      return !(this.ticketData.license_plate === "")
    },
    isTicketMonth: function () {
      return this.ticketData.expiry_date === 0
    },

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