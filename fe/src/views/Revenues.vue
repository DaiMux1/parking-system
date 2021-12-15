<template>
  <div id="page-top">
    <div id="wrapper">
      <Dashboard/>
      <div id="content-wrapper" class="d-flex flex-column">
        <div id="content">
          <RevenuesTable/>
        </div>
        <Footer/>
      </div>
    </div>
  </div>
</template>

<script>
import '@/assets/styles/sb-admin-2.min.css'
import Dashboard from "@/components/Dashboard";
import RevenuesTable from "@/components/RevenuesTable";
import Footer from "@/components/Footer";
export default {
  name: "Revenues",
  components: {
    Dashboard,
    RevenuesTable,
    Footer
  }
}
</script>

<style scoped>

</style>