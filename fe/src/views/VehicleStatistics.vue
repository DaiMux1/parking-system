<template>
  <div id="page-top">
    <div id="wrapper">
      <Dashboard/>
      <div id="content-wrapper" class="d-flex flex-column">
        <div id="content">
          <NavBar/>
          <TicketTable/>
        </div>
        <Footer/>
      </div>
    </div>
  </div>
</template>

<script>
import '@/assets/styles/sb-admin-2.min.css'
import Dashboard from "@/components/Dashboard";
import TicketTable from "@/components/TicketTable";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";

export default {
  name: "VehicleStatistics",
  components: {
    Dashboard,
    TicketTable,
    Footer,
    NavBar
  }
}
</script>

<style scoped>

</style>