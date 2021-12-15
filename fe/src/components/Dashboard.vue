<template>
  <div id="page-top">
  <div id="wrapper">
    <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

        <router-link class="sidebar-brand d-flex align-items-center justify-content-center" :to="{name: 'Home'}">
          <div class="sidebar-brand-icon rotate-n-15">
            <i class="fas fa-laugh-wink"></i>
          </div>
          <div class="sidebar-brand-text mx-3">Admin Page</div>
        </router-link>

      <li class="nav-item">
        <router-link :to="{name:'Home'}" class="nav-link" >
          <i class="fas fa-fw fa-tachometer-alt"></i>
          <span>Quản lý bãi xe</span></router-link>
      </li>
      <!-- Divider -->
      <hr class="sidebar-divider">
      <!-- Heading -->
      <div class="sidebar-heading">
        Các chức năng
      </div>
      <!-- Nav Item - Pages Collapse Menu -->
      <li class="nav-item">
        <router-link :to="{name: 'ManageAccount'}" class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo"
           aria-expanded="true" aria-controls="collapseTwo">
          <i class="fa fa-user-circle" aria-hidden="true"></i>
          <span>Quản lý tài khoản</span>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link :to="{name: 'Revenues'}" class="nav-link collapsed"  data-toggle="collapse" data-target="#collapseUtilities"
           aria-expanded="true" aria-controls="collapseUtilities">
          <i class="fa fa-university" aria-hidden="true"></i>
          <span>Thống kê doanh thu</span>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link :to="{name: 'Salary'}" class="nav-link collapsed"  data-toggle="collapse" data-target="#collapseUtilities"
           aria-expanded="true" aria-controls="collapseUtilities">
          <i class="fa fa-address-card" aria-hidden="true"></i>
          <span>Quản lý lương nhân viên</span>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link :to="{name: 'VehicleStatistics'}" class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities"
           aria-expanded="true" aria-controls="collapseUtilities">
          <i class="fa fa-motorcycle" aria-hidden="true"></i>
          <span>Thống kê số lương xe</span>
        </router-link>
      </li>
      <!-- Divider -->
      <hr class="sidebar-divider">
      <!-- Sidebar Toggler (Sidebar) -->
      <div class="text-center d-none d-md-inline">
        <button class="rounded-circle border-0" id="sidebarToggle"></button>
      </div>
    </ul>
  </div>
  <!-- End of Page Wrapper -->

  <a class="scroll-to-top rounded" href="#page-top">
    <i class="fas fa-angle-up"></i>
  </a>
  </div>
</template>

<script>
import '@/assets/styles/sb-admin-2.min.css'
export default {
  name: "Dashboard"
}
</script>

<style scoped>

</style>