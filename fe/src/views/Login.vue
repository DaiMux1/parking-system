<template>
  <div class="bg-gradient-primary">
    <div class="container">
      <!-- Outer Row -->
      <div class="row justify-content-center">
        <div class="col-xl-10 col-lg-12 col-md-9">
          <div class="card o-hidden border-0 shadow-lg my-5">
            <div class="card-body p-0">
              <!-- Nested Row within Card Body -->
              <div class="row">
                <div class="col-lg-6 d-none d-lg-block bg-login-image"></div>
                <div class="col-lg-6">
                  <div class="p-5">
                    <div class="text-center">
                      <h1 class="h4 text-gray-900 mb-4">
                        Chào mừng đã trở lại !!!!
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
                      </div>
                      <div class="form-group">
                        <input
                          v-model="password"
                          type="password"
                          class="form-control form-control-user"
                          id="exampleInputPassword"
                          placeholder="Mật khẩu"
                        />
                      </div>

                      <a class="btn btn-primary btn-user btn-block">
                        Đăng nhập
                      </a>
                    </form>
                    <hr />
                    <div class="text-center">
                      <a class="small" href="#">Quên mật khẩu?</a>
                    </div>
                    <div class="text-center">
                      <router-link :to="{ name: 'Register' }" class="small"
                        >Tạo tài khoản Admin!</router-link
                      >
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
import "@/assets/styles/sb-admin-2.min.css";

export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
    };
  },
};
</script>

<style scoped></style>
