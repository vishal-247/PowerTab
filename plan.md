# 🚀 PowerTab — Feature Roadmap

> **Vision:** An AI-powered, free-form spatial browser extension that replaces rigid note lists with an infinite digital canvas.

---

## 🟢 Layer 1 — MVP (Build This First)

> *Goal: Ek working, usable product jisko real users try kar sakein. No AI, no complexity — sirf core canvas experience.*

### 1.1 🗺️ Free-Form Spatial Canvas
- Infinite drag-and-drop workspace (no grid, no columns)
- Notes freely movable anywhere on screen
- `(x, y)` coordinate persistence — layout saves on refresh
- Smooth drag interactions with mouse + touch support

### 1.2 📝 Basic Note Card
- Create / Edit / Delete text notes
- Single note type (plain text only at this stage)
- Clean minimal card UI with a title + body
- Auto word-wrap for long content inside card boundaries

### 1.3 🧭 Tab Navigation Bar
- Persistent top nav: `NOTES` | `FLOW` | `REMEMBER`
- Smooth tab switching (no page reload)
- Active tab indicator

### 1.4 💾 Local Storage Persistence
- All notes saved in `IndexedDB` (offline-first)
- No server, no login, no account needed
- Data survives browser restart

### 1.5 🎨 Canvas Zones (Basic)
- Ability to create colored background regions
- Drag notes freely inside/outside zones
- 4–5 preset zone colors (Work, Personal, Ideas, etc.)

### 1.6 🖱️ Hover-Triggered Action Dock
- Action buttons (Delete, Edit, Copy) hidden by default
- Smoothly fade in on card hover
- Clean, minimal UI — no clutter when not in use

---

## 🟡 Layer 2 — Intermediate (Ship After MVP is Stable)

> *Goal: Extend the canvas into a real thinking tool. Add note types, flow mapping, and basic AI features.*

### 2.1 🗂️ Note Types System
- **Text Note** — plain text (already in MVP)
- **Link Card** — auto-fetches URL favicon + page title
- **Code Block** — syntax highlighting support
- **Image Drop Zone** — drag & drop image directly onto canvas

### 2.2 🔀 Flow Mapping System
- Switch to `FLOW` tab to enter graph mode
- Draw visual lines (edges) between note cards
- Notes become nodes in a connected mind-map
- Basic directional arrows on edges

### 2.3 🔗 Bi-Directional Linking
- Type `[[Note Title]]` inside any note
- Auto-creates a visual edge in Flow view
- Clicking the link jumps to the connected note

### 2.4 🧠 Context-Aware Page Scraper
- On `NOTES` tab, auto-detects active browser tab's URL + title
- One-click to capture page metadata into a new note card
- Option to generate a bulleted summary of the current page

### 2.5 🎯 Focus Mode
- Spotlight a selected note or zone
- Rest of the canvas dims/blurs in the background
- Keyboard shortcut to toggle (e.g. `F` key)

### 2.6 🔍 Basic Search Panel (`REMEMBER` tab)
- Full-text search across all notes on the canvas
- Results highlight matching cards and center the view on them
- Search history (last 5 queries)

---

## 🔴 Layer 3 — Bonus / Advanced (Future Vision)

> *Goal: Make PowerTab genuinely intelligent. These features set it apart from every other tool in the market.*

### 3.1 🤖 AI Auto-Dock (Semantic Clustering)
- Analyzes all notes using text embeddings
- Automatically moves related cards close together
- Creates visual topic clusters on the canvas
- One-click "Auto-Organize" button

### 3.2 💬 "Ask My Board" — Conversational AI
- AI sidebar chat powered by semantic search (RAG)
- Query your own canvas: *"Show me the GitHub snippet I saved"*
- Understands context across all notes — not just keyword matching
- Maintains conversation history per session

### 3.3 ✨ AI Sparkle Actions (Per-Note)
- Small `🪄` button on each note card header
- Inline AI options:
  - Fix grammar
  - Summarize into bullet points
  - Explain code snippet
  - Convert to action checklist
- Powered by Claude API (Sonnet model)

### 3.4 📸 Time Capsule Snapshots
- Save canvas state as a named snapshot (like Git commits)
- Browse and restore previous versions of the board
- *"What did my board look like 3 days ago?"*
- Stored locally in IndexedDB

### 3.5 🌐 Share a Snapshot
- Export canvas as a **read-only public link**
- Like Figma's share mode — view only, no editing
- Optional: password-protect the shared link
- No account required to view

### 3.6 🧩 Browser Context Integration
- Extension auto-detects highlighted text on any page
- Right-click → "Save to PowerTab Canvas"
- Creates a new note card with source URL attached
- Preserves reading context (page title, section)

---

## 📊 Summary Table

| Feature | Layer | Priority |
|---|---|---|
| Free-Form Canvas + Drag | MVP 🟢 | P0 |
| Local Storage (IndexedDB) | MVP 🟢 | P0 |
| Basic Note Cards | MVP 🟢 | P0 |
| Hover Action Dock | MVP 🟢 | P1 |
| Canvas Zones | MVP 🟢 | P1 |
| Tab Navigation | MVP 🟢 | P1 |
| Note Types (Link, Code, Image) | Intermediate 🟡 | P2 |
| Flow Mapping (Mind Map) | Intermediate 🟡 | P2 |
| Bi-Directional Linking | Intermediate 🟡 | P2 |
| Page Scraper | Intermediate 🟡 | P2 |
| Focus Mode | Intermediate 🟡 | P3 |
| Search Panel | Intermediate 🟡 | P3 |
| AI Semantic Clustering | Bonus 🔴 | P4 |
| Ask My Board (RAG Chat) | Bonus 🔴 | P4 |
| AI Sparkle Actions | Bonus 🔴 | P4 |
| Time Capsule Snapshots | Bonus 🔴 | P5 |
| Share a Snapshot | Bonus 🔴 | P5 |
| Browser Context Integration | Bonus 🔴 | P5 |

---

> 💡 **Build Order Tip:** MVP → Get 10 real users → Intermediate → Ship Flow Mapping → Layer 3 AI features last. AI bina bhi ye tool already useful hona chahiye — tab AI use karna magic lagega.