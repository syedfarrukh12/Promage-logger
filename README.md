# Logger Service

The Logger Service is a utility module for logging messages and errors in a Node.js application.

## Description

The Logger Service provides a simple and customizable logging solution for Node.js applications. It offers functionality to log messages and errors to different output streams such as the console and also stores the logs in database

## Features

- **Message Logging**: Log informational messages with customizable log levels.
- **Error Logging**: Capture and log errors with stack traces for debugging.
- **Configurable Log Levels**: Define custom log levels and filter messages based on severity.
- **Timestamps**: Include timestamps in log messages for tracking events.

## Technologies Used

- **Node.js**: JavaScript runtime for building server-side applications.
- **Express**: A web application framework for Node.js.

## Installation

1. Clone this repository: `git clone <repository-url>`
2. Navigate to the project directory: `cd promage-logger`
3. Install dependencies: `npm install`
4. Create a `.env` file in the root directory and add necessary environment variables. An `.env` file is also provided for you to test app without configuring connection string
5. Start the service: `npm run dev`

## Usage

1. Define a url in your `.env` file and store the url for logger service in it.
2. Configure the logger with desired options such as log level, output streams, and formatting.
3. Use the logger instance to log messages and errors throughout your application.
4. By default local logger service url is `http://localhost:8080/`
5. Make sure to run this service as well if you want your actions to be logged.

## Contributing

Contributions are welcome! Please follow the [Contribution Guidelines](CONTRIBUTING.md).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
