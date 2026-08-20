AlpeNord Lesetrainer V0.4yzf – parallele Tastenreihen
20.08.2026

Basis: V0.4ya.

Neu in V0.4yzf:
- Die drei Diskant-Tastenreihen sind geometrisch exakt parallel zum Griffbrettrahmen ausgerichtet.
- Feste X-Achsen: innere Reihe 376, mittlere Reihe 480, äussere Reihe 584.
- Sämtliche bisherigen Y-Positionen, Tastenabstände und musikalischen Zuordnungen bleiben unverändert.
- Wirkt identisch korrekt auch in der quer gedrehten Griffbrettansicht.
- Sichtbare Versionsanzeigen wurden auf V0.4yzf vereinheitlicht.
- Sonst keine Funktionsänderungen gegenüber V0.4ya.

V0.4yzf: Beim Start ist B-Örgeli immer als Stimmung voreingestellt.

V0.4yzf: Griffbrett startet in Einzelton und Blattlesen bei jedem Seitenstart immer unten quer.


V0.4yzf: Im Einzeltonmodus erscheint bei jedem Tastendruck kurz der Name des tatsächlich gedrückten Tons direkt in der Taste. Bei falschen Eingaben bleibt die Anzeige etwas länger sichtbar. Die bestehende Option für dauerhaft sichtbare Notennamen bleibt unverändert.

V0.4yzf: Falsche Taste bleibt gleich lange rot wie der eingeblendete Notenname (1,5 s); bei Griffbrett unten quer bleibt der temporäre Notenname aufrecht lesbar.


Neu in V0.4yzf:
- Einzeltonmodus: optionales Häkchen „Notennamen über den Noten anzeigen“.
- Bei Aktivierung steht über jeder Übungsnote ihr deutscher Notenname; gilt auch bei Mehrtakt-Aufgaben und im Übungsmodus.
- Standard ist aus.


Neu in V0.4yzf:
- Einstellungen ein-/ausklappen neu auch im Einzeltonmodus.
- Einstellungen ein-/ausklappen neu auch im Rhythmusmodus.
- Übungsmodus bleibt davon unabhängig.


Neu in V0.4yzf:
- 1:1-Griffbrett-Kalibrierung auf Desktop ausgeblendet.
- Sichtbar nur auf Touch-Tablets/iPad (700–1400 px Breite).


Neu in V0.4yzf:
- Oberfläche der drei Trainingsmodi visuell vereinheitlicht.
- Gleiche Höhe/Breite für gleichartige Wahlfelder.
- Einstellungen auf Desktop in 3 Spalten, auf Tablet in 2 Spalten, schmal in 1 Spalte.
- Toolbar-Buttons (Einstellungen/Übungsmodus/Griffbrett usw.) einheitlich ausgerichtet.
- Blattlesen-Tonmaterial ebenfalls als gleichmässiges Raster.
- Keine Trainingslogik oder Funktion verändert.


Neu in V0.4yzf:
- V0.4yo-Rhythmus-Skalierung verworfen; Basis wieder V0.4yn.
- Rhythmusnoten/-pausen werden nun tatsächlich ca. 25 % grösser gezeichnet.
- Trackpad/Maus/Stift: Rhythmus-Tippen über pointerdown wieder zuverlässig.
- Punkt-Taste (.) explizit als Rhythmus-Tipp aktiviert.
- Touch-Tippen auf iPad bleibt über die bestehende touchstart-Logik erhalten.


Neu in V0.4yzf:
- V0.4yp-Rhythmusdarstellung nochmals korrigiert.
- Keine Glyphen-Skalierung mehr; dadurch passen Hälse und Notenköpfe wieder sauber zusammen.
- Rhythmusnotation stattdessen über grössere Taktbreiten und grössere Notenzeilen deutlich vergrössert.
- Trackpad/Maus/Stift und Punkt-Taste bleiben repariert.


Neu in V0.4yzf:
- Nur Rhythmus-Notendarstellung geändert.
- VexFlow-Symbole werden nicht einzeln skaliert.
- Die komplette fertig gezeichnete Rhythmusnotation wird anhand ihrer sichtbaren Bounding-Box zugeschnitten und als Einheit vergrössert.
- Dadurch bleiben Notenköpfe, Hälse, Balken, Pausen, Schlüssel und Taktlinien korrekt verbunden.
- Tipp-Eingabe/Trackpad/Punkt-Taste gegenüber V0.4yq unverändert.
- Haltedauer-Bewertung noch NICHT verändert; folgt separat nach Freigabe der Darstellung.


Neu in V0.4yzf:
- Rest der alten VexFlow-Glyphen-Skalierung entfernt.
- Dadurch bleiben Notenkopf und Hals wieder korrekt verbunden.
- Die in V0.4yr passende Gesamtgrösse bleibt über das Bounding-Box-Fit erhalten.
- Tipp-Eingabe unverändert.


Neu in V0.4yzf:
- Im Rhythmusmodus Glyphen-Skalierung vollständig entfernt.
- Erzwungene stem_direction entfernt; Halsrichtung jetzt automatisch.
- Größe/Fit aus V0.4ys bleibt erhalten.


Neu in V0.4yzf:
- Rhythmus 1 Takt als fortlaufender Endlos-Trainingsmodus.
- Kein Ergebnis-Popup nach jedem einzelnen Takt.
- Nach jedem Takt wird automatisch ein neuer Rhythmus erzeugt und weitertrainiert, unabhängig vom Einzelergebnis.
- Treffer/Fehler werden über die ganze Session gesammelt.
- Erst bei manuellem Stopp wird die Gesamtstatistik angezeigt.
- Rhythmus 2/4/8 Takte unverändert.


Neu in V0.4yzf:
- Rhythmus bewertet jetzt zusätzlich die Haltedauer langer Noten.
- Regel identisch zum Blattlesen: Nur Werte länger als ein Metronom-Puls werden geprüft.
- Mindestdauer: über den Beginn des letzten enthaltenen Pulses hinaus halten.
- Zu langes Halten wird nicht bestraft.
- Haltebögen werden als zusammenhängende Gesamtdauer bewertet.
- Trackpad/Maus: pointerdown = Beginn, pointerup = Ende.
- Punkt-Taste: keydown = Beginn, keyup = Ende.
- iPad-TIP: touchstart = Beginn, touchend = Ende.
- 1-Takt-Endlosmodus sammelt auch Haltedauerwerte und zeigt sie erst beim Stopp.


Neu in V0.4yzf:
- Rhythmus-Auswertung optisch/inhaltlich an Blattlesen angeglichen.
- Anzeige: Gesamt, Timing, Haltedauer, Zusätzliche Anschläge.
- Ton/Taste entfällt im Rhythmusmodus.
- Gilt für 2/4/8-Takt-Aufgaben und für die 1-Takt-Endlossession beim Stopp.


Neu in V0.4yzf:
- Rhythmusmodus auf Desktop auf dieselbe schmalere Inhaltsbreite wie Einzelton/Blattlesen begrenzt.
- Tablet/iPad bleiben responsiv.
- Im Übungsmodus nutzt Rhythmus weiterhin die volle verfügbare Breite.
- Keine Trainingslogik verändert.


Neu in V0.4yzf:
- Rhythmus-Desktopbreite nun für die gesamte Arbeitsfläche vereinheitlicht.
- Modus-Tabs, Rhythmus-Titel und Einstellungen sind damit gleich breit wie der restliche Rhythmus-Inhalt.
- Übungsmodus bleibt vollbreit.


Neu in V0.4yzf:
- Rhythmus auf Desktop exakt 1120 px Maximalbreite, identisch mit Einzelton/Blattlesen bei Griffbrett unten quer.
- Gleiche Zentrierung und Außenränder.
- Keine sonstige Änderung.


Neu in V0.4yzf:
- Rhythmus-Bedienelemente vollständig an Einzelton/Blattlesen angeglichen.
- Alte 1040-px-Rhythmus-Sonderbegrenzungen neutralisiert.
- Desktop-Container 1120 px wie Einzelton/Blattlesen unten quer.
- Haupt-Einstellungen: 3 gleich breite Spalten, 38 px Feldhöhe.
- Toolbar: gleiche 4-Spalten-Geometrie; Rhythmus-Schaltflächen haben dadurch dieselbe Breite wie entsprechende Elemente der anderen Modi.
- Materialbereich, Aktionsbuttons, Feedback, Score und Notenbereich verwenden dieselbe volle Innenbreite.
- Keine Trainingslogik verändert.


Neu in V0.4yzf:
- Obere Bedienfelder aller drei Modi auf Desktop exakt vereinheitlicht.
- Einstellungen einklappen / Übungsmodus / Griffbrett-Hilfen: 240 px breit, 40 px hoch.
- Rhythmus verwendet damit exakt dieselben Maße wie Einzelton und Blattlesen.
- Tablet/iPad-Regeln bleiben unverändert.
- Keine Trainingslogik verändert.


Neu in V0.4yzf:
- Rhythmus-Wahlfelder auf iPad/Tablet an Einzelton/Blattlesen angeglichen.
- 2 gleich breite Spalten, 38 px Feldhöhe, gleiche Abstände.
- Toolbar auf Tablet: 2 gleich breite Felder, 40 px Höhe.
- Desktop bleibt gegenüber V0.4yzc unverändert.


Neu in V0.4yzf – UI-Refactor:
- Frühere übereinanderliegende UI-Sonderregeln ab V0.4yn entfernt.
- Eine gemeinsame Klasse `.an-toolbar` für die obere Bedienleiste aller drei Modi.
- Eine gemeinsame Klasse `.an-settings-grid` für die Einstellungsraster aller drei Modi.
- Eine gemeinsame Klasse `.an-field` für gleichartige Wahlfelder.
- Desktop: 3-spaltiges Einstellungsraster; iPad/Tablet: 2-spaltig; schmal: 1-spaltig.
- Toolbar Desktop und iPad: einheitliches 4er-Raster; gleiche Funktionen sind dadurch exakt gleich groß.
- Alle Wahlfelder/Tempozeilen: einheitlich 40 px hoch.
- Rhythmus-Desktopbreite 1120 px wie Einzelton/Blattlesen unten quer.
- Trainingslogik, Rhythmusbewertung, Notendarstellung/Fit und Griffbrettlogik nicht verändert.
