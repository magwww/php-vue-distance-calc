import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import GeoDistanceForm from '@/components/GeoDistanceForm.vue'
import InputField from '@/components/InputField.vue'

describe('GeoDistanceForm.vue', () => {
  it('renders all input fields', () => {
    const wrapper = mount(GeoDistanceForm)

    const inputs = wrapper.findAllComponents(InputField)
    expect(inputs).toHaveLength(4)

    const labels = wrapper.findAll('label')
    const expectedLabels = ['Latitude', 'Longitude', 'Latitude', 'Longitude']

    expectedLabels.forEach((label, index) => {
      expect(labels[index].text()).toBe(label)
    })
  })

  it('updates input values correctly', async () => {
    const wrapper = mount(GeoDistanceForm)
    const inputFields = wrapper.findAllComponents(InputField)

    await inputFields[0].setValue(52.2298)
    await inputFields[1].setValue(21.0122)
    await inputFields[2].setValue(41.9028)
    await inputFields[3].setValue(12.4964)

    expect(inputFields[0].props('modelValue')).toBe(52.2298)
    expect(inputFields[1].props('modelValue')).toBe(21.0122)
    expect(inputFields[2].props('modelValue')).toBe(41.9028)
    expect(inputFields[3].props('modelValue')).toBe(12.4964)
  })

  it('emits "calculate" event with correct data on submit', async () => {
    const wrapper = mount(GeoDistanceForm)

    const inputFields = wrapper.findAllComponents(InputField)
    await inputFields[0].setValue(52.2298)
    await inputFields[1].setValue(21.0122)
    await inputFields[2].setValue(41.9028)
    await inputFields[3].setValue(12.4964)

    await wrapper.find('form').trigger('submit.prevent')

    expect(wrapper.emitted('calculate')).toHaveLength(1)
    expect(wrapper.emitted('calculate')![0]).toEqual([
      {
        point1: { lat: 52.2298, lng: 21.0122 },
        point2: { lat: 41.9028, lng: 12.4964 },
      },
    ])
  })

  it('does not emit "calculate" event when fields are empty', async () => {
    const wrapper = mount(GeoDistanceForm)

    await wrapper.find('form').trigger('submit.prevent')

    expect(wrapper.emitted('calculate')).toBeUndefined()
  })
})
