/**
 * Claude Code terminal skin — apply() owns the whole surface and retracts
 * it on dispose (the ThemePresenter retraction discipline): the
 * data-dsh-claude-code body attribute the stylesheet is scoped on, the
 * injected terminal-window title bar (red/yellow/green window dots +
 * monospace title), and the document title. The CSS rides the bundle's
 * CSS-modules auto-inject (style tag owned by the loader, removed on entry
 * dispose). No services are injected: the skin needs only the DOM.
 *
 * Style your design in ./claude-code.module.css, scoped under
 * body[data-dsh-claude-code] (dark variant body[data-dsh-claude-code][data-ds-dark-theme]).
 */
import type { Context } from '@deepseek-ai/cordis'
import css from './claude-code.module.css'

/** The product title the skin pins (captured by the shell's DocumentTitle after settle). */
const SKIN_TITLE = 'Claude Code · DeepSeek 在线'

/** Resolve one module class name (fallback only satisfies the indexed-access type). */
const cls = (name: keyof typeof css): string => css[name] ?? ''

/** macOS-style terminal window dots, in order. */
const WINDOW_DOTS = ['red', 'yellow', 'green'] as const

/**
 * Apply the Claude Code terminal skin: body attribute, title bar, title.
 * All writes are retracted by the effect disposer on dispose.
 * @param ctx - owning context (the effect lifecycle owns retraction).
 */
export function apply(ctx: Context): void {
  const body = document.body
  const originalTitle = document.title
  body.setAttribute('data-dsh-claude-code', '')

  const titlebar = document.createElement('div')
  titlebar.className = cls('titlebar')
  // data-skin-chrome marks every injected element for the apply spec.
  titlebar.dataset.skinChrome = 'titlebar'

  for (const color of WINDOW_DOTS) {
    const dot = document.createElement('span')
    dot.className = cls('dot') + ' ' + cls('dot-' + color)
    dot.dataset.skinChrome = 'dot-' + color
    titlebar.append(dot)
  }

  const title = document.createElement('span')
  title.className = cls('title')
  title.textContent = SKIN_TITLE
  title.dataset.skinChrome = 'title'
  titlebar.append(title)

  body.append(titlebar)

  document.title = SKIN_TITLE

  ctx.effect(() => () => {
    body.removeAttribute('data-dsh-claude-code')
    titlebar.remove()
    // Only restore when the skin's own title still stands — a session title
    // projected by the shell must not be clobbered by skin teardown.
    if (document.title === SKIN_TITLE) document.title = originalTitle
  }, 'ui-skin-claude-code: Claude Code chrome')
}
