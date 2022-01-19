<template>
  <div id="page-top">
    <div id="wrapper">
      <Dashboard />
      <div id="content-wrapper" class="d-flex flex-column">
        <div id="content">
          <NavBar />
          <div class="container-fluid">
            <!-- Page Heading -->
            <h1 class="h3 mb-2 text-gray-800">Quản lý vé tháng</h1>
            <p class="mb-4">Tạo vé tháng cho người có nhu cầu sử dụng bãi xe</p>

            <!-- DataTales Example -->
            <div class="card shadow mb-4 mx-auto">
              <div class="card-header py-3">
                <h6 class="m-0 font-weight-bold text-primary">
                  Tạo hoặc gia hạn vé tháng
                </h6>
              </div>
              <div class="card-body w-100 d-sm-flex justify-content-between">
                <button
                  v-on:click="createMonthTicket"
                  class="d-none d-sm-inline-block btn btn-lg btn-primary shadow-sm"
                >
                  <i class="fas fa-user-plus fa-sm text-white-50"></i> Tạo vé
                  tháng
                </button>

                <button
                  v-on:click="updateMonthTicket"
                  class="d-none d-sm-inline-block btn btn-lg btn-primary shadow-sm"
                >
                  <i class="fas fa-user-plus fa-sm text-white-50"></i> Gia hạn
                  vé tháng
                </button>
                <button
                  v-on:click="deleteMonthTicket"
                  class="d-none d-sm-inline-block btn btn-lg btn-primary shadow-sm"
                >
                  <i class="fas fa-user-plus fa-sm text-white-50"></i> Hủy vé
                  tháng
                </button>
              </div>
            </div>
          </div>
          <CreateMonthTicket ref="createMonthTicket" :token="token" />
          <UpdateMonthTicket
            ref="updateMonthTicket"
            :token="token"
      
          />
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
import CreateMonthTicket from "@/components/CreateMonthTicket";
import UpdateMonthTicket from "@/components/UpdateMonthTicket";
import { mapState } from "vuex";
export default {
  name: "ManageMonthTicket",
  data: function () {
    return {
  
    };
  },
  methods: {
    createMonthTicket: function () {
      this.$refs.createMonthTicket.showPopup();
    },
    updateMonthTicket: function () {
    
      this.$refs.updateMonthTicket.showPopupModal(true);
    },
    deleteMonthTicket: function () {

      this.$refs.updateMonthTicket.showPopupModal(false);
    },
  },
  computed: {
    ...mapState({
      token: (state) => state.account.user.token,
    }),
  },
  components: {
    Dashboard,
    Footer,
    NavBar,
    CreateMonthTicket,
    UpdateMonthTicket,
  },
};
</script>

<style scoped></style>
