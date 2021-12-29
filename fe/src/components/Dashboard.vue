<template>
  <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

    <router-link class="sidebar-brand d-flex align-items-center justify-content-center" :to="{name: 'Home'}">
      <div class="sidebar-brand-icon rotate-n-15">
        <i class="fas fa-laugh-wink"></i>
      </div>
      <div v-if="isAdminPage" class="sidebar-brand-text mx-3">Trang Admin</div>
      <div v-else class="sidebar-brand-text mx-3">Nhân viên</div>
    </router-link>
    <li class="nav-item">
      <router-link :to="{name:'Home'}" class="nav-link">
        <i class="fas fa-fw fa-tachometer-alt"></i>
        <span>Quản lý bãi xe</span></router-link>
    </li>
    <hr class="sidebar-divider">
    <!-- Heading -->
    <div class="sidebar-heading">
      Các chức năng
    </div>
    <!-- Nav Item - Pages Collapse Menu -->
    <li v-if="isAdminPage" class="nav-item">
      <router-link :to="{name: 'ManageAccount'}" class="nav-link collapsed" href="#" data-toggle="collapse"
                   data-target="#collapseTwo"
                   aria-expanded="true" aria-controls="collapseTwo">
        <i class="fa fa-user-circle" aria-hidden="true"></i>
        <span>Quản lý tài khoản</span>
      </router-link>
    </li>
    <li v-if="isAdminPage" class="nav-item">
      <router-link :to="{name: 'Revenues'}" class="nav-link collapsed" data-toggle="collapse"
                   data-target="#collapseUtilities"
                   aria-expanded="true" aria-controls="collapseUtilities">
        <i class="fa fa-university" aria-hidden="true"></i>
        <span>Thống kê doanh thu</span>
      </router-link>
    </li>
    <li v-if="isAdminPage" class="nav-item">
      <router-link :to="{name: 'Salary'}" class="nav-link collapsed" data-toggle="collapse"
                   data-target="#collapseUtilities"
                   aria-expanded="true" aria-controls="collapseUtilities">
        <i class="fa fa-address-card" aria-hidden="true"></i>
        <span>Quản lý lương nhân viên</span>
      </router-link>
    </li>
    <li v-if="isAdminPage" class="nav-item">
      <router-link :to="{name: 'VehicleStatistics'}" class="nav-link collapsed" ata-toggle="collapse"
                   data-target="#collapseUtilities"
                   aria-expanded="true" aria-controls="collapseUtilities">
        <i class="fa fa-motorcycle" aria-hidden="true"></i>
        <span>Thống kê số lương xe</span>
      </router-link>
    </li>
    <li v-if="!isAdminPage" class="nav-item">
      <router-link :to="{name: 'ManageTicketIn'}" class="nav-link collapsed" data-toggle="collapse"
                   data-target="#collapseUtilities"
                   aria-expanded="true" aria-controls="collapseUtilities">
        <i class="fa fa-sign-in-alt" aria-hidden="true"></i>
        <span>Soát vé đầu vào</span>
      </router-link>
    </li>
    <li v-if="!isAdminPage" class="nav-item">
      <router-link :to="{name: 'ManageTicketOut'}" class="nav-link collapsed" data-toggle="collapse"
                   data-target="#collapseUtilities"
                   aria-expanded="true" aria-controls="collapseUtilities">
        <i class="fa fa-sign-out-alt" aria-hidden="true"></i>
        <span>Soát vé đầu ra</span>
      </router-link>
    </li>
    <li v-if="!isAdminPage" class="nav-item">
      <router-link :to="{name: 'CreateMonthlyTicket'}" class="nav-link collapsed" data-toggle="collapse"
                   data-target="#collapseUtilities"
                   aria-expanded="true" aria-controls="collapseUtilities">
        <i class="fa fa-plus-circle" aria-hidden="true"></i>
        <span>Tạo vé tháng</span>
      </router-link>
    </li>
    <!-- Divider -->
    <hr class="sidebar-divider">
    <!-- Sidebar Toggler (Sidebar) -->

  </ul>
</template>

<script>
import '@/assets/styles/sb-admin-2.min.css'
import {mapState} from "vuex";

export default {
  name: "Dashboard",
  computed: {
    ...mapState({
      isAdmin: (state) => state.account.user.isAdmin,
      name: (state) => state.account.user.name,
    }),
    isAdminPage: function () {
      return this.isAdmin
    }
  },
}
</script>

<style scoped>

</style>