# UI.md — Visual and Interface Direction

## Purpose

This file defines the visual character, UI principles, and hard visual constraints for the Denarius marketing site.

It is a direction, not a fixed component inventory or layout prescription. Fable 5 should have room to develop a distinctive page while keeping the final result aligned with the Denarius application and product purpose.

## Visual north star

The site should feel:

- highly professional;
- precise;
- financially credible;
- refined;
- calm;
- modern without being experimental;
- premium through restraint rather than decoration;
- related to the product, not separated from it.

Reference the quality level of Ramp, Stripe, Linear, and Robinhood in terms of hierarchy, polish, confidence, and synthesis.

Do not reproduce their layouts, art direction, copy, or signature patterns.

## Relationship to the app

The app establishes the core visual language:

- dark neutral environment;
- subtle surface separation;
- controlled orange accent;
- concise information hierarchy;
- restrained cards and borders;
- financial data as the visual focus;
- low-noise interaction.

The marketing site may be more expressive than the app, but it should feel like the same company.

Do not simply place app cards into every section. Translate the product's precision into editorial composition, typography, spacing, product demonstrations, and clear visual rhythm.

## Design latitude

Fable 5 may determine:

- the final grid;
- section order and composition;
- hero structure;
- balance between typography and product visuals;
- use of full-width or contained sections;
- how product demonstrations are framed;
- where to use contrast shifts;
- whether a section needs cards, a continuous canvas, or another composition;
- the appropriate amount of motion;
- how the page develops visual momentum.

Use the available content and assets to choose the strongest system rather than forcing every idea into a predefined layout.

## Color direction

Use a dark theme as the primary expression.

The base should use warm or neutral near-black tones with small luminance differences between the page, sections, and product surfaces.

The brand orange should be intentional and limited.

Use medium orange for:

- primary action;
- selected or active states;
- progress;
- key data series;
- small moments of emphasis.

Use lighter orange for:

- compact interactive text;
- icons;
- subtle details.

Semantic colors remain separate:

- red for actual failure, error, or confirmed budget overrun;
- amber for risk or attention;
- green for controlled or healthy states.

The orange brand accent must not become a substitute for every semantic state.

## Typography

Typography should carry much of the premium quality.

Aim for:

- strong but controlled display type;
- clear contrast between statement, explanation, and proof;
- concise headings;
- readable line lengths;
- disciplined weight usage;
- numeric emphasis where the product outcome is financial;
- a rhythm that feels editorial rather than template-driven.

The hero can be large, but not theatrical.

Avoid making every heading oversized or bold.

Avoid long centered paragraphs.

## Layout and rhythm

Use a consistent container and spacing system.

Favor:

- clear alignment;
- deliberate negative space;
- section-to-section variation with a shared system;
- a strong focal point per section;
- balanced asymmetry where appropriate;
- product evidence placed close to the claim it supports;
- responsive compositions that preserve narrative order.

The page should not become a continuous stack of identical rounded cards.

Empty space must feel intentional. Remove accidental gaps, but do not fill every area with decoration.

## Surfaces, borders, and depth

Use restrained surface differences to create depth.

Cards and panels should generally have:

- neutral surfaces;
- subtle borders;
- little or no shadow;
- consistent internal spacing;
- a clear reason to exist.

Cards are not the default container for every piece of content.

Use stronger contrast only when it advances hierarchy or separates a major narrative moment.

## Radius system

Use a systematic scale rather than one radius everywhere.

Suggested range:

- dense controls: approximately 6px;
- inputs and selects: 8–10px;
- standard buttons: 10–14px;
- cards and large panels: 12–14px;
- status badges: pill;
- isolated icon buttons: circular where appropriate.

The rounded logo may influence the system, but it does not justify turning the entire site into pills.

## CTA presentation

Primary actions should be visible and confident without becoming loud.

Interaction behavior:

- keep the button body stable;
- move only the arrow or chevron by roughly 2–3px;
- use a restrained contrast change;
- a primary button may rise by at most 1px;
- active state returns to the original position;
- no dramatic scale;
- no glow.

Secondary actions should remain clearly subordinate.

Important actions should look like buttons, not detached text links.

## Product visuals and assets

Product visuals should prove the product's value.

Good directions include:

- a real interface frame;
- focused crops;
- contextual product scenes;
- a sequence that explains workflow;
- data visualizations that clarify the claim;
- annotated details used sparingly.

When a final asset does not exist:

- reserve intentional space;
- use a reusable placeholder component;
- preserve the expected aspect ratio;
- maintain responsive behavior;
- label the placeholder clearly for later replacement;
- keep the surrounding composition complete without pretending the asset exists.

Do not generate fake dashboard content to make the page appear finished.

Do not use generic stock imagery as a substitute for product evidence.

## Motion

Motion should communicate polish and continuity.

Suggested timing:

- fast: 120ms;
- standard: 160ms;
- upper bound for small interactions: 180ms;
- easing: `cubic-bezier(0.22, 1, 0.36, 1)`.

Section reveals may be used when subtle and performant.

The page must remain understandable and visually complete with reduced motion enabled.

## Responsiveness

Design and review at minimum:

- 1440px;
- 1024px;
- 768px;
- 390px.

On smaller screens:

- keep the primary CTA visible early;
- preserve the narrative order;
- avoid horizontal scrolling;
- keep buttons comfortably tappable;
- do not depend on hover;
- preserve product visual proportions;
- avoid shrinking complex desktop compositions until they become unreadable;
- reorganize grids rather than merely compressing them;
- maintain deliberate vertical rhythm.

## Accessibility and performance

- Use semantic HTML.
- Maintain visible keyboard focus.
- Meet appropriate contrast.
- Provide useful alternative text.
- Respect reduced-motion preferences.
- Avoid interaction that requires fine pointer control.
- Do not hide critical content in hover-only states.
- Avoid autoplay media with sound.
- Avoid heavy animation libraries for minor effects.
- Use optimized images and appropriate sizing.
- Prevent layout shift.
- Keep client-side JavaScript proportional to actual interaction needs.

## Precise visual prohibitions

Do not use:

- neon gradients;
- large orange glows;
- gradient text in primary headings;
- glassmorphism as the dominant surface language;
- blurred floating orbs;
- generic AI brain, spark, circuit, robot, or magic-wand imagery;
- crypto coins, trading charts, blockchain motifs, or metallic currency imagery;
- fake customer logos;
- fake security badges;
- fabricated dashboard screenshots;
- decorative terminal windows unrelated to the product;
- code rain or hacker aesthetics;
- strong parallax;
- scroll-jacking;
- bouncing buttons;
- continuous pulsing CTAs;
- cursor-following effects;
- 3D objects added only for spectacle;
- oversized background grids competing with content;
- orange as a large structural page background;
- orange borders around every card;
- every section inside a card;
- nested cards without a functional reason;
- pills for normal headings, paragraphs, or structural containers;
- excessive status chips;
- red used for projection before an actual overrun when amber is the correct state;
- multiple competing primary buttons in the same section;
- icon boxes attached to every heading;
- a full-page sequence of identical three-column feature cards;
- a bento grid used as the entire page structure;
- decorative charts with meaningless values;
- mockups tilted or floating only to appear more "tech";
- animation that delays reading or conversion;
- mobile layouts that are merely scaled-down desktop layouts.

## Final visual review

Before approval, verify:

- the page is recognizably Denarius without relying only on the logo;
- the app and site feel related;
- the orange accent has a clear purpose;
- the design looks financially trustworthy;
- product visuals support the message;
- no section feels copied from a generic SaaS template;
- section compositions vary without losing system consistency;
- spacing feels deliberate;
- hierarchy remains strong at all target widths;
- the page does not depend on effects to feel premium;
- the interface looks authored, not AI-generated.
