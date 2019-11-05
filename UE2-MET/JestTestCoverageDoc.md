## Dokumentation zur Nutzung der Test Coverage von Jest

Jest ist ein JavaScript Test-Framework, das den Schwerpunkt auf Einfachheit legt. Es funktioniert
mit Projekten die Babel, TypeScript, Node, React, Angular, Vue 
uvm. verwenden.

### Vorbereitung

Bevor mit der Test Coverage Jest gearbeitet werden kann,
ist das Node Package Modul in die devDependencies zu installieren.

    npm install --save-dev jest
    
Außerdem wird für das Nutzen der Typen (https://www.npmjs.com/package/@types/jest), 
die Jest definiert, auch das entsprechende NPM Modul benötigt.

    npm install --save @types/jest
    
Des Weiteren ist es möglich, die Jest-CLI (https://jestjs.io/docs/en/cli) zu installieren und entsprechend
mit den Kommandos, die Test Coverage zu starten.

Das vorliegende Projekt wurde mit Stencil (https://stenciljs.com/) aufgesetzt. Stencil bringt in den Befehl
    
    npm run test
    
bereits mit. Um nun die Coverage zu starten, wird der nachfolgende Befehl auf der Kommandozeile
ausgeführt:

    npm run test --coverage
    
In der Kommandozeile erscheint nun eine Übersicht, welche Tests
entsprechend prozentual abgedeckt sind.

![Commandline](assets/Terminal.png)

In dem Projekt wird nun automatisch ein Ordner, 
der sich coverage nennt, generiert.
Es ist dann auch möglich, die Test-Coverage im Browser aufzurufen.

    coverage > Icov-report > index.html
    
![Coverage](assets/InitialCoverage.png)

Des Weiteren kann die Testabdeckung einzeln getesteter Dateien
eingesehen werden .

![Coverage im Detail](assets/DetailedInitialCoverage.png)

Es ist zu sehen, wie oft Funktionen getestet wurden. (Hier der Rückgabewert 4x).

Für das Projekt Shopping-List () wurde nun ein Test angelegt
    
    describe('Shopping List Input', () => {
        it('should render an input field', async () => {
            const page = await newSpecPage({ components: [ShoppingList] });
    
            await page.setContent(`
                <shopping-list>
                </shopping-list>
            `);
    
            expect(page.root.shadowRoot.querySelector('shopping-list').querySelector('input')).toHaveAttribute('type');
        });
    });
    
Wenn nun die Code-Coverage ausgeführt wird, ist zu sehen, dass ein Test fehl geschlagen ist, jedoch 
eine 100%ige Testabdeckung vorliegt:
![Fehlgeschlagener Test](assets/CrashedTest.png)

Über der Coverage wird der Fehler angezeigt:

     Shopping List Input › should render an input field
    
        TypeError: Cannot read property 'querySelector' of null
    
          11 |         `);
          12 | 
        > 13 |         expect(page.root.shadowRoot.querySelector('.shopping-list').querySelector('input')).toHaveAttribute('type');
             |                                                                   ^
          14 |     });
          15 | });
    
          at Object.it (tests/input.spec.ts:13:67)

Die Implementierung des Inputfeldes ist noch nicht erfolgt. Um den Test nun erfolgreich auszuführen, wird der
entsprechende Quellcode implementiert.

![Erfolgreicher Test](assets/SucceededTest.png)

Es kann manchmal etwas unübersichtlich werden, wenn mehrere Tests fehl schalgen.
Es besteht die Möglichkeit, bestimmte Tests zu deaktivieren, indem ein x vor den auszuführenden
Test gesetzt wird

    xit('should render an input field with value' ...);
    xdescribe('Shopping List Input',...);