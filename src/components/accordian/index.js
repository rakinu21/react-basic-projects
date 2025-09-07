 const data = [
  {
    id: "1",
    question: "What is an accordion component?",
    answer:
      "An accordion shows and hides content in collapsible sections so users can scan headings and expand details on demand."
  },
  {
    id: "2",
    question: "Can multiple accordion items be open at once?",
    answer:
      "It depends on your implementation. You can allow multiple to stay open or enforce a single-open policy like a radio group."
  },
  {
    id: "3",
    question: "How do I make an accordion accessible?",
    answer:
      "Use <button> for headers, toggle aria-expanded, link button and panel via aria-controls and id, and manage focus with keyboard support."
  },
  {
    id: "4",
    question: "What keyboard interactions should be supported?",
    answer:
      "Enter/Space to toggle, Tab to move focus, and optionally Arrow Up/Down to move between headers."
  },
  {
    id: "5",
    question: "How can I add animation to the expand/collapse?",
    answer:
      "Animate the panel’s height (e.g., from 0 to content height) or use CSS transitions with max-height and overflow hidden."
  },
  {
    id: "6",
    question: "When should I use an accordion vs. tabs?",
    answer:
      "Use accordions for long, independent sections users may skim. Tabs work best for mutually exclusive views on the same level."
  },
  {
    id: "7",
    question: "How do I manage accordion state?",
    answer:
      "Store open item ids in state. For single-open, keep one id. For multi-open, keep an array and add/remove ids on toggle."
  },
  {
    id: "8",
    question: "Any performance tips for large accordions?",
    answer:
      "Lazy-render panel content on first open, memoize heavy children, and avoid layout thrashing by batching style reads/writes."
  }
];

export default data;