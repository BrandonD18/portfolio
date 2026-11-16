# DESIGN.md

One design system for the BDdigital site. The brand decides colours and
fonts. The reference sites decide layout and feel. Every visual choice on the
site must trace back to this file.

## 1. References and what is taken from each

Only layout, proportion and feel are borrowed. No wording, logos, images or
brand marks from any reference appear on the site.

| Reference | What is taken |
|---|---|
| publicisgroupe.com | Full-width dark hero with one large headline. A white card that overlaps the bottom of the hero and carries a short statement. Uppercase, letter-spaced menu. |
| group.dentsu.com | Plain white menu bar with simple links. Hero headline set left, with a small coloured label above it. Soft abstract light shapes in the hero. Pale grey bands to separate sections. |
| wpp.com | Generous white space. Work shown as a quiet list with a name and a short caption. Deep navy text instead of pure black. |
| havas.com | Hairline rules between sections. One accent colour used sparingly. Very large type as the main visual. |
| omnicomgroup.com | Named by the owner, but the site could not be opened, so nothing is taken from it. |

Chosen direction: **dark hero, white body** (Publicis and Dentsu).

## 2. Colours

Proposed brand palette. The owner had no existing colours.

| Name | Hex | Used for |
|---|---|---|
| Midnight | `#070B1F` | Hero and footer background |
| Navy ink | `#0B1238` | Headings and body text on white |
| Slate | `#4A5170` | Secondary text on white |
| Mist | `#AEB4CC` | Secondary text on dark |
| White | `#FFFFFF` | Page background, text on dark |
| Paper | `#F3F4F7` | Alternate section bands |
| Hairline | `#DFE2EA` | Rules and borders on white |
| Hairline dark | `#262C4A` | Rules and borders on dark |
| Gold | `#E3B04B` | The single accent: labels and buttons on dark, key numbers |
| Deep gold | `#8A6410` | The accent on white backgrounds, where Gold is too pale to read |

Rules:

- One accent only. Gold never fills large areas.
- Body text contrast is at least 4.5:1. Gold text is used on Midnight only.
  On white, use Deep gold.

## 3. Fonts

| Role | Font | Weights |
|---|---|---|
| Headings, numbers | Manrope | 600, 700, 800 |
| Body, menu, form | Inter | 400, 500, 600 |

Both are open-licence fonts, served from the site's own files. No font is
loaded from another company's servers.

Type scale (desktop / phone):

| Style | Size | Notes |
|---|---|---|
| H1 hero | 72px / 40px | Manrope 800, line height 1.04, letter spacing -0.02em |
| H1 inner page | 56px / 34px | Manrope 800 |
| H2 | 40px / 28px | Manrope 700, line height 1.12 |
| H3 | 22px / 20px | Manrope 700 |
| Statement | 26px / 20px | Inter 400, line height 1.45 |
| Body | 17px / 16px | Inter 400, line height 1.6, max line length 68 characters |
| Label | 13px | Inter 600, uppercase, letter spacing 0.14em |
| Big number | 72px / 48px | Manrope 800 |

## 4. Spacing and layout

- Spacing steps: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128px.
- Content width: 1200px maximum, with 32px side padding (20px on phones).
- Sections: 128px top and bottom on desktop, 72px on phones.
- Grid: 12 columns, 24px gutters. Text blocks sit in 7 columns or fewer.
- Corners: 4px on buttons, inputs and cards. Nothing is pill-shaped.
- Shadows: one only, on the statement card: `0 24px 60px rgba(7, 11, 31, 0.12)`.
- Phones first: every layout collapses to one column below 800px.

## 5. Components

**Menu bar.** White, 76px tall, sticks to the top, hairline underneath. Name on
the left in Manrope 800. Links in the Label style. The "Start an enquiry"
button sits on the right. On phones the links fold into a menu button.

**Hero (home).** Midnight background, at least 88% of the screen height.
Headline set left across 9 columns, Gold label above it, opening line in Mist
below, then the button and a text link. Behind the text, a slow abstract visual
drawn in code: soft overlapping rings of light with a scatter of small dots
drifting toward one point, in navy, gold and white. No photographs.

**Hero (inner pages).** Same Midnight background, 48% of the screen height, no
animation, a still version of the rings at the right edge.

**Statement card.** White card that overlaps the bottom of the home hero by
96px. 10 columns wide, 64px padding, Statement type style, with the shadow.

**Number strip.** Three numbers in a row with hairlines between them. Big
number style in Navy ink, caption in the Label style in Slate.

**Service card.** White, hairline border, 40px padding. Small Deep gold number
(01, 02), H3 heading, body text, text link with an arrow. On hover the border
turns Navy ink.

**Step list.** Three numbered steps side by side, each with a hairline on top
and the step number in Deep gold.

**Work list.** One row per system with a hairline between rows: area label on
the left, name in H3, description on the right. No images.

**Feature block.** For AI Inbox Copilot. Midnight panel with a Gold label, H2,
body text in Mist and the price line in white.

**"What you get" list.** Two-column list. Each item has a bold lead-in and one
sentence, with a hairline above.

**Questions.** Each question is a row that opens to show its answer.

**Buttons.** Primary: Gold background with Midnight text on dark sections, Navy
ink background with white text on light sections. 4px corners, 16px by 28px
padding, Inter 600. Secondary: text link with an underline and an arrow.

**Form.** One column, 560px maximum width. Labels above inputs. Inputs 52px
tall with a hairline border that turns Navy ink on focus, plus a visible focus
ring. Errors appear in plain words under the field.

**Footer.** Midnight background, name and footer line on the left, links and
email on the right, small print under a dark hairline.

## 6. Motion

- The hero visual drifts slowly. Everything else is still.
- Sections fade up by 16px once as they enter the screen, over 500ms.
- Motion is switched off for visitors who ask their device to reduce motion.

## 7. Hard rules

- Only the words in COPY.md appear on the site.
- No invented logos, press mentions, testimonials or statistics.
- No third-party embeds, trackers or fonts loaded from other servers.
- No stock photography. Visuals are drawn in code.

## 8. Decision log

| # | Decision | Why |
|---|---|---|
| 1 | Dark hero with a white body | The owner's pick from the four reference looks. |
| 2 | Midnight navy rather than pure black | Publicis and WPP both use deep navy. It reads as established rather than edgy. |
| 3 | Gold as the single accent | Signals a premium service for high-ticket buyers. One accent only, after Havas. |
| 4 | Two golds | Gold fails contrast on white, so Deep gold is used there. |
| 5 | Manrope for headings, Inter for body | Manrope gives the heavy geometric headline of the Dentsu hero. Inter is already on the owner's portfolio and reads well small. |
| 6 | Fonts served from the site itself | The no-third-party rule covers font servers too. |
| 7 | Headline set left, not centred | Dentsu's layout. It leaves room for the hero visual and reads better on phones. |
| 8 | Overlapping statement card | The clearest borrowed idea from Publicis, and it carries the site's main argument. |
| 9 | Work shown as a list with no images | There are no real screenshots or client logos to show. A WPP-style list stays honest. |
| 10 | Hero visual drawn in code | No stock photos, and nothing copied from the references' imagery. |
| 11 | 4px corners, no pills | Square, corporate edges match Publicis, Dentsu and Havas. |
| 12 | Four pages: Home, Services, Work, Contact | The owner's choice. About is folded into Home. |
