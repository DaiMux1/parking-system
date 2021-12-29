<template>
  <div id="page-top">
    <div id="wrapper">
      <Dashboard/>
      <div id="content-wrapper" class="d-flex flex-column">
        <div id="content">
          <NavBar/>
          <div class="container-fluid">

            <!-- Page Heading -->
            <h1 class="h3 mb-2 text-gray-800">Tạo vé tháng</h1>
            <p class="mb-4">Tạo vé tháng cho người có nhu cầu sử dụng bãi xe</p>

            <!-- DataTales Example -->
            <div class="card shadow mb-4 mx-auto">
              <div class="card-header py-3 mx-auto">
                <h6 class="m-0 font-weight-bold text-primary ">Nhập các thông tin vào mẫu bên dưới</h6>
              </div>
              <div class="card-body w-25 mx-auto">
                    <form class="user" @submit.prevent="createMonthlyTicket" id="register-form">
                      <div class="form-group">
                        <input v-model="monTicket.id" type="text" class="form-control form-control-user" id="name"
                               placeholder="Mã vé">
                      </div>
                      <div class="form-group">
                        <input v-model="monTicket.licensePlate" type="text" class="form-control form-control-user" id="email"
                               placeholder="Biển số">
                      </div>
                      <div class="form-group">
                        <input v-model="monTicket.type" type="text" class="form-control form-control-user" id="phone"
                               placeholder="Loại xe">
                      </div>
                      <button class="btn btn-primary btn-user btn-block">
                        Đăng ký vé tháng
                      </button>
                    </form>
              </div>
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
  name: "CreateMonthlyTicket",
  data: function() {
    return {
      monTicket: {
        id: "",
        licensePlate: "",
        type: ""
      }
    }
  },
  methods: {
    async createMonthlyTicket() {
      try {
        const res = await axios({
          method: "PUT",
          url: "http://localhost:3000/api/tickets/create_monthly_ticket",
          data: {
            license_plate: this.monTicket.licensePlate,
            vehicle_type: this.monTicket.type,
            IDs: this.monTicket.id,
          },
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
        });

        if (res.data) {
          if (this.$route.name === "CreateMonthlyTicket") {
            alert("Tạo vé tháng thành công !!");
            this.$router.push({name: 'ManageTicketIn'})
          }
        }
      } catch (err) {
        alert(err.response.data.message)
      }
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