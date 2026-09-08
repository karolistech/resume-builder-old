better name: cv app, resume-builder

dataKey="start-date"
value={education["start-date"]}

data-* attributes are not really HTML naming. They are a bridge to JavaScript.

Follow this pattern: onClick={() => handleCardClick(pokemon.id)} inside the item/card

Inspiration: https://sharkri.github.io/cv-application/
https://cv-architect.vercel.app/

check exports syntax

const exampleCv = {
  name: "John Doe",
  email: "john@example.com",
  phone: "123456",
  location: "Berlin",
  education: [
    {
      school: "Example University",
      degree: "BSc Computer Science",
      startDate: "2020-09",
      endDate: "2023-06",
      location: "Berlin"
    }
  ]
};

<EducationList ... /> + item instead of just list.

Inside a component, things naturally fall into layers:
1. State & hooks
2.Derived values (computed from state/props)
3. Event handlers / actions
4. JSX (rendering)

1. add a chevron to personal details (it will fix uneven spacing between title
and form inputs)
2. reduce padding on mobile view
3. flex: 1 takes remaining space on editor or resume 
4. <div className="visual" /> (if the tag has no content maybe it can be 
self-closing?)
5. Does wrapping label around input not require id/htmlFor?


┌───────────────┬───────────────┐
│ sidebar       │               │
│ editor        │   resume      │
│               │               │
└───────────────┴───────────────┘


When narrow:
┌───────────────┐
│ sidebar       │
├───────────────┤
│ editor        │
├───────────────┤
│ resume        │
└───────────────┘

Widget is a first-class layout element.  It is not part of editor actions

You’re not imagining it — what you’re seeing is a real browser rendering artifact, and it happens specifically when you combine:

    a 1px border

    a 50/50 gradient split

    rounded corners

    and certain device pixel ratios


Yes, wrapping an input inside a <label> makes id / htmlFor unnecessary.

explicit association / implicit association

Wrapped input (recommended here)
Cleaner JSX, fewer attributes, easier styling as a unit

htmlFor + id
Useful when label and input must be far apart in the DOM

For a settings panel like this, wrapping is the better choice.

<button
  className="education-section__toggle"
  data-open={isOpen}
  onClick={toggleSection}
>
  <i className="fa-solid fa-graduation-cap"></i>
  <span className="education-section__title">Education</span>
  <i className="fa-solid fa-chevron-down education-section__chevron" />
  // no need for chevron, just education-section--open
</button>
