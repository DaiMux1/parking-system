<template>
  <div>
    <b-modal
        id="modal-prevent-closing"
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
              v-model="monthTicket.id"
          ></b-form-input>
        </b-form-group>
        <b-form-group
            label="Biển số"
            label-for="license-plate-input"
        >
          <b-form-input
              id="license-plate-input"
              v-model="monthTicket.license_plate"
          ></b-form-input>
        </b-form-group>
        <b-form-group
            label="Loại xe"
            label-for="vehicle-type-input"
        >
          <b-form-select
              v-model="typeOfVehicle"
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
      monthTicket: {
        license_plate: "",
        vehicle_type: "",
        IDs: "",
      },
      typeOfVehicle: "",
      type: ["Xe đạp", "Xe máy"]
    }
  },
  props: {
    token: String,
  },
  methods: {
    resetModal() {
      this.typeOfVehicle = ''
    },
    async handleOk() {
      this.convertTypeOfVehicle()
      try {
        const res = await axios({
          method: "PUT",
          url: "http://localhost:3000/api/tickets/create_monthly_ticket/"+this.monthTicket.id,
          // params: {
          //   IDs: this.monthTicket.id,
          // },
          data: {
            license_plate: this.monthTicket.license_plate,
            vehicle_type: this.monthTicket.vehicle_type,

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
        this.$bvModal.hide('modal-prevent-closing')
      })
    },
    showPopup: function () {
      this.$bvModal.show('modal-prevent-closing')
    },
    convertTypeOfVehicle() {
      this.monthTicket.vehicle_type = this.typeOfVehicle === this.type[0] ? "xe dap" : "xe may"
    }
  },

}
</script>