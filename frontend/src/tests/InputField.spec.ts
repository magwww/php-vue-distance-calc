import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import InputField from '@/components/InputField.vue'

describe('InputField.vue', () => {
  it('renders label correctly when provided', () => {
    const wrapper = mount(InputField, {
      props: {
        modelValue: '',
        name: 'username',
        label: 'Username',
        placeholder: 'Andrzej',
      },
    })

    const label = wrapper.find('label')
    expect(label.exists()).toBe(true)
    expect(label.text()).toBe('Username')
    expect(label.attributes('for')).toBe('username')
  })

  it('renders input with correct attributes', () => {
    const wrapper = mount(InputField, {
      props: {
        modelValue: '',
        name: 'email',
        placeholder: 'Enter your email',
        type: 'email',
        label: 'email',
      },
    })

    const input = wrapper.find('input')
    expect(input.exists()).toBe(true)
    expect(input.attributes('name')).toBe('email')
    expect(input.attributes('id')).toBe('email')
    expect(input.attributes('type')).toBe('email')
    expect(input.attributes('placeholder')).toBe('Enter your email')
  })

  it('emits update:modelValue when input value changes', async () => {
    const wrapper = mount(InputField, {
      props: {
        label: 'password',
        placeholder: '****',
        modelValue: '',
        name: 'password',
      },
    })

    const input = wrapper.find('input')
    await input.setValue('mypassword')

    expect(wrapper.emitted('update:modelValue')).toBeTruthy()
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual(['mypassword'])
  })
})
