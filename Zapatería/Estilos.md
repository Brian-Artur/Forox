```ts
import { StyleService } from '../../services/StyleService';

// 1. Definición de estilos (fuera de la clase para mejor rendimiento)
const buttonStyles = {
  primary: {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '10px 20px',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s'
  },
  hover: {
    backgroundColor: '#45a049'
  }
};

export class Button {
  private styleService = StyleService.getInstance();
  private element: HTMLButtonElement;

  constructor(text: string) {
    // 2. Registro de estilos (solo una vez por tipo de componente)
    this.styleService.registerComponentStyles('Button', buttonStyles);
    
    // 3. Creación del elemento
    this.element = document.createElement('button');
    this.element.textContent = text;
    
    // 4. Aplicación de estilos base
    this.styleService.applyStyles(this.element, 'primary', 'Button');
    
    // 5. Añadir interactividad
    this.setupEvents();
    
    document.body.appendChild(this.element);
  }

  private setupEvents(): void {
    // 6. Aplicar estilos dinámicos
    this.element.addEventListener('mouseenter', () => {
      this.styleService.applyStyles(this.element, 'hover', 'Button');
    });
    
    this.element.addEventListener('mouseleave', () => {
      this.styleService.applyStyles(this.element, 'primary', 'Button');
    });
  }
}
```