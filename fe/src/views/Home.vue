<template>
  <div id="page-top">
    <div id="wrapper">
      <Dashboard/>
      <div id="content-wrapper" class="d-flex flex-column">
        <div id="content">
          <NavBar/>
          <CurrentTicketTable :currentTickets="tickets"/>
        </div>
        <Footer/>

      </div>
    </div>
  </div>
</template>

<script>
import '@/assets/styles/sb-admin-2.min.css'
import Dashboard from "@/components/Dashboard";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import CurrentTicketTable from "../components/CurrentTicketTable";
import {mapActions, mapGetters} from "vuex"

export default {
  name: "Home",
  components: {
    Dashboard,
    NavBar,
    Footer,
    CurrentTicketTable
  },
  computed: {
    ...mapGetters('ticket', ['tickets']),

  },
  methods: {
    ...mapActions('ticket', ['getTickets']),

  },
  mounted() {
    this.getTickets()
  }
}
</script>

<style scoped>

</style>