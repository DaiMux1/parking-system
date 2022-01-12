<template>
  <!-- Topbar -->
  <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

    <h6 class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
     Số lượng xe hiện tại trong bãi: {{vehicleNumber}}
    </h6>

    <!-- Topbar Navbar -->
    <ul class="navbar-nav ml-auto">

      <!-- Nav Item - Search Dropdown (Visible Only XS) -->
      <li class="nav-item dropdown no-arrow d-sm-none">
        <a class="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button"
           data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <i class="fas fa-search fa-fw"></i>
        </a>
      </li>

      <!-- Nav Item - user Information -->
      <li class="nav-item dropdown no-arrow">
        <a v-on:click="logout" class="nav-link dropdown-toggle"  id="userDropdown" role="button"
                     data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <span class="mr-2 d-none d-lg-inline text-gray-600 small">Đăng xuất</span>
          <img class="img-profile rounded-circle"
               src="../assets/imgs/undraw_profile.svg">
        </a>
      </li>

    </ul>

  </nav>
  <!-- End of Topbar -->
</template>

<script>
import {mapState} from "vuex";
import axios from "axios";
export default {
  name: "NavBar",
  methods: {
    async logout() {
      try {
        const res = await axios({
          method: "PUT",
          url: "http://localhost:3000/api/users/logout/" + this.timekeeping,
          params: {

          },
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
            "x-auth-token": this.token,
          },
        });
        if (res.data) {
          this.revenue = res.data;
          if (this.$route.name !== "Login") {
           this.$router.push({name: "Login"})
          }
        }
      } catch (err) {
        alert(err);
      }
    }
  },
  computed: {
    ...mapState({
      token: (state) => state.account.user.token,
      timekeeping: (state) => state.account.user.timekeeping_id,
      vehicleNumber: (state) => state.ticket.vehicleNumber
    }),
  },
}
</script>

<style scoped>

</style>