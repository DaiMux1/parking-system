<template>
  <div>
    <b-modal
        id="modal-prevent-closing"
        ref="modal"
        title="Chỉnh sửa thông tin nhân viên"
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
              v-model="userEdit.name"
          ></b-form-input>
        </b-form-group>
        <b-form-group
            label="Username"
            label-for="username-input"
        >
          <b-form-input
              id="username-input"
              v-model="userEdit.username"
          ></b-form-input>
        </b-form-group>
        <b-form-group
            label="SĐT"
            label-for="phone-input"
        >
          <b-form-input
              id="phone-input"
              v-model="userEdit.phone_number"
          ></b-form-input>
        </b-form-group>
        <b-form-group
            label="Địa chỉ"
            label-for="address-input"
        >
          <b-form-input
              id="address-input"
              v-model="userEdit.address"
          ></b-form-input>
        </b-form-group>
        <b-form-group
            label="Hệ số lương"
            label-for="coefficients_salary-input"
        >
          <b-form-input
              id="coefficients_salary-input"
              v-model="userEdit.coefficients_salary"
              required
          ></b-form-input>
        </b-form-group>
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
      userEdit: {}
    }
  },
  props: {
    token: String
  },
  mounted() {
    EventBus.$on('show-and-edit-user', user => {
      this.userEdit=user
      this.$bvModal.show('modal-prevent-closing')
    })
  },
  methods: {
    resetModal() {
      this.name = ''
    },
    async handleOk() {
        try {
          const res = await axios({
            method: "PUT",
            url: "http://localhost:3000/api/users/" + this.userEdit._id,
            data: {
              name: this.userEdit.name,
              username: this.userEdit.username,
              phone_number: this.userEdit.phone_number,
              address: this.userEdit.address,
              coefficients_salary: this.userEdit.coefficients_salary
            },
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Content-Type": "application/json",
              "x-auth-token": this.token
            },
          });
          if (res.data) {
            console.log(res.data)
            if (this.$route.name === "ManageAccount") {
              alert("Chỉnh sửa thông tin thành công!!");
            }
          }
        } catch (err) {
          alert(err.response.data);
        }
    },

  },
}
</script>
