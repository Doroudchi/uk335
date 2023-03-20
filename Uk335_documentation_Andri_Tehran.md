# Schriftliche Dokumente
Im Rahmen des üKs 335 werden zwei schriftliche Dokumente erwartet. Zum einen die Dokumentation, dabei beschränken wir uns auf die drei Teilbereiche Anforderungen, Architektur/Design und den technischen Bereich. Das zweite Dokument ist eine Installationsanleitung, die bei der Erstbenützung alle wichtigen Schritte aufzeigt.
## 1.1	Anforderungen
Im Dokumentationsteil Anforderungen ist Aufgabenstellung, die funktionalen und nicht-funktionalen Anforderungen zu finden. Um die Ansprüche an das Programm klar aufzuzeigen sind User-Stories zu verwenden. 
  
Abbildung 1 Beispiel User-Storie

## 1.2	Architektur / Design
Im Architekur- und Designteil wird Struktur und Erscheinen des Projekts beschrieben. Wichtig dabei sind die Anforderungen an das Endprodukt, das Ergebnis wie die Struktur und das Verhalten des Codes. 
Hierbei sind grafische Elemente ein essenzieller Bestandteil. Mockups und effektives Endergebnis werden im Ergebnis beschrieben und verglichen.
 
## 1.3	Technischer Bericht
Im technischen Bericht wird das Testing beschrieben und einen Ausblick auf zukünftige Features und Implementierungen gegeben.
### 1.3.1	Testing
Zum Testing gehören Test-Cases, welche auf den User-Stories basieren. Die erstellten Test-Cases werden im Anschluss an die Realisierung geprüft. Das Ergebnis wird dabei im Testprotokoll festgehalten.
Test Protocol
TestCaseId	Component	Priority	Description/
Test Summary	Pre-requisites	Test Steps	Expected Result	Actual Result	Status	Test Executed By
GoogleSearch_1	Search_Bar_Module	P0	Verify that when a user writes a search term and presses enter, search results should be displayed	Browser is launched	1. Write the url - http://google.com in the browser's URL bar and press enter.	Search results related to 'apple' should be displayed	Search results with 'apple' keyword are displayed	Pass	TesterK
					2. Once google.com is launched, write the search term - "Apple" in the google search bar.				
					3. Press enter.				
Abbildung 2 Beispiel Testprotokoll

Der erwartete Umfang der Testabdeckung beträgt ein Happy-Path pro Feature und 2 Error-Paths (gesamthaft).

### 1.3.2	Form der Dokumentation
Die vollständige Dokumentation soll im main-Branch des Repo der Projektarbeit abgelegt werden. Der Dateiname ist dabei nachfolgendem Schema zu wählen:
Repositoryname_documentation_name1_name2_name3
Die Datei ist dabei entweder ein PDF oder ein Markdown (.md) File.

## 1.4	Installationsanleitung
Neben der Dokumentation wird eine Installationsanleitung benötigt. Diese enthält alle notwendigen Schritte, damit das Projekt bei sich gestartet werden kann.

### 1.4.1	Form der Installationsanleitung
Die Anleitung soll in der readme.md Datei im main-Branch festgehalten werden.

## 1.5	Code Dokumentation
Neben den Dokumenten soll im TSDocs im Code verwendet werden. TSDocs ist für TypeScript das, was JavaDocs für Java ist. Es beschreibt die Funktionalitäten des Codes und lässt sich mit zusätzlichen Tools extrahieren und zu einer Dokumentation zusammengefügt. TSDocs muss für die wichtigsten Funktionen vorhanden sein. 