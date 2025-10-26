# Identifier Length Limit Tester

> A React tool to test if variable, function, or table names exceed compiler and database identifier length limits across different programming languages.

## 🚀 Features

- Test identifier lengths against multiple language limits
- Real-time validation with visual feedback
- Support for 10+ languages and platforms including:
  - C99+, C++
  - Java, Python, JavaScript
  - MySQL, PostgreSQL, Oracle, SQL Server
- Beautiful UI with Tailwind CSS
- Interactive examples for quick testing
- Visual progress bars and status indicators

## 📋 Supported Languages

| Language | Limit | Details |
|----------|-------|---------|
| C99+ | 63 chars | Warning at 31 chars (C89) |
| C++ | 255 chars | |
| Java | 65535 chars | Recommendation at 100 chars |
| Python | 500 chars | PEP 8 recommendation at 79 chars |
| JavaScript | 1000 chars | Recommendation at 50 chars |
| MySQL | 64 chars | |
| PostgreSQL | 63 chars | |
| Oracle (pre-12.2) | 30 chars | |
| Oracle (12.2+) | 128 chars | |
| SQL Server | 128 chars | |

## 🛠️ Installation

```bash
# Clone the repository
git clone https://github.com/jahidbappi/Identifier-Length-Limit-Tester.git

# Install dependencies
npm install

# Run development server
npm run dev
```

## 📦 Usage

```jsx
import IdentifierLengthTester from './IdentifierLengthTester';

function App() {
  return <IdentifierLengthTester />;
}
```

## 🎨 Tech Stack

- **React** - UI library
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
- **Vite** - Build tool

## 📝 License

MIT License - feel free to use this project for personal or commercial purposes.

## 👤 Author

Created by [jahidbappi](https://github.com/jahidbappi)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!
