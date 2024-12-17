import GitaData from './gita.json';// Ensure you have a types file with ShlokaData interface
const gitaData: ShlokaData[] = GitaData as ShlokaData[];

// Custom Exception Classes
class VerseNotFoundError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'VerseNotFoundError';
    }
}

class ChapterNotFoundError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'ChapterNotFoundError';
    }
}

class ShlokaNotFoundError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'ShlokaNotFoundError';
    }
}

// Interfaces for data structure
interface ShlokaData {
    Chapter: string;
    Verse: string;
    Devanagari: string;
    verseText: string;
    Synonyms: string;
    Translation: string;
    Meaning: string[];
}

class GitaLibrary {
    private gitaData: ShlokaData[];

    constructor() {
        this.gitaData = gitaData;
    }

    // Fetch metadata about the Gita
    getDescription() {
        return {
            title: 'Bhagavad Gita',
            description:
                'The Bhagavad Gita, often referred to as the Gita, is a 700-verse Hindu scripture that is part of the Indian epic Mahabharata.',
            totalChapters: 18,
            totalVerses: 700,
        };
    }

    // Get all shlokas in a chapter
    getChapter(chapterNumber: number) {
        const chapterShlokas = this.gitaData.filter(
            (shloka) => shloka.Chapter === chapterNumber.toString()
        );

        if (chapterShlokas.length === 0) {
            throw new ChapterNotFoundError(`Chapter ${chapterNumber} not found.`);
        }

        return chapterShlokas.map((shloka) => new GitaShloka(shloka));
    }

    // Fetch a specific shloka by chapter and verse number
    getShloka(chapterNumber: number, verseNumber: number) {
        const shlokaData = this.gitaData.find(
            (shloka) =>
                shloka.Chapter === chapterNumber.toString() &&
                shloka.Verse === verseNumber.toString()
        );

        if (!shlokaData) {
            throw new ShlokaNotFoundError(
                `Shloka not found in Chapter ${chapterNumber}, Verse ${verseNumber}.`
            );
        }

        return new GitaShloka(shlokaData);
    }

    // Fetch all verses grouped by chapter
    getAllVerses() {
        const groupedByChapter: { [key: string]: GitaShloka[] } = this.gitaData.reduce(
            (acc, shloka) => {
                if (!acc[shloka.Chapter]) {
                    acc[shloka.Chapter] = [];
                }
                acc[shloka.Chapter].push(new GitaShloka(shloka));
                return acc;
            },
            {} as { [key: string]: GitaShloka[] }
        );

        return Object.keys(groupedByChapter).map(
            (chapter) => new GitaVerse(chapter, groupedByChapter[chapter])
        );
    }

    getVerse(chapterNumber: number, verseNumber: number) {
        const shlokaData = this.gitaData.find(
            (shloka) =>
                shloka.Chapter === chapterNumber.toString() &&
                shloka.Verse === verseNumber.toString()
        );

        if (!shlokaData) {
            throw new VerseNotFoundError(
                `Verse not found in Chapter ${chapterNumber}, Verse ${verseNumber}.`
            );
        }

        return new GitaShloka(shlokaData);
    }
}

class GitaShloka {
    private chapter: string;
    private verse: string;
    private devanagari: string;
    private verseText: string;
    private synonyms: string;
    private translation: string;
    private meaning: string[];

    constructor(data: ShlokaData) {
        this.chapter = data.Chapter;
        this.verse = data.Verse;
        this.devanagari = data.Devanagari;
        this.verseText = data.verseText;
        this.synonyms = data.Synonyms;
        this.translation = data.Translation;
        this.meaning = data.Meaning;
    }

    // Accessor methods
    getChapter() {
        return this.chapter;
    }

    getVerse() {
        return this.verse;
    }

    getDevanagari() {
        return this.devanagari;
    }

    getVerseText() {
        return this.verseText;
    }

    getTranslation() {
        return this.translation;
    }

    getSynonyms() {
        return this.synonyms;
    }

    getMeaning() {
        return this.meaning;
    }

    getVerseName() {
        return `Chapter ${this.chapter}, Verse ${this.verse}`;
    }

    getSummary() {
        return {
            chapter: this.chapter,
            verse: this.verse,
            devanagari: this.devanagari,
            verseText: this.verseText,
            synonyms: this.synonyms,
            translation: this.translation,
            meaning: this.meaning
        };
    }
}

class GitaVerse {
    private chapter: string;
    private shlokas: GitaShloka[];

    constructor(chapter: string, shlokas: GitaShloka[]) {
        this.chapter = chapter;
        this.shlokas = shlokas;
    }

    getShlokas() {
        return this.shlokas;
    }

    getTotalShlokas() {
        return this.shlokas.length;
    }
}

export { GitaLibrary, GitaShloka, GitaVerse, VerseNotFoundError, ChapterNotFoundError, ShlokaNotFoundError };
export default GitaLibrary;
