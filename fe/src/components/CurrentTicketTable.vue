<template>
  <div class="container-fluid">

    <!-- Page Heading -->
    <h1 class="h3 mb-2 text-gray-800">Các xe trong bãi hiện tại</h1>
    <p class="mb-4"> Bao gồm các thông tin về các xe hiện tại đang có trong bãi </p>

    <!-- DataTales Example -->
    <div class="card shadow mb-4">
      <div class="card-header py-3">
        <h6 class="m-0 font-weight-bold text-primary">Dữ liệu về các xe trong bãi xe</h6>
      </div>
      <div class="card-body">
        <div class="table-responsive">
          <div id="dataTable_wrapper" class="dataTables_wrapper dt-bootstrap4">
            <div class="row">
              <div class="col-sm-12 col-md-6">
              </div>
              <div class="col-sm-12 col-md-6">
                <div id="dataTable_filter" class="dataTables_filter"><label>Tìm kiếm theo biển số:<input v-model="licensePlate"
                                                                                                type="search"
                                                                                                class="form-control form-control-sm"
                                                                                                placeholder="Nhập biến số"
                                                                                                aria-controls="dataTable"></label>
                </div>
              </div>
            </div>
            <table class="table table-bordered" id="dataTable">
              <thead>
              <tr>
                <th>STT</th>
                <th>ID</th>
                <th>Biển số xe</th>
                <th>Loại xe</th>
                <th>Thời gian vào</th>
              </tr>
              </thead>
              <tfoot>
              <tr>
                <th>STT</th>
                <th>ID</th>
                <th>Biển số xe</th>
                <th>Loại xe</th>
                <th>Thời gian vào</th>
              </tr>
              </tfoot>
              <tbody>
              <tr v-for="(ticket, index) in tickets" :key='index'>
                <td>{{ index + 1 }}</td>
                <td>{{ ticket._id }}</td>
                <td>{{ ticket.license_plate }}</td>
                <td>{{ ticket.vehicle_type }}</td>
                <td>{{ ticket.time_in }}</td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import '@/assets/styles/sb-admin-2.min.css'
import '@/assets/styles/dataTables.bootstrap4.css'
// import {mapActions, mapGetters} from "vuex"
export default {
  name: "CurrentTicketTable",
  data: function () {
    return {
      licensePlate: "",
    }
  },
  props: {
    currentTickets: [],
  },
  computed: {
    tickets: function () {
      return this.currentTickets.filter(ticket => (ticket.license_plate.toLowerCase().includes(this.licensePlate.toLowerCase())));
    }
  }
}
</script>

<style scoped>

</style>