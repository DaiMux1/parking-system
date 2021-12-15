<template>
  <div class="container-fluid">

    <!-- Page Heading -->
    <h1 class="h3 mb-2 text-gray-800">Thống kê số lượng xe</h1>
    <p class="mb-4"> Bao gồm các thông tin về các xe hiện tại đang có trong bãi </p>

    <!-- DataTales Example -->
    <div class="card shadow mb-4">
      <div class="card-header py-3">
        <h6 class="m-0 font-weight-bold text-primary">Dữ liệu về các xe trong bãi xe</h6>
      </div>
      <div class="card-body">
        <div class="table-responsive">
          <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
            <thead>
            <tr>
              <th>STT</th>
              <th>Biển số xe</th>
              <th>Loại xe</th>
              <th>Màu</th>
              <th>Thời gian vào</th>
            </tr>
            </thead>
            <tfoot>
            <tr>
              <th>STT</th>
              <th>Biển số xe</th>
              <th>Loại xe</th>
              <th>Màu</th>
              <th>Thời gian vào</th>
            </tr>
            </tfoot>
            <tbody>
            <tr>
              <td>1</td>
              <td>99D1-7219</td>
              <td>Xe gắn máy</td>
              <td>Đỏ</td>
              <td>9:00:00 12/12/2021</td>
            </tr>
            <tr>
              <td>1</td>
              <td>99D1-7219</td>
              <td>Xe gắn máy</td>
              <td>Đỏ</td>
              <td>9:00:00 12/12/2021</td>
            </tr>
            <tr>
              <td>1</td>
              <td>99D1-7219</td>
              <td>Xe gắn máy</td>
              <td>Đỏ</td>
              <td>9:00:00 12/12/2021</td>
            </tr>
            <tr>
              <td>1</td>
              <td>99D1-7219</td>
              <td>Xe gắn máy</td>
              <td>Đỏ</td>
              <td>9:00:00 12/12/2021</td>
            </tr>
            <tr>
              <td>1</td>
              <td>99D1-7219</td>
              <td>Xe gắn máy</td>
              <td>Đỏ</td>
              <td>9:00:00 12/12/2021</td>
            </tr>
            <tr>
              <td>1</td>
              <td>99D1-7219</td>
              <td>Xe gắn máy</td>
              <td>Đỏ</td>
              <td>9:00:00 12/12/2021</td>
            </tr>
            <tr>
              <td>1</td>
              <td>99D1-7219</td>
              <td>Xe gắn máy</td>
              <td>Đỏ</td>
              <td>9:00:00 12/12/2021</td>
            </tr>
            <tr>
              <td>1</td>
              <td>99D1-7219</td>
              <td>Xe gắn máy</td>
              <td>Đỏ</td>
              <td>9:00:00 12/12/2021</td>
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
  name: "TicketTable"
}
</script>

<style scoped>

</style>