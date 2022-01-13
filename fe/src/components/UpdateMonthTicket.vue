<template>
  <div>
    <b-modal
        id="modal1-prevent-closing"
        ref="modal"
        title="Tạo vé tháng"
        @show="resetModal"
        @hidden="resetModal"
        @lazy="true"
        @ok="handleOk"
    >
      <form ref="form" @submit.stop.prevent="handleSubmit">
        <b-form-group
            label="ID"
            label-for="id-input"
        >
          <b-form-input
              id="id-input"
              v-model="id"
          ></b-form-input>
        </b-form-group>
        <b-form-group
            label="Gia hạn hay không ?"
            label-for="vehicle-type-input"
        >
          <b-form-select
              v-model="renewal"
              :options="type"
          ></b-form-select>
        </b-form-group>
      </form>
    </b-modal>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      id: "",
      renewal: false,
      type: ["Có", "Không"]
    }
  },
  props: {
    token: String,
  },
  methods: {
    resetModal() {
      this.renewal = false
    },
    async handleOk() {
      this.convertRenewal()
      try {
        const res = await axios({
          method: "PUT",
          url: "http://localhost:3000/api/tickets/renewal/" + this.id,
          data: {
            renewal: this.renewal
          },
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
            "x-auth-token": this.token
          },
        });
        if (res.data) {
          console.log(res.data)
          if (this.$route.name === "MonthTicket") {
            alert("Tạo vé tháng thành công!!");
            this.handleSubmit()
          }
        }
      } catch (err) {
        alert(err)
      }
    },
    handleSubmit() {
      this.$nextTick(() => {
        this.$bvModal.hide('modal1-prevent-closing')
      })
    },

    showPopupModal: function () {
      this.$bvModal.show('modal1-prevent-closing')
    },
    convertRenewal() {
      this.renewal = this.renewal === this.type[0] ? true : false
    }
  },

}
</script>