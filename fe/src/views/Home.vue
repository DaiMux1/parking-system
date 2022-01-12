<template>
  <div  id="page-top">
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
import {mapActions, mapState} from "vuex"

export default {
  name: "Home",
  components: {
    Dashboard,
    NavBar,
    Footer,
    CurrentTicketTable
  },
  computed: {
    ...mapState({
      token: (state) => state.account.user.token,
      tickets: (state) => state.ticket.tickets
    }),
  },
  methods: {
    ...mapActions('ticket', ['getALlTickets']),
    isNotHaveToken: function () {
      if (this.token === "") {
        this.$router.push({name: "Login"})
      }
    }
  },
  mounted() {
    this.isNotHaveToken()
    this.getALlTickets(this.token)
  }
}
</script>

<style scoped>

</style>