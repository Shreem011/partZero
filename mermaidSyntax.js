sequenceDiagram
    participant browser
    subscriber server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    activate the server
    server-->>browser: HTML document
    disable the server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate the server
    server-->>Browser: css file
    disable the server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    activate the server
    server-->>Browser: JavaScript file
    disable the server

    Note to the right of the browser: The browser will start executing the JavaScript code that will retrieve the JSON from the server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate the server
    server-->>browser: [{ "content": "HTML is easy", "date": "2023-1-1" }, ... ]
    disable the server

    Note on the right side of the browser: The user writes a new note and clicks send

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/notes
    activate the server
    browser-->>server: New note data
    server-->>server: Save a new note
    server-->>Browser: Successful response
    disable the server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate the server
    server-->>Browser: Updated note list
    disable the server