# Diagrama de Secuencia - Envío de formulario y solicitudes HTTP

Este diagrama muestra el flujo de interacción entre el navegador y el servidor cuando se envía un formulario que provoca múltiples solicitudes HTTP.

```mermaid
sequenceDiagram
Navegador->>Servidor: POST /new_note (evento envío formulario)
Servidor-->>Navegador: HTTP 302 (redirección a /notes)
Navegador->>Servidor: GET /notes (redirección)
Servidor-->>Navegador: Página Notas

Note right of Navegador: Recarga de página provoca 3 solicitudes más

Navegador->>Servidor: GET /main.css (hoja de estilo)
Servidor-->>Navegador: main.css

Navegador->>Servidor: GET /main.js (código JavaScript)
Servidor-->>Navegador: main.js

Navegador->>Servidor: GET /data.json (datos sin procesar de notas)
Servidor-->>Navegador: data.json
``` 
