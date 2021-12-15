<template>
  <div class="container-fluid">

    <!-- Page Heading -->
    <h1 class="h3 mb-2 text-gray-800">Thống kê doanh thu</h1>
    <p class="mb-4"> Thống kê doanh thu của bãi gửi xe theo tháng </p>

    <!-- DataTales Example -->
    <div class="card shadow mb-4">
      <div class="card-header py-3">
        <h6 class="m-0 font-weight-bold text-primary">Dữ liệu về doanh thu</h6>
      </div>
      <div class="card-body">
        <div class="table-responsive">
          <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
            <thead>
            <tr>
              <th>STT</th>
              <th>Tháng</th>
              <th>Số lượng vé ngày</th>
              <th>Số lượng vé tháng</th>
              <th>Doanh thu (VND)</th>
            </tr>
            </thead>
            <tfoot>
            <tr>
              <th>STT</th>
              <th>Tháng</th>
              <th>Số lượng vé ngày</th>
              <th>Số lượng vé tháng</th>
              <th>Doanh thu (VND)</th>
            </tr>
            </tfoot>
            <tbody>
            <tr>
              <td>1</td>
              <td>001</td>
              <td>10</td>
              <td>10</td>
              <td>100.000.000</td>
            </tr>
            <tr>
              <td>1</td>
              <td>001</td>
              <td>10</td>
              <td>10</td>
              <td>100.000.000</td>
            </tr>
            <tr>
              <td>1</td>
              <td>001</td>
              <td>10</td>
              <td>10</td>
              <td>100.000.000</td>
            </tr>
            <tr>
              <td>1</td>
              <td>001</td>
              <td>10</td>
              <td>10</td>
              <td>100.000.000</td>
            </tr>
            <tr>
              <td>1</td>
              <td>001</td>
              <td>10</td>
              <td>10</td>
              <td>100.000.000</td>
            </tr>
            <tr>
              <td>1</td>
              <td>001</td>
              <td>10</td>
              <td>10</td>
              <td>100.000.000</td>
            </tr>
            <tr>
              <td>1</td>
              <td>001</td>
              <td>10</td>
              <td>10</td>
              <td>100.000.000</td>
            </tr>
            <tr>
              <td>1</td>
              <td>001</td>
              <td>10</td>
              <td>10</td>
              <td>100.000.000</td>
            </tr>
            <tr>
              <td>1</td>
              <td>001</td>
              <td>10</td>
              <td>10</td>
              <td>100.000.000</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import '@/assets/styles/sb-admin-2.min.css'
export default {
  name: "RevemiesTable"
}
</script>

<style scoped>

</style>