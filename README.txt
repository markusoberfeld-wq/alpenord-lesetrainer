AlpeNord Lesetrainer V0.4r – DOM/Verovio Initialisierung repariert
Basis: V0.4q; eingefrorener Referenzstand bleibt V0.4c.
- Ursache der gesamten hängenden Notendarstellung gefunden: Fokus-DOM lag nach dem Hauptscript.
- Fokus-DOM wird nun vor dem Hauptscript geladen, sodass alle getElementById-Referenzen beim Start existieren.
- Zusätzliche Null-Guards verhindern, dass fehlende Fokus-Elemente künftig die gesamte App-Initialisierung abbrechen.
- Dadurch kann waitForVerovio wieder ausgeführt werden und Einzelton/Blattlesen werden normal gerendert.
- 2-Takt-Nachrücken im Fokusmodus bleibt unverändert erhalten.
