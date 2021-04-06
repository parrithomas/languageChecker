# languageChecker
Simple CLI tool. You give it a string, it tells you what language it is.

Created as part of the Colt Steele Web Developer Bootcamp as an exercise to learn how to apply common node and npm syntax.
A string is passed to the 'Franc' package which returns an object from which a three letter country code is pulled.
The three letter country code is passed into the 'langs' package, which returns the code as a human-readable country name.
The identified language is printed to the console and coloured green with the 'colors' package if successul.
If no language is identified an error message is printed to the console, coloured red with the 'colors' package
