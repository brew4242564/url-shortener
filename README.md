
# URL Shortener

CLI URL shortener and Express server for redirecting links.


## Demos
- https://url-shortener-256o.onrender.com/c9gMUpa
- https://url-shortener-256o.onrender.com/nHCYnh6

## Installation

```bash
  git clone https://github.com/brew4242564/url-shortener.git
  cd url-shortener
  pnpm install
```

## Enviroment variables
`SUPABASE_URL`
`SUPABASE_KEY`
`BASE_URL`

## Usage/Examples

```javascript
# Short Link
pnpm short "<url>"

pnpm short "https://www.youtube.com/watch?v=aJfRg2Agk0g"
>> https://url-shortener-256o.onrender.com/0iA-GdQ

# Wake server
pnpm server

# View history
pnpm history # without number, history = 0;
pnpm history <number of page>
pnpm history 2
```

## Tech Stack

**CLI:** Js

**Server:** Node, Express

**Database:** Supabase

## Roadmap
- Shortened Link History
- Custom Shortcodes
- URL Normalizer

