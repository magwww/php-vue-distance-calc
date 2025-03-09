<template>
  <form @submit.prevent="onSubmit">
    <div>
      <p>Point 1 📍</p>
      <div class="inputs">
        <InputField
          name="point1-latitude"
          type="number"
          v-model="point1.lat"
          label="Latitude"
          placeholder="e.g. 52.2298"
          :error="getError('point1.lat')"
          :touch="v$.point1.lat.$touch"
        />
        <InputField
          name="point1-longitude"
          type="number"
          v-model="point1.lng"
          label="Longitude"
          placeholder="e.g. 21.0122"
          :error="getError('point1.lng')"
          :touch="v$.point1.lng.$touch"
        />
      </div>
    </div>
    <div>
      <p>Point 2 📍</p>
      <div class="inputs">
        <InputField
          name="point2-latitude"
          type="number"
          v-model="point2.lat"
          label="Latitude"
          placeholder="e.g. 41.9028"
          :error="getError('point2.lat')"
          :touch="v$.point2.lat.$touch"
        />
        <InputField
          name="point2-longitude"
          type="number"
          v-model="point2.lng"
          label="Longitude"
          placeholder="e.g. 12.4964"
          :error="getError('point2.lng')"
          :touch="v$.point2.lng.$touch"
        />
      </div>
    </div>
    <button type="submit" data-testid="calculate-button" :disabled="!isFormValid">
      Calculate distance
    </button>
  </form>
</template>

<script setup lang="ts">
import { reactive, computed } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { required, between, decimal } from '@vuelidate/validators'
import InputField from '@/components/InputField.vue'

const point1 = reactive<{ lat: number | null; lng: number | null }>({ lat: null, lng: null })
const point2 = reactive<{ lat: number | null; lng: number | null }>({ lat: null, lng: null })

const rules = {
  point1: {
    lat: { required, decimal, between: between(-90, 90) },
    lng: { required, decimal, between: between(-180, 180) },
  },
  point2: {
    lat: { required, decimal, between: between(-90, 90) },
    lng: { required, decimal, between: between(-180, 180) },
  },
}

const v$ = useVuelidate(rules, { point1, point2 })

const getError = (fieldPath: 'point1.lat' | 'point1.lng' | 'point2.lat' | 'point2.lng') => {
  const field = v$.value[fieldPath.split('.')[0]][fieldPath.split('.')[1]]

  if (field.$dirty && field.required.$invalid) return 'Field is required'
  if (field.decimal.$invalid) return 'Value must be a number'
  if (field.between.$invalid)
    return fieldPath.includes('lat')
      ? 'Value must be between -90 and 90'
      : 'Must be between -180 and 180'

  return ''
}

const isFormValid = computed(() => !v$.value.$invalid)

const emit = defineEmits(['calculate'])

const onSubmit = async () => {
  const valid = await v$.value.$validate()
  if (!valid) return
  emit('calculate', { point1, point2 })
}
</script>

<style scoped>
form {
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.inputs {
  display: flex;
  gap: 1rem;
}

button {
  padding: 0.75rem;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: 0.4s;
}

button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

button:hover {
  background-color: #1d5220;
}
</style>
