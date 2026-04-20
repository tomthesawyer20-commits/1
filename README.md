# Scientific Theory Webpage

An interactive webpage for presenting and exploring a new scientific theory.

## Files

| File | Purpose |
|------|---------|
| `index.html` | Main webpage (structure & content) |
| `styles.css` | All visual styling |
| `script.js` | Interactive behaviour (tabs, cards, form) |

## Getting Started

Open `index.html` directly in any modern browser — no build step or server
required.

## Customising the Content

Every section contains clearly labelled placeholder text enclosed in square
brackets `[like this]`. Replace each placeholder with your own content:

1. **Hero** — update the title, description, and stats.
2. **Overview** — describe your theory's core idea and its central equation.
3. **Key Concepts** — edit the six concept cards; add or remove cards as needed.
4. **Theory Explorer** — fill in the postulates, equations, predictions,
   comparisons, and implications panels.
5. **Timeline** — add milestones in the theory's development.
6. **Contact** — update the email, paper link, and social handle.

## What to Ask an AI (e.g. Gemini) to Generate

To get content you can paste straight into this page, ask Gemini something like:

> "Give me structured content for a scientific-theory webpage.
> For each section listed below, provide plain text (and LaTeX-style equations
> where relevant) that I can drop directly into the HTML placeholders:
>
> 1. One-sentence hero tagline for [your theory name]
> 2. Two-paragraph plain-language overview of the core idea
> 3. Six key concept cards — each with a title, a 1-sentence summary,
>    and a 2–3 sentence expanded explanation
> 4. Three core postulates stated as numbered axioms
> 5. The central governing equation with a term-by-term explanation
> 6. Four falsifiable predictions
> 7. Comparisons to three existing theories (one sentence each)
> 8. Three broader implications (one sentence each)
> 9. Four timeline milestones (date label, event title, 1-sentence description)
>
> Keep all responses concise enough to fit inside card-style UI components."

Once Gemini replies, copy each section into the matching placeholder in
`index.html` and save.

