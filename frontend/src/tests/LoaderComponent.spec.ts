import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import LoaderComponent from '@/components/LoaderComponent.vue'

describe('LoaderComponent.vue', () => {
  it('renders loader with default props', () => {
    const wrapper = mount(LoaderComponent)

    expect(wrapper.exists()).toBe(true)

    const svg = wrapper.find('svg')
    expect(svg.exists()).toBe(true)

    expect(svg.attributes('data-testid')).toBe('loader')
    expect(svg.attributes('style')).toContain('width: 32px')
    expect(svg.attributes('style')).toContain('height: 32px')
  })

  it('applies passed props', () => {
    const wrapper = mount(LoaderComponent, {
      props: {
        color: 'white',
        size: 50,
        testId: 'custom-loader',
      },
    })

    const svg = wrapper.find('svg')

    expect(svg.attributes('style')).toContain('width: 50px')
    expect(svg.attributes('style')).toContain('height: 50px')
    expect(svg.attributes('style')).toContain('fill: white')
    expect(svg.attributes('data-testid')).toBe('custom-loader')
  })

  it('has the correct class for animation', () => {
    const wrapper = mount(LoaderComponent)
    const svg = wrapper.find('svg')
    expect(svg.classes()).toContain('animation')
  })
})
