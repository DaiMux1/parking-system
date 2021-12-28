<template>
  <div class="bg-gradient-primary">
    <div class="container">
      <div class="card o-hidden border-0 shadow-lg my-5">
        <div class="card-body p-0">
          <!-- Nested Row within Card Body -->
          <div class="row">
            <div class="col-lg-5 d-none d-lg-block bg-register-image"></div>
            <div class="col-lg-7">
              <div class="p-5">
                <div class="text-center">
                  <h1 class="h4 text-gray-900 mb-4">Tạo tài khoản!</h1>
                </div>
                <form class="user" id="register-form">
                  <div class="form-group">
                    <input
                      v-model="username"
                      type="text"
                      class="form-control form-control-user"
                      id="name"
                      placeholder="Họ và tên"
                    />
                  </div>
                  <div class="form-group">
                    <input
                      v-model="email"
                      type="email"
                      class="form-control form-control-user"
                      id="email"
                      placeholder="Email"
                    />
                  </div>
                  <div class="form-group">
                    <input
                      v-model="phone"
                      type="text"
                      class="form-control form-control-user"
                      id="phone"
                      placeholder="SĐT"
                    />
                  </div>
                  <div class="form-group">
                    <input
                      v-model="address"
                      type="text"
                      class="form-control form-control-user"
                      id="address"
                      placeholder="Địa chỉ"
                    />
                  </div>
                  <div class="form-group row">
                    <div class="col-sm-6 mb-3 mb-sm-0">
                      <input
                        v-model="password"
                        type="password"
                        class="form-control form-control-user"
                        id="exampleInputPassword"
                        placeholder="Mật khẩu"
                      />
                    </div>
                    <div class="col-sm-6">
                      <input
                        v-model="passwordConfirm"
                        type="password"
                        class="form-control form-control-user"
                        id="exampleRepeatPassword"
                        placeholder="Nhập lại mật khẩu"
                      />
                    </div>
                  </div>
                  <button class="btn btn-primary btn-user btn-block">
                    Đăng ký tài khoản
                  </button>
                  <hr />
                  <a href="#" class="btn btn-google btn-user btn-block">
                    <i class="fab fa-google fa-fw"></i> Đăng ký với Google
                  </a>
                  <a href="#" class="btn btn-facebook btn-user btn-block">
                    <i class="fab fa-facebook-f fa-fw"></i> Đăng ký với Facebook
                  </a>
                </form>
                <!--                <hr>-->
                <!--                <div class="text-center">-->
                <!--                  <a class="small" href="#">Quên mật khẩu?</a>-->
                <!--                </div>-->
                <!--                <div class="text-center">-->
                <!--                  <router-link :to="{name:'Login'}" class="small">Đã có tài khoản? Đăng nhập ở đây!</router-link>-->
                <!--                </div>-->
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
  name: "Register",
  data() {
    return {
      username: "",
      phone: "",
      email: "",
      address: "",
      password: "",
      passwordConfirm: "",
    };
  },
  computed: {},
  methods: {},
};
</script>

<style scoped></style>
