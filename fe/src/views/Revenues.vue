<template>
  <div id="page-top">
    <div id="wrapper">
      <Dashboard/>
      <div id="content-wrapper" class="d-flex flex-column">
        <div id="content">
          <NavBar/>
          <RevenuesTable :revenues="revenues"/>
          <RevenuesChart :revenues="revenues"/>
        </div>
        <Footer/>
      </div>
    </div>
  </div>
</template>

<script>
import "@/assets/styles/sb-admin-2.min.css";
import "@/assets/styles/dataTables.bootstrap4.css"
import Dashboard from "@/components/Dashboard";
import RevenuesTable from "@/components/RevenuesTable";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import {mapActions, mapGetters} from "vuex";
import RevenuesChart from "@/components/RevenuesChart";

export default {
  name: "Revenues",
  components: {
    RevenuesChart,
    Dashboard,
    RevenuesTable,
    Footer,
    NavBar,
  },
  data: function () {
    return {};
  },
  computed: {
    ...mapGetters("ticket", ["revenues"]),
  },
  methods: {
    ...mapActions("ticket", ["getRevenues"]),
  },
  mounted() {
    this.getRevenues();
  },
};
</script>

<style scoped></style>
