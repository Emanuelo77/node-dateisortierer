Dateisortierer
Es handelt sich um ein Programm, dessen Dateien in einem Verzeichnis nach ihrem Dateityp sortiert sind. Die Dateien werden in den Unterordner verschoben, die nach ihrem Dateityp benannt sind.

Das Projekt soll helfen, die Grundlagen von Node.js zu verstehen und zu vertiefen. Zusätzlich sollen die Grundlagen von TypeScript, .gitignore, try-catch, Import und Export von Modulen, package.json und npm vertieft werden.

Installation
Um eine .gitignore Datei zu erstellen, die node_modules und das dist Verzeichnis ignoriert, kann folgender Befehl ausgeführt werden:

npx gitignore node
Um eine leere package.json Datei zu erstellen, kann folgender Befehl ausgeführt werden:

npm init
Um TypeScript zu installieren, kann folgender Befehl ausgeführt werden:

npm install typescript --save-dev
Um TypeScript zu konfigurieren, kann folgender Befehl ausgeführt werden:

npx tsc --init
.gitignore
In der .gitignore-Datei können Dateien und Verzeichnisse definiert werden, die von Git ignoriert werden sollen. Das spart Speicherplatz und sorgt dafür, dass keine unnötigen oder sinnvollen Dateien in das Repository geladen werden.

TypeScript-Konfiguration
In der Datei tsconfig.json können die Einstellungen für TypeScript konfiguriert werden. Hier ein Beispiel:

{
  "compilerOptions": {
    "target": "es6",
    "module": "NodeNext",
    "moduleResolution": "nodenext",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true
  },
  "include": ["src/**/*.ts"]
}
package.json
In der package.json-Datei können Informationen über das Projekt, wie Name, Version, Autor, Lizenz, Skripte, Abhängigkeiten und Entwicklungsabhängigkeiten, gespeichert werden. Die drei Hauptfelder sind hierbei dependencies, devDependenciesund scripts.

In der dependencieskönnen die Abhängigkeiten des Projekts gespeichert werden. Ohne diese Abhängigkeiten kann und wird unser Endprodukt nicht funktionieren. In der devDependencieskönnen die Abhängigkeiten gespeichert werden, die nur für die Entwicklung benötigt werden. Sie sollen uns die Entwicklung erleichtern. In der scriptskönnen Skripte gespeichert werden, die häufig verwendeten Befehle speichern.

npm Skripte
Skripte in der package.json-Datei können verwendet werden, um häufig verwendete Befehle zu speichern. Somit müssen sie nicht jedes Mal neu eingegeben werden - ein klanghafter Befehl wie npm run buildreicht aus. Auch wenn der Befehl npm run buildnicht viel kürzer ist tsc, bietet es dennoch Vorteile, die Befehle in der package.json-Datei zu speichern, da sie so leichter wiederverwendet werden können. Wenn wir einen Blick in ein anderes Projekt werfen, kann der Build-Befehl anders lauten. Wenn wir jedoch immer npm run buildverwenden, können wir sicher sein, dass der Build-Befehl immer gleich ist.

In der package.json-Datei können npm-Skripte definiert werden. Hier ein Beispiel:

{
  "scripts": {
    "build": "tsc",
    "start": "node dist/index.js"
  }
}
Mittels npm run buildwird das TypeScript Projekt kompiliert und mittels npm startwird das kompilierte Projekt gestartet.

Wir können auch ein Skript definieren, welches das Projekt kompiliert und danach startet:

{
  "scripts": {
    "dev": "npm run build && npm start"
  }
}
Durch das Hinzufügen eines Pakets namens concurrentlykönnen wir das Projekt noch weiter verbessern. concurrentlyErmöglicht es uns, mehrere Befehle gleichzeitig auszuführen. Installieren können wir das Paket wie folgt:

npm install concurrently --save-dev
Durch das Hinzufügen von nodemonkönnen wir Dateiänderungen überwachen und das Projekt automatisch neu starten. Installieren können wir das Paket wie folgt:

npm install nodemon --save-dev
Nun können wir das devSkript wie folgt definieren:

{
  "scripts": {
    "dev": "concurrently \"tsc -w\" \"nodemon dist/index.js\""
  }
}
@types/node
Node.js stellt uns viele Funktionen zur Verfügung, die wir in TypeScript verwenden können. Allerdings sind diese Funktionen nicht in TypeScript definiert. Um TypeScript zu sagen, dass diese Funktionen existieren, können wir das Paket @types/nodeinstallieren:

npm install @types/node --save-dev
node_modules
In dem node_modules Verzeichnis werden alle Abhängigkeiten des Projekts gespeichert. Es ist wichtig, dass dieses Verzeichnis nicht in das Repository geladen wird. Das Verzeichnis kann in der .gitignore-Datei ignoriert werden.

Anforderungen
Das Programm soll in der Lage sein, Dateien in einem Verzeichnis zu lesen.
Das Programm soll in der Lage sein, Dateien in ein Verzeichnis zu kopieren.
Die Unterordner sollen nach dem Dateityp benannt sein.
Die Dateien sollen in den entsprechenden Unterordner kopiert werden.
Optionale Anforderungen
Das Programm soll in der Lage sein, leere Dateien zu erstellen.
Das Programm soll in der Lage sein, Dateien im Unterordner zu verschieben.
Das Programm soll in der Lage sein, Dateien nach ihrem Dateityp zu sortieren.
Das Programm soll in der Lage sein, Dateien in einem Verzeichnis zu löschen.
Sonstiges
versuchen-fangen
In JavaScript können Fehler mittels try-catchabgefangen werden. Hier ein Beispiel:

try {
  // Code, der einen Fehler werfen könnte
} catch (error) {
  // Fehlerbehandlung
}