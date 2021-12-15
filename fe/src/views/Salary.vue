<template>
  <div id="page-top">
    <div id="wrapper">
      <Dashboard/>
      <div id="content-wrapper" class="d-flex flex-column">
        <div id="content">
          <SalaryTable/>
        </div>
        <Footer/>
      </div>
    </div>
  </div>
</template>

<script>
import '@/assets/styles/sb-admin-2.min.css'
import Dashboard from "@/components/Dashboard";
import SalaryTable from "@/components/SalaryTable";
import Footer from "@/components/Footer";
export default {
  name: "Salary",
  components: {
    Dashboard,
    SalaryTable,
    Footer
  }
}
</script>

<style scoped>

</style>