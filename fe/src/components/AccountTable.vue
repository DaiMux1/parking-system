<template>
  <div class="container-fluid">

    <!-- Page Heading -->
    <h1 class="h3 mb-2 text-gray-800">Quản lý tài khoản nhân viên</h1>
    <p class="mb-4"> Bao gồm các thông tin về tài khoản của nhân viên và các thao tác (thêm, sửa, xóa) với từng tài khoản </p>

    <!-- DataTales Example -->
    <div class="card shadow mb-4">
      <div class="card-header py-3">
        <h6 class="m-0 font-weight-bold text-primary">Dữ liệu về tài khoản</h6>
      </div>
      <div class="card-body">
        <div class="table-responsive">
          <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
            <thead>
            <tr>
              <th>STT</th>
              <th>ID</th>
              <th>Tên nhân viên</th>
              <th>Username</th>
              <th>Hành động</th>
            </tr>
            </thead>
            <tfoot>
            <tr>
              <th>STT</th>
              <th>ID</th>
              <th>Tên nhân viên</th>
              <th>Username</th>
              <th>Hành động</th>
            </tr>
            </tfoot>
            <tbody>
            <tr>
              <td>1</td>
              <td>001</td>
              <td>Nguyễn Văn A</td>
              <td>nguyenvana@gmail.com</td>
              <td>Thêm sửa xóa</td>
            </tr>
            <tr>
              <td>1</td>
              <td>001</td>
              <td>Nguyễn Văn A</td>
              <td>nguyenvana@gmail.com</td>
              <td>Thêm sửa xóa</td>
            </tr>
            <tr>
              <td>1</td>
              <td>001</td>
              <td>Nguyễn Văn A</td>
              <td>nguyenvana@gmail.com</td>
              <td>Thêm sửa xóa</td>
            </tr>
            <tr>
              <td>1</td>
              <td>001</td>
              <td>Nguyễn Văn A</td>
              <td>nguyenvana@gmail.com</td>
              <td>Thêm sửa xóa</td>
            </tr>
            <tr>
              <td>1</td>
              <td>001</td>
              <td>Nguyễn Văn A</td>
              <td>nguyenvana@gmail.com</td>
              <td>Thêm sửa xóa</td>
            </tr>
            <tr>
              <td>1</td>
              <td>001</td>
              <td>Nguyễn Văn A</td>
              <td>nguyenvana@gmail.com</td>
              <td>Thêm sửa xóa</td>
            </tr>
            <tr>
              <td>1</td>
              <td>001</td>
              <td>Nguyễn Văn A</td>
              <td>nguyenvana@gmail.com</td>
              <td>Thêm sửa xóa</td>
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
  name: "AccountTable"
}
</script>

<style scoped>

</style>