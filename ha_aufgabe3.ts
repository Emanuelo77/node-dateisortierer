import fs from 'fs';
import path from 'path';

function kopiereDateienQuelleZiel(quellOrdner, zielOrdner) {
    const dateien = fs.readdirSync(quellOrdner);
    dateien.forEach(datei => {
        const dateiPfad = path.join(quellOrdner, datei);
        const zielDateiPfad = path.join(zielOrdner, path.extname(datei));
        fs.copyFileSync(dateiPfad, zielDateiPfad);
        console.log('Datei ' + datei + ' wurde kopiert nach ' + zielDateiPfad);
    });
}

// Beispielaufruf
kopiereDateienQuelleZ
kopiereDateienQuelleZiel('./quelleOrdner', './zielOrdner');