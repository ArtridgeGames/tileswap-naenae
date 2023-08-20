import { ref } from 'vue';

const x = ref({});

console.log(x.value);

x.value.prop = 5;

console.log(x.value);