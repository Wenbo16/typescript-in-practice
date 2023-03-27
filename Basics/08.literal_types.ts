let changingString = "Hello World";
changingString = 'Hello TypeScript';

// only one possible value
const constantString = 'Hello World';

declare function printText(s: string, alignments: "left" | 'right'): void;

printText('', 'right')