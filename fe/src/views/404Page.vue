<template>
  <div id="page-top">
    <div id="wrapper">
      <Dashboard/>
      <div id="content-wrapper" class="d-flex flex-column">
        <div id="content">
          <div class="container-fluid">

            <!-- 404 Error Text -->
            <div class="text-center">
              <div class="error mx-auto" data-text="404">404</div>
              <p class="lead text-gray-800 mb-5">Page Not Found</p>
              <p class="text-gray-500 mb-0">It looks like you found a glitch in the matrix...</p>
<!--              <a href="#"> Back to Dashboard</a>-->
              <router-link :to="{name: 'Home'}"> Back to Dashboard</router-link>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    </div>

  </div>
</template>

<script>
import '@/assets/styles/sb-admin-2.min.css'
import Dashboard from "@/components/Dashboard";
import Footer from "@/components/Footer";
export default {
  name: "404Page",
  components: {
    Dashboard,
    Footer,
  }
}
</script>

<style scoped>

</style>