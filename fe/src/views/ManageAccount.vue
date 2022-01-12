<template>
  <div id="page-top">
    <div id="wrapper">
      <Dashboard/>
      <div id="content-wrapper" class="d-flex flex-column">
        <div id="content">
          <NavBar/>
          <AccountTable @openEditUser="showUserInfo" :users="users"/>
          <EditUserInfo :token="token" />
          <CreateAccount ref="createAccount" :token="token" />
        </div>
        <Footer/>
      </div>
    </div>
  </div>
</template>

<script>
import '@/assets/styles/sb-admin-2.min.css'
import '@/assets/styles/dataTables.bootstrap4.css'
import Dashboard from "@/components/Dashboard";
import AccountTable from "@/components/AccountTable";
import EditUserInfo from "@/components/EditUserInfo";
import CreateAccount from "@/components/CreateAccount";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import {mapGetters, mapActions, mapState} from "vuex";

export default {
  name: "ManageAccount",
  components: {
    Dashboard,
    AccountTable,
    Footer,
    NavBar,
    EditUserInfo,
    CreateAccount
  },
  computed: {
    ...mapGetters("account", ['users']),
    ...mapState({
      token: (state) => state.account.user.token
    })
  },
  methods: {
    ...mapActions('account', ['getUsers']),
    showUserInfo (user) {
      this.showModal = true
      this.userEdit=user
    }
  },
  mounted() {
    this.getUsers(this.token)
  }
}
</script>

<style scoped>

</style>