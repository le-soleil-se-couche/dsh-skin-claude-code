window.__ModuleLoader__.load({
	id: "@deepseek-ai/dsh-client-ui-skin-claude-code",
	factory: (require) => {
		var module = { exports: {} };
		var exports = module.exports;
		Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
		//#region \0dsh-css:/Users/ewin/Dev/dsh-skin-claude-code/src/client/claude-code.module.css.mjs
		const css = "body[data-dsh-claude-code]{--dsw-font-family:\"思源宋体 VF\", \"Source Han Serif SC VF\", \"思源宋体\", \"Songti SC\", serif;--ds-font-family-code:\"SF Mono\", \"SFMono-Regular\", Menlo, Consolas, monospace;--dsw-alias-brand-primary:#da7756;--dsw-alias-brand-primary-invert:#fffdf9;--dsw-alias-brand-primary-new-colorprimary-new-color:#da7756;--dsw-alias-brand-text:#a95137;--dsw-alias-state-success-primary:#00c853;--dsw-alias-state-error-primary:#ff5f38;--dsw-alias-state-warn-primary:#cc7d5e;--dsw-alias-bg-base:#f5f3ee;--dsw-alias-bg-layer-1:#f1eee8;--dsw-alias-bg-layer-2:#ece8e0;--dsw-alias-bg-layer-3:#e5e0d7;--dsw-alias-label-primary:#1d1b16;--dsw-alias-label-primary-foreground:#1d1b16;--dsw-alias-label-primary-bluish:#1d1b16;--dsw-alias-label-primary-dimmed:#4a453c;--dsw-alias-label-primary-inverted:#f5f3ee;--dsw-alias-label-dimmed:#6e675e;--dsw-alias-label-caption:#999087;--dsw-alias-border-l1:#d8d2c9;--dsw-alias-border-l2:#cfc7bc;--dsw-alias-border-l3:#c0b5a8;--dsw-alias-border-l4:#b0a494;--dsw-alias-border-inverted:#1d1b16;--dsw-alias-border-inverted2:#1d1b16;--dsw-alias-interactive-bg-hover:#e8e2d9;--dsw-alias-interactive-bg-active:#ded6cc;--dsw-alias-interactive-bg-hover-accent:#da775624;--dsw-alias-interactive-bg-hover-solid:#da775638;--dsw-alias-button-primary-fill:#da7756;--dsw-alias-button-primary-hover:#c9694d;--dsw-alias-button-primary-dimmed:#da775638;--dsw-alias-button-elevated-fill:#f9f7f3;--dsw-alias-button-floating-fill:#f9f7f3;--dsw-alias-button-tool-bar-fill:#f5f3ee;--dsw-alias-button-contrast-fill:#1d1b16;color:#1d1b16;box-sizing:border-box;background-color:#f5f3ee;padding-top:32px}body[data-dsh-claude-code][data-ds-dark-theme]{--dsw-alias-brand-primary:#da7756;--dsw-alias-brand-primary-invert:#1d1b16;--dsw-alias-brand-primary-new-colorprimary-new-color:#da7756;--dsw-alias-brand-text:#e89c81;--dsw-alias-state-success-primary:#3ddc72;--dsw-alias-state-error-primary:#ff7a55;--dsw-alias-state-warn-primary:#d99a7e;--dsw-alias-bg-base:#1d1b16;--dsw-alias-bg-layer-1:#262119;--dsw-alias-bg-layer-2:#2e2820;--dsw-alias-bg-layer-3:#353028;--dsw-alias-label-primary:#f5f3ee;--dsw-alias-label-primary-foreground:#f5f3ee;--dsw-alias-label-primary-bluish:#f5f3ee;--dsw-alias-label-primary-dimmed:#d6cfc4;--dsw-alias-label-primary-inverted:#1d1b16;--dsw-alias-label-dimmed:#b8b0a4;--dsw-alias-label-caption:#8a8277;--dsw-alias-border-l1:#4a4236;--dsw-alias-border-l2:#57503f;--dsw-alias-border-l3:#6b6250;--dsw-alias-border-l4:#7d7360;--dsw-alias-border-inverted:#f5f3ee;--dsw-alias-border-inverted2:#f5f3ee;--dsw-alias-interactive-bg-hover:#353028;--dsw-alias-interactive-bg-active:#3f3a30;--dsw-alias-interactive-bg-hover-accent:#da77562e;--dsw-alias-interactive-bg-hover-solid:#da775647;--dsw-alias-button-primary-fill:#da7756;--dsw-alias-button-primary-hover:#e08a6a;--dsw-alias-button-primary-dimmed:#da775642;--dsw-alias-button-elevated-fill:#2e2820;--dsw-alias-button-floating-fill:#2e2820;--dsw-alias-button-tool-bar-fill:#1d1b16;--dsw-alias-button-contrast-fill:#f5f3ee;color:#f5f3ee;background-color:#1d1b16}body[data-dsh-claude-code] .HrIWbW_titlebar{z-index:1000;color:#1d1b16;background:#f5f3ee;border-bottom:1px solid #d8d2c9;align-items:center;gap:6px;height:32px;padding:0 12px;font-family:思源宋体 VF,Source Han Serif SC VF,思源宋体,Songti SC,serif;font-size:12px;display:flex;position:fixed;top:0;left:0;right:0}body[data-dsh-claude-code][data-ds-dark-theme] .HrIWbW_titlebar{color:#f5f3ee;background:#262119;border-bottom:1px solid #4a4236}body[data-dsh-claude-code] .HrIWbW_dot{border-radius:50%;flex:none;width:12px;height:12px}body[data-dsh-claude-code] .HrIWbW_dot-red{background:#ff5f56}body[data-dsh-claude-code] .HrIWbW_dot-yellow{background:#ffbd2e}body[data-dsh-claude-code] .HrIWbW_dot-green{background:#27c93f}body[data-dsh-claude-code] .HrIWbW_title{letter-spacing:.02em;margin-left:8px;font-weight:600}body[data-dsh-claude-code] pre,body[data-dsh-claude-code] code,body[data-dsh-claude-code] kbd{font-family:SF Mono,SFMono-Regular,Menlo,Consolas,monospace}body[data-dsh-claude-code] pre{background:#f1eee8;border:1px solid #d8d2c9;border-radius:6px}body[data-dsh-claude-code][data-ds-dark-theme] pre{background:#171510;border-color:#4a4236}body[data-dsh-claude-code] ::selection{background:#da775652}body[data-dsh-claude-code][data-ds-dark-theme] ::-webkit-scrollbar{width:10px;height:10px}body[data-dsh-claude-code][data-ds-dark-theme] ::-webkit-scrollbar-thumb{background:#4a4236;border-radius:5px}body[data-dsh-claude-code][data-ds-dark-theme] ::-webkit-scrollbar-thumb:hover{background:#6b6250}body[data-dsh-claude-code][data-ds-dark-theme] ::-webkit-scrollbar-track{background:#1d1b16}";
		const tagId = "@deepseek-ai/dsh-client-ui-skin-claude-code/claude-code.module.css";
		if (typeof document !== "undefined" && document.querySelector("style[data-plugin-css=" + JSON.stringify(tagId) + "]") === null) {
			const tag = document.createElement("style");
			tag.dataset.plugin = "@deepseek-ai/dsh-client-ui-skin-claude-code";
			tag.dataset.pluginCss = tagId;
			tag.textContent = css;
			document.head.appendChild(tag);
		}
		var claude_code_module_css_default = {
			"dot": "HrIWbW_dot",
			"dot-green": "HrIWbW_dot-green",
			"dot-red": "HrIWbW_dot-red",
			"dot-yellow": "HrIWbW_dot-yellow",
			"title": "HrIWbW_title",
			"titlebar": "HrIWbW_titlebar"
		};
		//#endregion
		//#region src/client/index.ts
		/** The product title the skin pins (captured by the shell's DocumentTitle after settle). */
		const SKIN_TITLE = "Claude Code · DeepSeek 在线";
		/** Resolve one module class name (fallback only satisfies the indexed-access type). */
		const cls = (name) => claude_code_module_css_default[name] ?? "";
		/** macOS-style terminal window dots, in order. */
		const WINDOW_DOTS = [
			"red",
			"yellow",
			"green"
		];
		/**
		* Apply the Claude Code terminal skin: body attribute, title bar, title.
		* All writes are retracted by the effect disposer on dispose.
		* @param ctx - owning context (the effect lifecycle owns retraction).
		*/
		function apply(ctx) {
			const body = document.body;
			const originalTitle = document.title;
			body.setAttribute("data-dsh-claude-code", "");
			const titlebar = document.createElement("div");
			titlebar.className = cls("titlebar");
			titlebar.dataset.skinChrome = "titlebar";
			for (const color of WINDOW_DOTS) {
				const dot = document.createElement("span");
				dot.className = cls("dot") + " " + cls("dot-" + color);
				dot.dataset.skinChrome = "dot-" + color;
				titlebar.append(dot);
			}
			const title = document.createElement("span");
			title.className = cls("title");
			title.textContent = SKIN_TITLE;
			title.dataset.skinChrome = "title";
			titlebar.append(title);
			body.append(titlebar);
			document.title = SKIN_TITLE;
			ctx.effect(() => () => {
				body.removeAttribute("data-dsh-claude-code");
				titlebar.remove();
				if (document.title === SKIN_TITLE) document.title = originalTitle;
			}, "ui-skin-claude-code: Claude Code chrome");
		}
		//#endregion
		exports.apply = apply;
		return module.exports;
	}
});

//# sourceMappingURL=client.js.map