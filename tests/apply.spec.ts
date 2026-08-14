// @vitest-environment jsdom
/**
 * Claude Code skin apply spec — the template contract: the body
 * attribute the stylesheet is scoped on is set on apply and retracted on
 * dispose, and every injected chrome element (marked data-skin-chrome) is
 * removed. Extend with assertions specific to your surface.
 */
import { afterEach, describe, expect, it } from 'vitest'
import { Context, type Fiber } from '@deepseek-ai/cordis'
import { apply } from '../src/client/index.ts'

let fiber: Fiber | undefined

async function mount(): Promise<Fiber> {
  const f = new Context().plugin({ apply })
  await f.await()
  return f
}

afterEach(async () => {
  await fiber?.dispose()
  fiber = undefined
  document.body.innerHTML = ''
  document.title = ''
})

describe('Claude Code skin apply', () => {
  it('sets the body attribute and retracts it on dispose', async () => {
    fiber = await mount()
    expect(document.body.hasAttribute('data-dsh-claude-code')).toBe(true)
    await fiber.dispose()
    expect(document.body.hasAttribute('data-dsh-claude-code')).toBe(false)
  })

  it('injects the terminal title bar (dots + title) and retracts it on dispose', async () => {
    fiber = await mount()
    const chrome = document.body.querySelectorAll('[data-skin-chrome]')
    expect(chrome.length).toBe(5) // titlebar + 3 window dots + title
    expect(document.body.querySelector('[data-skin-chrome="dot-red"]')).not.toBeNull()
    expect(document.body.querySelector('[data-skin-chrome="dot-yellow"]')).not.toBeNull()
    expect(document.body.querySelector('[data-skin-chrome="dot-green"]')).not.toBeNull()
    await fiber.dispose()
    expect(document.body.querySelectorAll('[data-skin-chrome]').length).toBe(0)
  })

  it('pins the skin title and restores the original on dispose', async () => {
    document.title = 'original'
    fiber = await mount()
    expect(document.title).toBe('Claude Code · DeepSeek 在线')
    await fiber.dispose()
    expect(document.title).toBe('original')
  })
})
