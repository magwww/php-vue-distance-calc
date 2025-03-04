import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import GeoDistanceResult from '@/components/GeoDistanceResult.vue'

describe('GeoDistanceResult.vue', () => {
  it('renders correctly when distance is in meters', () => {
    const wrapper = mount(GeoDistanceResult, {
      props: { distance: { m: 500 } },
    })
    expect(wrapper.text()).toContain('500 m')
  })

  it('renders correctly when distance is in kilometers', () => {
    const wrapper = mount(GeoDistanceResult, {
      props: { distance: { km: 2.5, m: 2500 } },
    })
    expect(wrapper.text()).toContain('2.5 km')
    expect(wrapper.text()).not.toContain('2500 m')
  })

  it('renders "Points are the same." when distance is 0', () => {
    const wrapper = mount(GeoDistanceResult, {
      props: { distance: { m: 0 } },
    })
    expect(wrapper.text()).toContain('Points are the same.')
  })
})
