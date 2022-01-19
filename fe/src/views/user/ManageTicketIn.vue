<template>
  <div id="page-top">
    <div id="wrapper">
      <Dashboard />
      <div id="content-wrapper" class="d-flex flex-column">
        <div id="content">
          <NavBar />
          <div class="container-fluid">
            <!-- Page Heading -->
            <h1 class="h3 mb-2 text-gray-800">Soát vé đầu vào</h1>
            <p class="mb-4">
              Soát vé đầu vào trong trường hợp xe vào bãi sử dụng vé tháng
            </p>

            <!-- DataTales Example -->
            <div class="card shadow mb-4">
              <div class="card-header py-3">
                <h6 class="m-0 font-weight-bold text-primary">
                  Kiểm tra vé tháng
                </h6>
              </div>
              <div class="card-body">
                <div class="table-responsive">
                  <div
                    id="dataTable_wrapper"
                    class="dataTables_wrapper dt-bootstrap4"
                  >
                    <div class="row">
                      <div class="col-sm-12 col-md-6">
                        <div
                          class="dataTables_filter text-left"
                          id="dataTable_month"
                        >
                          <label>
                            <select
                              v-model="selectOption"
                              aria-controls="dataTable"
                              class="custom-select custom-select-sm w-50 form-control form-control-sm"
                            >
                              <option value="date">Soát vé theo ngày</option>
                              <option value="month">Soát vé theo tháng</option>
                            </select>
                            <input
                              v-if="isSelectMonth"
                              v-model="id"
                              type="text"
                              class="form-control form-control-sm"
                              placeholder="ID" />
                            <a
                              v-if="isSelectMonth"
                              v-on:click="checkMonthlyTicket"
                              class="btn btn-success btn-circle btn-sm"
                              style="margin-left: 2%"
                            >
                              <i class="fas fa-check"></i>
                            </a>
                            <input
                              v-if="!isSelectMonth"
                              v-model="id"
                              style="margin-right: 1%"
                              type="text"
                              class="form-control form-control-sm"
                              placeholder="ID" />
                            <input
                              v-if="!isSelectMonth"
                              v-model="licensePlate"
                              style="margin-right: 1%"
                              type="text"
                              class="form-control form-control-sm"
                              placeholder="Biển số" />
                            <select
                              v-if="!isSelectMonth"
                              v-model="type"
                              aria-controls="dataTable"
                              class="custom-select custom-select-sm w-25 form-control form-control-sm"
                            >
                              <option value="xe dap">Xe đạp</option>
                              <option value="xe may">Xe máy</option>
                            </select>

                            <a
                              v-if="!isSelectMonth"
                              v-on:click="createDayTicket"
                              class="btn btn-success btn-circle btn-sm"
                              style="margin-left: 2%"
                            >
                              <i class="fas fa-check"></i> </a
                          ></label>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-sm-12">
                        <table class="table table-bordered" id="dataTable">
                          <thead>
                            <tr>
                              <th>Mã vé</th>
                              <th>Loại xe</th>
                              <th>Biển số xe</th>
                              <th v-if="isSelectMonth">Còn lại</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>{{ ticketData.IDs }}</td>
                              <td>{{ ticketData.vehicle_type }}</td>
                              <td>{{ ticketData.license_plate }}</td>
                              <td v-if="isSelectMonth">
                                {{ ticketData.expiry_date }}
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button
                v-if="isHasDataTicket"
                v-on:click="clearData"
                class="btn btn-primary btn-user btn-block"
              >
                Xác nhận
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  </div>
</template>

<script>
import "@/assets/styles/sb-admin-2.min.css";
import "@/assets/styles/dataTables.bootstrap4.css";
import Dashboard from "@/components/Dashboard";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import axios from "axios";
import { mapActions, mapState } from "vuex";

export default {
  name: "ManageTicketIn",
  data: function () {
    return {
      licensePlate: "",
      type: "xe dap",
      selectOption: "date",
      id: "",
      ticketData: {
        license_plate: "",
        month: "",
        IDs: "",
      },
    };
  },
  methods: {
    ...mapActions("ticket", ["getAllTickets"]),
    async checkMonthlyTicket() {
      try {
        const res = await axios({
          method: "PUT",
          url: "http://localhost:3000/api/tickets/monthly_in/" + this.id,
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
            "x-auth-token": this.token,
          },
        });
        if (res.data) {
          console.log(res);
          this.ticketData = res.data;
          if (res.data.expiry_date) {
            this.ticketData.expiry_date = res.data.expiry_date + " ngày";
          }
        }
      } catch (err) {
        alert(err.response.data);
      }
    },
    async createDayTicket() {
      try {
        const res = await axios({
          method: "PUT",
          url: "http://localhost:3000/api/tickets/in/" + this.id,
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
            "x-auth-token": this.token,
          },
          data: {
            vehicle_type: this.type,
            license_plate: this.licensePlate,
          },
        });
        if (res.data) {
          this.ticketData = res.data;
        }
      } catch (err) {
        alert(err.response.data);
      }
    },
    clearData() {
      if (this.isHasDataTicket) {
        this.getAllTickets();
        this.$router.go(this.$router.currentRoute);
      }
    },
  },
  computed: {
    ...mapState({
      token: (state) => state.account.user.token,
    }),
    isHasDataTicket: function () {
      return !(this.ticketData.license_plate === "");
    },
    isSelectMonth: function () {
      return this.selectOption === "month";
    },
  },
  components: {
    Dashboard,
    Footer,
    NavBar,
  },
};
</script>

<style scoped></style>
