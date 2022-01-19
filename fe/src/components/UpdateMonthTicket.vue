<template>
  <div>
    <b-modal
      id="modal1-prevent-closing"
      ref="modal"
      v-bind:title="title"
      @show="resetModal"
      @hidden="resetModal"
      @lazy="true"
      @ok="handleOk"
    >
      <form ref="form" @submit.stop.prevent="handleSubmit">
        <b-form-group label="ID" label-for="id-input">
          <b-form-input id="id-input" v-model="id"></b-form-input>
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
      title: "",
      renewal: Boolean,
    };
  },
  props: {
    token: String,
  },
  methods: {
    resetModal() {
      this.id = "";
    },
    async handleOk() {
      try {
        const res = await axios({
          method: "PUT",
          url: "http://localhost:3000/api/tickets/renewal/" + this.id,
          data: {
            renewal: this.renewal,
          },
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
            "x-auth-token": this.token,
          },
        });
        if (res.data) {
          console.log(res.data);
          if (this.$route.name === "ManageMonthTicket") {
            if (this.renewal) {
              alert("Gia hạn vé tháng thành công!!");
            } else {
              alert("Hủy vé tháng thành công!!");
            }

            this.handleSubmit();
          }
        }
      } catch (err) {
        alert(err.response.data);
      }
    },
    handleSubmit() {
      this.$nextTick(() => {
        this.$bvModal.hide("modal1-prevent-closing");
      });
    },

    showPopupModal: function (isRenewal) {
      this.renewal = isRenewal;
      if (!this.renewal) {
        this.title = "Hủy vé tháng";
      } else {
        this.title = "Gia hạn vé tháng";
      }
      console.log("renewal component: " + this.renewal);
      this.$bvModal.show("modal1-prevent-closing");
    },
  },
};
</script>
