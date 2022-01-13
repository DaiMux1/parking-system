<template>
  <div class="container-fluid">

    <!-- Page Heading -->
    <h1 class="h3 mb-2 text-gray-800">Quản lý tài khoản nhân viên</h1>
    <p class="mb-4"> Bao gồm các thông tin về tài khoản của nhân viên và các thao tác (thêm, sửa, xóa) với từng tài
      khoản </p>


    <!-- DataTales Example -->
    <div class="card shadow mb-4">
      <div class="card-header py-3">
        <div class="d-sm-flex align-items-center justify-content-between mb-4">
          <h6 class="m-0 font-weight-bold text-primary">Dữ liệu về tài khoản</h6>
          <button v-on:click="createAccount" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
              class="fas fa-user-plus fa-sm text-white-50"></i> Tạo tài khoản nhân viên
          </button>
        </div>
      </div>
      <div class="card-body">
        <div class="table-responsive">
          <div id="dataTable_wrapper" class="dataTables_wrapper dt-bootstrap4">
            <div class="row">
              <div class="col-sm-12 col-md-6">
              </div>
              <div class="col-sm-12 col-md-6">
                <div id="dataTable_filter" class="dataTables_filter"><label>Lọc theo tên:<input v-model="name"
                                                                                                type="search"
                                                                                                class="form-control form-control-sm"
                                                                                                placeholder="Nhập tên nhân viên"
                                                                                                aria-controls="dataTable"></label>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-12">
                <table class="table table-bordered" id="dataTable">
                  <thead>
                  <tr>
                    <th>STT</th>
                    <th>ID</th>
                    <th>Tên nhân viên</th>
                    <th>Username</th>
                    <th>Số điện thoại</th>
                    <th>Địa chỉ</th>
                    <th>Hành động</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr v-for="(user, index) in usersFilter" :key='index'>
                    <td>{{ index + 1 }}</td>
                    <td>{{ user._id }}</td>
                    <td>{{ user.name }}</td>
                    <td>{{ user.username }}</td>
                    <td>{{ user.phone_number }}</td>
                    <td>{{ user.address }}</td>
                    <td>
                      <a v-on:click="salaryUser(user)" class="btn btn-info btn-circle" style="margin-right: 3%;">
                        <i class="fa fa-eye"></i>
                      </a>
                      <a v-on:click="editUserInfo(user)" class="btn btn-success btn-circle" style="margin-right: 3%;">
                        <i class="fas fa-edit"></i>
                      </a>
                      <a v-on:click="deleteUser(user)" class="btn btn-danger btn-circle">
                        <i class="fas fa-trash"></i>
                      </a>
                    </td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
import '@/assets/styles/sb-admin-2.min.css'
import '@/assets/styles/dataTables.bootstrap4.css'
import {EventBus} from '@/event-bus'
import axios from "axios";
import {mapState} from "vuex";

export default {
  name: "AccountTable",
  props: {
    users: []
  },
  data: function () {
    return {
      name,
      showModal: false,
    }
  },

  methods: {

    async deleteUser(user) {
      try {
        const res = await axios({
          method: "DELETE",
          url: "http://localhost:3000/api/users/" + user._id,

          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
            "x-auth-token": this.token
          },
        });
        if (res.data) {
          if (this.$route.name === "ManageAccount") {
            alert("Xóa tài khoản thành công!!");
            this.$router.go(this.$router.currentRoute)
          }
        }

      } catch (err) {
        alert(err.response.data.message)
      }
    },
    salaryUser(user) {
      this.$router.push({name: 'Salary', params: {name: user.name}})
    },
    editUserInfo (user) {
      EventBus.$emit('show-and-edit-user', user)
    },
    createAccount () {
      EventBus.$emit('show-create-account', "Tạo tài khoản")
    }
  },
  computed: {
    usersFilter: function () {
      return this.users.filter(user => (user.name.toLowerCase().includes(this.name.toLowerCase())));
    },
    ...mapState({
      token: (state) => state.account.user.token,
    }),
  },
}
</script>

<style scoped>

</style>