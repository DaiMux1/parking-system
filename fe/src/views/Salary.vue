<template>
  <div id="page-top">
    <div id="wrapper">
      <Dashboard/>
      <div id="content-wrapper" class="d-flex flex-column">
        <div id="content">
          <NavBar/>
          <SalaryTable :salary='salary'/>
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
import NavBar from "@/components/NavBar";

import {mapActions, mapGetters, mapState} from "vuex";
export default {
  name: "Salary",
  components: {
    Dashboard,
    SalaryTable,
    Footer,
    NavBar
  },
  data: function () {
    return {
    }
  },
  computed: {
    ...mapGetters("account", ['salary']),
    ...mapState({
      token: (state) => state.account.user.token
    }),
  },
  methods: {
    ...mapActions('account', ['getSalary']),
  },
  mounted() {
    this.getSalary(this.token)
  }
}
</script>

<style scoped>

</style>