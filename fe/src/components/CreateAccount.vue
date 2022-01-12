<template>
  <div>
    <b-modal
        id="modal2-prevent-closing"
        ref="modal"
        title="Tạo tài khoản nhân viên"
        @show="resetModal"
        @hidden="resetModal"
        @lazy="true"
        @ok="handleOk"
    >
      <form ref="form">
        <b-form-group
            label="Tên"
            label-for="name-input"
        >
          <b-form-input
              id="name-input"
              v-model="user.name"
          ></b-form-input>
        </b-form-group>
        <b-form-group
            label="Username"
            label-for="username-input"
        >
          <b-form-input
              id="username-input"
              v-model="user.username"
          ></b-form-input>
        </b-form-group>
        <b-form-group
            label="Mật khẩu"
            label-for="password-input"
        >
          <b-form-input
              id="password-input"
              v-model="user.password"
          ></b-form-input>
        </b-form-group>
        <b-form-group
            label="SĐT"
            label-for="phone-input"
        >
          <b-form-input
              id="phone-input"
              v-model="user.phone_number"
          ></b-form-input>
        </b-form-group>
        <b-form-group
            label="Địa chỉ"
            label-for="address-input"
        >
          <b-form-input
              id="address-input"
              v-model="user.address"
          ></b-form-input>
        </b-form-group>
<!--        <b-form-group-->
<!--            label="Hệ số lương"-->
<!--            label-for="coefficients_salary-input"-->
<!--        >-->
<!--          <b-form-input-->
<!--              id="coefficients_salary-input"-->
<!--              v-model="user.coefficients_salary"-->
<!--              required-->
<!--          ></b-form-input>-->
<!--        </b-form-group>-->
      </form>
    </b-modal>
  </div>
</template>

<script>
import {EventBus} from "@/event-bus";
import axios from "axios";
export default {
  data() {
    return {
      user: {
        name: "",
        username: "",
        password: "",
        coefficients_salary: "",
        address: "",
        phone_number: "",

      }
    }
  },
  props: {
    token: String
  },
  mounted() {
    EventBus.$on('show-create-account', createMessage => {
      console.log(createMessage)
      this.$bvModal.show('modal2-prevent-closing')
    })
  },
  methods: {
    resetModal() {
      this.name = ''
    },
    async handleOk() {
      try {
        const res = await axios({
          method: "POST",
          url: "http://localhost:3000/api/users/create",
          data: {
            name: this.user.name,
            username: this.user.username,
            password: this.user.password,
            phone_number: this.user.phone_number,
            address: this.user.address,
            // coefficients_salary:this.user.coefficients_salary
          },
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
            "x-auth-token": this.token
          },
        });

        if (res.data) {
          if (this.$route.name === "ManageAccount") {
            alert("Đăng ký thành công !!");
          }
        }
      } catch (err) {
        alert(err.response.data.message)
      }
    },

  },
}
</script>