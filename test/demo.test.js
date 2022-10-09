describe (' Pruebas en <DemoComponent>', () => {
    test('Esta prueba no debe de fallar', () => {
        // 1. Inicialización
    
        const message1 = 'Hola mundo';
    
        // 2. Estimulo, lo que se aplica al sujeto de prubea
    
        const message2 = message1.trim();
    
        // 3. Observar el comportamiento... esperado
        expect(message1).toBe(message2);
    });
});

