<template>
  <div class="bg-gradient-primary">
    <div class="container">
      <!-- Outer Row -->
      <div class="row justify-content-center">
        <div class="col-xl-7 col-lg-12 col-md-9">
          <div class="card o-hidden border-0 shadow-lg my-5">
            <div class="card-body p-1">
              <!-- Nested Row within Card Body -->
              <div class="row">
                <div class="col-lg-12">
                  <div class="p-5">
                    <div class="text-center">
                      <h1 class="h4 text-gray-900 mb-4">
                        Chào mừng đã trở lại hệ thống gửi xe !!!
                      </h1>
                    </div>
                    <form class="user">
                      <div class="form-group">
                        <input
                          v-model="username"
                          type="text"
                          class="form-control form-control-user"
                          id="exampleInputEmail"
                          aria-describedby="emailHelp"
                          placeholder="Tài khoản"
                        />
                        <p class="text-center" v-if="username.length < 5" style="color:red; margin-top: 2%;">Tài khoản cần ít nhất 5 ký tự</p>
                      </div>
                      <div class="form-group">
                        <input
                          v-model="password"
                          type="password"
                          class="form-control form-control-user"
                          id="exampleInputPassword"
                          placeholder="Mật khẩu"
                        />
                        <p class="text-center" v-if="password.length < 5" style="color:red; margin-top: 2%;">Mật khẩu cần ít nhất 5 ký tự</p>
                      </div>

                       <a v-on:click="handleSubmit" class="btn btn-primary btn-user btn-block">
                        Đăng nhập
                      </a>
                    </form>
                    <hr />
                    <div class="text-center">
                      <a class="small" href="#">Quên mật khẩu?</a>
                    </div>
                  </div>
                </div>
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
import axios from "axios";
import {mapActions} from "vuex";
export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    async handleSubmit() {
      try {
        const res = await axios({
          method: "POST",
          url: "http://localhost:3000/api/auth",
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
          data: {
            username: this.username,
            password: this.password
          },
        });

        if (res.data) {
          if (this.$route.name === "Login") {
            this.$router.push({name: 'Home'});
            alert("Đăng nhập thành công !!")
          }
          if (res.data) {
            this.submitUser(res.data)
          }
        }
      } catch (err) {
        alert(err.response.data);
      }
    },
    ...mapActions('account', ["submitUser"]),
  },
};
</script>

<style scoped>
.bg-gradient-primary {
  display: flex;
  height: 100%;
  align-items: center;
  background-image: url("../assets/imgs/img-background.jpg");
}
</style>
