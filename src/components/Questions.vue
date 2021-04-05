<template>
  <div class="QuestionBox">
    <h2 class="question">What media platform are you making the design for</h2>
    <div class="answers">
      <select id="h">
        <option value>Facebook</option>
        <option value>Facebook</option>
        <option value>Facebook</option>
        <!-- <option
        :value="option.value"
        v-for="[option, index] in mediaPlatforms"
        :key="index"
        >{{option.name}}</option
        >-->
      </select>
    </div>
    <button>
      Next
      <img src="../assets/icons/arrow_forward_black_24dp.svg" alt />
    </button>
  </div>
</template>

<script>
export default {
  name: "Questions",
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.QuestionBox {
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  padding: 2rem;
  background-color: #fff;
  box-shadow: 0 5px 10px #eee;
}

select {
  width: 100%;
  padding: 0.5rem 1rem;
  font-size: 100%;
}
button {
  float: right;
  padding: 0.5rem 1rem;
  cursor: pointer;

  margin-top: 2rem;
  display: flex;
  place-items: center;
  align-self: flex-end;
  column-gap: 0.56rem;

  appearance: none;
  outline: none;
  border: none;

  font-size: 100%;

  transition: .25s ease;

  &:hover {
    box-shadow: 0 3px 3px linear-gragient(#222, #444);
    transform: scale(1.1, 1.1);
  }
}
</style>