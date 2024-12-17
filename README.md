# GitaVerse


A TypeScript library to access Bhagavad Gita shlokas, translations, and metadata. This library allows developers to fetch chapters, verses, and complete shloka details from the Bhagavad Gita, including the translations and synonyms.

---

## 📖 Description

The **Gita Library** provides a structured and programmatic way to access the verses (shlokas) of the Bhagavad Gita. Whether you're building a spiritual application, research tool, or educational platform, this library makes accessing Gita's wisdom easy and developer-friendly.

---

## 🚀 Features

- Fetch **all verses** in a chapter.
- Get **specific shlokas** by chapter and verse number.
- Retrieve detailed **translations**, **synonyms**, and **Devanagari text**.
- Group shlokas by chapters.
- Includes metadata about the Bhagavad Gita.

---

## 📦 Installation

Install the library using **npm**:

```bash
npm install gitaverse
```

or using **yarn**:

```bash
yarn add gitaverse
```

---

## 🔧 Usage

Here is an example of how to use the **Gita Verse**.

### Import and Initialize the Library

```typescript
import { GitaLibrary } from "gita-library";

const gita = new GitaLibrary();
```

---

### 1. Get Metadata About the Gita

```typescript
const metadata = gita.getDescription();
console.log(metadata);
/*
Output:
{
  title: "Bhagavad Gita",
  description: "The Bhagavad Gita, often referred to as the Gita, is a 700-verse Hindu scripture that is part of the Indian epic Mahabharata.",
  totalChapters: 18,
  totalVerses: 700
}
*/
```

---

### 2. Fetch All Shlokas in a Chapter

```typescript
const chapter1Shlokas = gita.getChapter(1);
console.log(chapter1Shlokas.map((shloka) => shloka.getSummary()));
```

---

### 3. Fetch a Specific Shloka by Chapter and Verse Number

```typescript
const shloka = gita.getShloka(1, 1);
console.log(shloka.getSummary());
/*
Output:
{
  chapter: "1",
  verse: "1",
  devanagari: "धृतराष्ट्र उवाच...",
  verseText: "Dhritarashtra said...",
  synonyms: "Dhritarashtra - King Dhritarashtra...",
  translation: "King Dhritarashtra inquired...",
  meaning: ["Literal meaning of the verse...", "Deeper spiritual significance..."]
}
*/
```

---

### 4. Fetch All Verses Grouped by Chapter

```typescript
const allVerses = gita.getAllVerses();
allVerses.forEach((chapter) => {
  console.log(`Chapter ${chapter.getShlokas().length} Shlokas`);
});
```

---

## 📚 API Reference

### `GitaLibrary` Methods:
- **`getDescription()`**: Returns Gita metadata.
- **`getChapter(chapterNumber: number)`**: Returns all shlokas for the specified chapter.
- **`getShloka(chapterNumber: number, verseNumber: number)`**: Returns a specific shloka.
- **`getAllVerses()`**: Fetches all verses grouped by chapters.

### `GitaShloka` Methods:
- **`getSummary()`**: Returns a structured summary of the shloka.
- **`getChapter()`**: Returns the chapter number.
- **`getVerse()`**: Returns the verse number.
- **`getDevanagari()`**: Returns the verse in Devanagari script.
- **`getVerseText()`**: Returns the verse text.
- **`getTranslation()`**: Returns the translation.
- **`getMeaning()`**: Returns the meaning of the shloka.

---

## 🛠 Contributing

Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a feature branch.
3. Submit a Pull Request.

---

## 🐞 Issues

If you encounter any bugs or have feature requests, please create an issue on the [GitHub repository](https://github.com/ravikisha/GitaVerse/issues).

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🌟 Show Your Support

If you like this library, please ⭐ the repository and share it with others who might find it useful!

---

## ✨ Stay Inspired

_"You have the right to work, but never to the fruit of work."_ — **Bhagavad Gita** (Chapter 2, Verse 47)

---