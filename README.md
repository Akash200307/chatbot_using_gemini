
---

# Google Generative AI API Server

This project sets up a server using Express.js to interact with Google's Generative AI API. It allows users to generate content based on provided prompts using the Gemini 1.5 Flash model.

## Prerequisites

- Node.js installed on your machine.
- Obtain an API key from Google Generative AI and set it in a `.env` file (refer to "Set up your API key" documentation).

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/your_username/your_project.git
   cd your_project
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your API key:
   ```
   API_KEY=your_google_generative_ai_api_key
   ```

4. Start the server:
   ```bash
   npm start
   ```

   The server will run on `http://localhost:8080`.

## Usage

### Generate Content

Send a POST request to `/generate` with a JSON body containing a `prompt`:
```json
{
  "prompt": "Your prompt text here."
}
```

#### Example:
```bash
curl -X POST -H "Content-Type: application/json" -d '{"prompt": "Generate a creative paragraph about space exploration."}' http://localhost:8080/generate
```

### Response

The server responds with the generated text based on the provided prompt.

## CORS Configuration

The server is configured to accept requests from:
- `http://localhost:5173`
- `http://localhost:5174`

## Error Handling

If there's an error during content generation, the server will respond with a `500` status code and a message "failed".

## Contributing

Feel free to contribute by submitting issues and pull requests.
